"use client";

import React, { createContext, useContext, useState } from 'react';

// 1. On définit ce que notre "Cerveau" va gérer
interface PrivacyContextType {
  isPrivate: boolean;           // Est-ce que c'est caché ?
  togglePrivacy: () => void;    // Fonction pour changer l'état
}

// 2. On crée la "Station de Radio" (le Context)
const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined);

// 3. Le "Provider" : C'est l'antenne qui diffuse l'information
export const PrivacyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPrivate, setIsPrivate] = useState(false);

  const togglePrivacy = () => setIsPrivate(!isPrivate);

  return (
    <PrivacyContext.Provider value={{ isPrivate, togglePrivacy }}>
      {children}
    </PrivacyContext.Provider>
  );
};

// 4. Le "Hook" : C'est le petit appareil pour écouter la radio facilement
export const usePrivacy = () => {
  const context = useContext(PrivacyContext);
  if (!context) throw new Error("usePrivacy doit être utilisé dans un PrivacyProvider");
  return context;
};
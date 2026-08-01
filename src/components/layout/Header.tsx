"use client";

import { Bell, Search, Eye, EyeOff } from 'lucide-react';
// import { useState } from 'react';
import { usePrivacy } from "@/context/PrivacyContext"; // On importe le "Hook"

export const Header = () => {
//   const [isPrivate, setIsPrivate] = useState(false);
    const { isPrivate, togglePrivacy } = usePrivacy();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-mansa-black/60 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between">
        
        {/* Section Gauche : Titre dynamique */}
        <div>
          <h2 className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">Tableau de Bord</h2>
          <h1 className="text-2xl font-semibold mt-1">Akwaba, Mansa</h1>
        </div>

        {/* Section Droite : Actions */}
        <div className="flex items-center gap-6">
          
          {/* Barre de recherche minimaliste */}
          <div className="hidden md:flex items-center gap-3 bg-mansa-anthracite border border-white/5 px-4 py-2 rounded-full w-64">
            <Search size={18} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="bg-transparent border-none outline-none text-sm text-mansa-offWhite placeholder:text-gray-600"
            />
          </div>

          {/* Privacy Toggle */}
          <button 
            onClick={togglePrivacy}
            className="p-2 hover:bg-mansa-anthracite rounded-full transition-colors text-mansa-gold"
            title={isPrivate ? "Afficher les montants" : "Masquer les montants"}
          >
            {isPrivate ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <Bell size={20} className="text-gray-500 hover:text-mansa-offWhite cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-mansa-gold rounded-full border-2 border-mansa-black"></span>
          </div>

          {/* Avatar Utilisateur */}
          <div className="w-10 h-10 rounded-full border-2 border-mansa-gold/30 overflow-hidden bg-mansa-anthracite">
             {/* Ici on mettra une image plus tard */}
             <div className="w-full h-full flex items-center justify-center text-xs font-bold">MK</div>
          </div>
        </div>
      </div>
    </header>
  );
};
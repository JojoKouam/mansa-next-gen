"use client";

import { Bell, Search, Eye, EyeOff } from 'lucide-react';
import { usePrivacy } from "@/context/PrivacyContext";

export const Header = () => {
  const { isPrivate, togglePrivacy } = usePrivacy();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-mansa-black/60 backdrop-blur-xl p-4 md:p-6">
      <div className="flex items-center justify-between gap-2">
        
        {/* SECTION GAUCHE : Burger (externe) + Titre */}
        <div className="pl-10 lg:pl-0 min-w-0">
          <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-widest truncate">
            Tableau de Bord
          </h2>
          <h1 className="text-lg md:text-2xl font-semibold truncate">
            Akwaba, Mansa
          </h1>
        </div>

        {/* SECTION DROITE : Les Actions (Recherche, Privacy, Notif, Profil) */}
        <div className="flex items-center gap-1 md:gap-4 shrink-0">
          
          {/* RECHERCHE : Icône sur Mobile, Barre sur PC */}
          <div className="flex items-center">
            {/* Version PC */}
            <div className="hidden lg:flex items-center gap-3 bg-mansa-anthracite border border-white/5 px-4 py-2 rounded-full w-64 focus-within:border-mansa-gold transition-all">
              <Search size={18} className="text-gray-500" />
              <input type="text" placeholder="Rechercher..." className="bg-transparent border-none outline-none text-sm text-mansa-offWhite w-full" />
            </div>
            {/* Version Mobile : Toujours visible si < lg */}
            <button className="lg:hidden p-2 hover:bg-mansa-anthracite rounded-full text-gray-400">
              <Search size={20} />
            </button>
          </div>

          {/* PRIVACY : Toujours visible */}
          <button 
            onClick={togglePrivacy}
            className="p-2 hover:bg-mansa-anthracite rounded-full text-mansa-gold transition-transform active:scale-90"
          >
            {isPrivate ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {/* NOTIFICATIONS : Toujours visible maintenant */}
          <button className="p-2 hover:bg-mansa-anthracite rounded-full relative text-gray-400">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-mansa-gold rounded-full border border-mansa-black"></span>
          </button>

          {/* PROFIL : On le réduit un peu sur mobile */}
          <div className="ml-1 w-8 h-8 md:w-10 md:h-10 rounded-full border border-mansa-gold/30 bg-mansa-anthracite flex items-center justify-center text-[10px] md:text-xs font-bold shrink-0">
             MK
          </div>
        </div>
      </div>
    </header>
  );
};
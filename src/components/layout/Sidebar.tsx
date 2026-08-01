"use client"; // Obligatoire car on est dans un composant interactif

import { LayoutDashboard, SendHorizontal, PiggyBank, UserCircle, Settings } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-mansa-black border-r border-white/5 p-6 flex flex-col">
      
      {/* Logo Mansa */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 bg-linear-to-br from-[#D4AF37] to-[#AA8839] rounded-lg" />
        <h1 className="text-xl font-bold tracking-tighter uppercase text-mansa-offWhite">
          Mansa
        </h1>
      </div>

      {/* Menu de Navigation */}
      <nav className="flex-1 space-y-2">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/" active />
        <SidebarItem icon={SendHorizontal} label="Virements" href="/virements" />
        <SidebarItem icon={PiggyBank} label="Épargne" href="/epargne" />
        <SidebarItem icon={UserCircle} label="Profil" href="/profil" />
        <SidebarItem icon={Settings} label="Paramètres" href="/settings" />
      </nav>

      {/* Footer Sidebar (Optionnel pour le style) */}
      <div className="mt-auto p-4 bg-mansa-anthracite rounded-2xl border border-white/5">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Status</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium">Compte Vérifié</span>
        </div>
      </div>
    </aside>
  );
};
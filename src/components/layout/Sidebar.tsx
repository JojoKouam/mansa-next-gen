"use client";

import { useState } from 'react'; // Pour gérer l'ouverture sur mobile
import { LayoutDashboard, SendHorizontal, PiggyBank, UserCircle, Settings, Menu, X } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { cn } from '@/lib/utils';

import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Fermé par défaut sur mobile

  return (
    <>
      {/* Bouton Burger : Visible uniquement sur mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-4.5 z-60 text-mansa-gold p-1 hover:scale-110 transition-transform"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-mansa-black border-r border-white/5 p-6 flex flex-col z-50 transition-transform duration-300",
        "w-72 lg:translate-x-0", 
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12 px-2 mt-8 lg:mt-0">
          <div className="w-8 h-8 bg-linear-to-br from-[#D4AF37] to-[#AA8839] rounded-lg" />
          <h1 className="text-xl font-bold tracking-tighter uppercase text-mansa-offWhite">Mansa</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {[
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: SendHorizontal, label: "Virements", href: "/virements" },
    { icon: PiggyBank, label: "Épargne", href: "/epargne" },
    { icon: UserCircle, label: "Profil", href: "/profil" },
    { icon: Settings, label: "Paramètres", href: "/settings" },
  ].map((item) => (
    <SidebarItem 
      key={item.href} 
      icon={item.icon} 
      label={item.label} 
      href={item.href} 
      active={pathname === item.href} 
    />
  ))}
        </nav>
      </aside>

      {/* Overlay : Fond sombre quand on ouvre le menu sur mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
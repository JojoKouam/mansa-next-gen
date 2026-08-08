"use client";

import { 
  PiggyBank, Briefcase, Home, Car, Plus, Lightbulb, 
  ShoppingCart, Plane, Heart, Rocket, Laptop 
} from "lucide-react";import { SavingsVault } from "@/components/dashboard/SavingsVault";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

const AVAILABLE_ICONS = [
  { id: "briefcase", icon: Briefcase },
  { id: "home", icon: Home },
  { id: "car", icon: Car },
  { id: "rocket", icon: Rocket },
  { id: "plane", icon: Plane },
  { id: "laptop", icon: Laptop },
  { id: "cart", icon: ShoppingCart },
  { id: "piggy", icon: PiggyBank },
];
export default function EpargnePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

  const vaults = [
    {
      title: "Impôts & Taxes 2024",
      currentAmount: 2400000,
      targetAmount: 5000000,
      icon: Briefcase,
      color: "text-mansa-gold"
    },
    {
      title: "Nouveau Bureau Abidjan",
      currentAmount: 8500000,
      targetAmount: 10000000,
      icon: Home,
      color: "text-blue-400"
    },
    {
      title: "Fonds de Roulement",
      currentAmount: 1200000,
      targetAmount: 2000000,
      icon: PiggyBank,
      color: "text-green-400"
    },
    {
      title: "Véhicule de Livraison",
      currentAmount: 4500000,
      targetAmount: 15000000,
      icon: Car,
      color: "text-orange-500"
    }
  ];
   const handleCreateVault = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccess(true);
  };
    const [selectedIconId, setSelectedIconId] = useState("briefcase");


  return (
    <div className="max-w-7xl mx-auto space-y-10">
         <Toast 
        show={showSuccess} 
        message="Coffre-fort créé" 
        description="Votre nouvel objectif d'épargne a été configuré avec succès."
        onClose={() => setShowSuccess(false)}
      />
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em]">Patrimoine</h2>
          <h1 className="text-3xl font-bold mt-2">Mes Coffres-forts</h1>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-mansa-gold text-mansa-black px-6 py-3 rounded-2xl font-bold hover:scale-[1.02] transition-all flex items-center gap-2"
        >
          <Plus size={20} /> Nouveau Coffre
        </button>
      </header>
      {/* LISTE DES COFFRES */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vaults.map((vault) => (
          <SavingsVault key={vault.title} {...vault} />
        ))}
      </section>
      {/* MODAL DE CRÉATION */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Créer un nouvel objectif"
      >
        <form onSubmit={handleCreateVault} className="space-y-6">
             {/* SÉLECTEUR D'ICÔNE */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-gray-500">Choisir une icône</label>
            <div className="grid grid-cols-4 gap-3">
              {AVAILABLE_ICONS.map((item) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIconId(item.id)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all flex items-center justify-center",
                      selectedIconId === item.id 
                        ? "bg-mansa-gold/10 border-mansa-gold text-mansa-gold shadow-lg shadow-mansa-gold/10" 
                        : "bg-mansa-black border-white/5 text-gray-500 hover:border-white/20"
                    )}
                  >
                    <IconComp size={20} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500">Nom du projet</label>
            <input type="text" placeholder="Ex: Voyage d'affaires Dubai" className="w-full bg-mansa-black border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-mansa-gold/30 transition-all" required />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500">Montant Cible (FCFA)</label>
            <input type="number" placeholder="Ex: 5.000.000" className="w-full bg-mansa-black border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-mansa-gold/30 transition-all" required />
          </div>

          <div className="p-4 bg-mansa-gold/5 border border-mansa-gold/20 rounded-2xl flex gap-4">
                <div className="text-mansa-gold shrink-0 mt-0.5">
                    <Lightbulb size={18} />
                </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        <span className="text-mansa-gold font-bold">Conseil Mansa :</span> Épargner régulièrement d&apos;aide à faire des projets sur le long terme.
                    </p>
                </div>

          <button type="submit" className="w-full bg-linear-to-r from-[#D4AF37] to-[#AA8839] text-mansa-black font-bold py-4 rounded-2xl hover:opacity-90 transition-all">
            Confirmer la création
          </button>
        </form>
      </Modal>
    </div>
  );
}
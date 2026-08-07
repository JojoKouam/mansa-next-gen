"use client";

import { PiggyBank, Briefcase, Home, Car } from "lucide-react";
import { SavingsVault } from "@/components/dashboard/SavingsVault";

export default function EpargnePage() {
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

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em]">Patrimoine</h2>
          <h1 className="text-3xl font-bold mt-2">Mes Coffres-forts</h1>
        </div>
        <button className="bg-mansa-anthracite border border-white/5 text-mansa-gold px-6 py-3 rounded-2xl font-bold hover:bg-mansa-gold/10 transition-all">
          + Nouveau Coffre
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vaults.map((vault) => (
          <SavingsVault key={vault.title} {...vault} />
        ))}
      </section>
    </div>
  );
}
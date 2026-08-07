"use client";

import { motion } from "framer-motion";
import { LucideIcon, Target } from "lucide-react";
import { usePrivacy } from "@/context/PrivacyContext";

interface SavingsVaultProps {
  title: string;
  currentAmount: number;
  targetAmount: number;
  icon: LucideIcon;
  color: string;
}

export const SavingsVault = ({ title, currentAmount, targetAmount, icon: Icon, color }: SavingsVaultProps) => {
  const { isPrivate } = usePrivacy();
  
  // Calcul du pourcentage de progression
  const progress = Math.min((currentAmount / targetAmount) * 100, 100);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + " FCFA";
  };

  return (
    <div className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 flex flex-col gap-6 group hover:border-mansa-gold/20 transition-all duration-500">
      <div className="flex justify-between items-start">
        <div className={`p-4 rounded-2xl bg-mansa-black/50 ${color}`}>
          <Icon size={24} />
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
          <Target size={14} />
          Objectif: {isPrivate ? "••••••" : formatPrice(targetAmount)}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-mansa-offWhite">{title}</h3>
        <p className="text-2xl font-bold text-mansa-gold mt-1">
          {isPrivate ? "•••••• FCFA" : formatPrice(currentAmount)}
        </p>
      </div>

      {/* Barre de progression */}
      <div className="space-y-3">
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <span>Progression</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-mansa-black rounded-full overflow-hidden border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full bg-linear-to-r from-[#D4AF37] to-[#AA8839]`}
          />
        </div>
      </div>
    </div>
  );
};
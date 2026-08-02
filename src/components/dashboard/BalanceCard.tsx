"use client";

import { usePrivacy } from "@/context/PrivacyContext";
import { cn } from "@/lib/utils";
import { Wallet, ArrowUpRight } from "lucide-react";

// On définit ce qu'une carte doit recevoir
interface BalanceCardProps {
  title: string;
  amount: string;
  type: "mansa" | "orange" | "wave";
  trend: string;
}

export const BalanceCard = ({ title, amount, type, trend }: BalanceCardProps) => {
  const { isPrivate } = usePrivacy();

  // On définit des couleurs selon le type
  const styles = {
    mansa: "border-mansa-gold/20 from-mansa-gold/10",
    orange: "border-orange-500/20 from-orange-500/10",
    wave: "border-blue-500/20 from-blue-500/10",
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-4xl border p-8 bg-linear-to-br to-transparent backdrop-blur-md transition-all duration-500 hover:scale-[1.02]",
      styles[type]
    )}>
      {/* Petit effet de reflet en haut à gauche */}
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />

      <div className="flex justify-between items-start mb-6">
        <div className={cn(
          "p-3 rounded-2xl",
          type === "mansa" ? "bg-mansa-gold/10 text-mansa-gold" : 
          type === "orange" ? "bg-orange-500/10 text-orange-500" : "bg-blue-500/10 text-blue-500"
        )}>
          <Wallet size={24} />
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
          {trend} <ArrowUpRight size={16} />
        </div>
      </div>

      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold tracking-tight">
          {isPrivate ? "•••••• FCFA" : `${amount} FCFA`}
        </h3>
      </div>

      {/* Décoration subtile au fond */}
      <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={cn(
          "h-full w-1/3 rounded-full",
          type === "mansa" ? "bg-mansa-gold" : 
          type === "orange" ? "bg-orange-500" : "bg-blue-500"
        )} />
      </div>
    </div>
  );
};
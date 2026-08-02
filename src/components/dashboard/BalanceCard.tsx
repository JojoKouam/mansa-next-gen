"use client";

import { usePrivacy } from "@/context/PrivacyContext";
import { cn } from "@/lib/utils";
import {  ArrowUpRight } from "lucide-react";

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
  const renderLogo = () => {
    switch(type) {
      case 'orange': return <span className="font-bold text-orange-500">OM</span>;
      case 'wave': return <span className="font-bold text-blue-500">W</span>;
      default: return <div className="w-5 h-5 bg-mansa-gold rounded-full" />;
    }
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-4xl border p-8 bg-linear-to-br to-transparent backdrop-blur-md transition-all duration-500",
      type === "mansa" ? "border-mansa-gold/20 from-mansa-gold/10" : 
      type === "orange" ? "border-orange-500/20 from-orange-500/10" : "border-blue-500/20 from-blue-500/10"
    )}>
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-white/5 rounded-lg border border-white/10">
              {renderLogo()}
           </div>
           <p className="text-gray-500 text-sm font-medium">{title}</p>
        </div>
        <div className="flex items-center gap-1 text-green-400 text-sm font-medium bg-green-400/10 px-2 py-1 rounded-full">
          {trend} <ArrowUpRight size={14} />
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold tracking-tight">
          {isPrivate ? "•••••• FCFA" : `${amount} FCFA`}
        </h3>
      </div>
    </div>
  );
};
"use client";

import { usePrivacy } from "@/context/PrivacyContext";
import { cn } from "@/lib/utils";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Smartphone, 
  CreditCard, 
  Banknote 
} from "lucide-react";

interface TransactionProps {
  title: string;
  category: string;
  date: string;
  amount: number;
  type: "income" | "expense";
  operator: "wave" | "orange" | "bank";
}

export const TransactionItem = ({ title, category, date, amount, type, operator }: TransactionProps) => {
  const { isPrivate } = usePrivacy();

  // Formateur de prix (ex: 50.000 FCFA)
  const formatAmount = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(val) + " FCFA";
  };

  // Choix de l'icône selon l'opérateur
  const getIcon = () => {
    switch (operator) {
      case "wave": return <Smartphone size={18} className="text-blue-400" />;
      case "orange": return <Smartphone size={18} className="text-orange-500" />;
      default: return <CreditCard size={18} className="text-mansa-gold" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/2 transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Cercle de l'icône */}
        <div className="w-12 h-12 rounded-full bg-mansa-anthracite border border-white/5 flex items-center justify-center group-hover:border-mansa-gold/30 transition-colors">
          {getIcon()}
        </div>
        
        {/* Infos texte */}
        <div>
          <h4 className="font-medium text-mansa-offWhite text-sm md:text-base">{title}</h4>
          <p className="text-xs text-gray-500">{category} • {date}</p>
        </div>
      </div>

      {/* Montant */}
      <div className="text-right">
        <p className={cn(
          "font-semibold text-sm md:text-base flex items-center justify-end gap-1",
          type === "income" ? "text-green-400" : "text-mansa-offWhite"
        )}>
          {type === "income" ? "+" : "-"} 
          {isPrivate ? "••••••" : formatAmount(amount)}
          {type === "income" ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
        </p>
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">{operator}</p>
      </div>
    </div>
  );
};
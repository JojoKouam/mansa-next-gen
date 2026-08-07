"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Smartphone, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { Toast } from "@/components/ui/Toast";
import { LucideIcon } from "lucide-react"; 
// Types d'opérateurs
type Operator = "wave" | "orange" | "bank";

export default function VirementsPage() {
  const [operator, setOperator] = useState<Operator>("wave");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulation du virement
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setAmount("");
      setRecipient("");
    }, 2000);
  };


  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <Toast 
        show={showSuccess}
        message="Virement effectué"
        description={`Le transfert de ${amount} FCFA vers ${recipient} a été validé.`}
        onClose={() => setShowSuccess(false)}
      />

      <header>
        <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em]">Services</h2>
        <h1 className="text-3xl font-bold mt-2">Effectuer un virement</h1>
      </header>

      {/* 1. SÉLECTEUR D'OPÉRATEUR */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <OperatorCard 
          id="wave"
          label="Wave" 
          icon={Smartphone} 
          active={operator === "wave"} 
          onClick={() => setOperator("wave")}
          color="text-blue-400"
        />
        <OperatorCard 
          id="orange" 
          label="Orange Money" 
          icon={Smartphone} 
          active={operator === "orange"} 
          onClick={() => setOperator("orange")}
          color="text-orange-500"
        />
        <OperatorCard 
          id="bank" 
          label="Compte Bancaire" 
          icon={Landmark} 
          active={operator === "bank"} 
          onClick={() => setOperator("bank")}
          color="text-mansa-gold"
        />
      </section>

      {/* 2. FORMULAIRE DE TRANSFERT */}
      <motion.form 
        layout
        onSubmit={handleTransfer}
        className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Destinataire */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">
              {operator === "bank" ? "Numéro de Compte (RIB)" : "Numéro de Téléphone"}
            </label>
            <input 
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder={operator === "bank" ? "CI000 0000 0000..." : "07 00 00 00 00"}
              className="w-full bg-mansa-black/50 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-mansa-gold/30 transition-all"
              required
            />
          </div>

          {/* Montant */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Montant (FCFA)</label>
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Min. 500 FCFA"
              className="w-full bg-mansa-black/50 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-mansa-gold/30 transition-all text-mansa-gold font-bold text-xl"
              required
            />
          </div>
        </div>

        {/* Info Frais (Simulé) */}
        <div className="bg-mansa-black/30 rounded-2xl p-4 flex justify-between items-center border border-white/2">
           <span className="text-xs text-gray-500 italic">Frais de transfert Mansa (1%)</span>
           <span className="text-sm font-medium">
             {amount ? (parseInt(amount) * 0.01).toLocaleString() : 0} FCFA
           </span>
        </div>

        <button 
          disabled={isProcessing}
          className={cn(
            "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all",
            isProcessing ? "bg-gray-800 text-gray-500" : "bg-linear-to-r from-[#D4AF37] to-[#AA8839] text-mansa-black hover:scale-[1.01]"
          )}
        >
          {isProcessing ? "Traitement en cours..." : "Confirmer le transfert"}
          {!isProcessing && <Send size={20} />}
        </button>
      </motion.form>
    </div>
  );
}

// Sous-composant pour les cartes d'opérateurs
interface OperatorCardProps {
  id: string;        // On ajoute l'id ici !
  label: string;
  icon: LucideIcon;  // On remplace 'any' par 'LucideIcon'
  active: boolean;
  onClick: () => void;
  color: string;
}


// 2. On applique l'interface au composant
function OperatorCard({ label, icon: Icon, active, onClick, color }: OperatorCardProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-4 p-6 rounded-[28px] border transition-all duration-300 w-full",
        active 
          ? "bg-mansa-anthracite border-mansa-gold/50 shadow-xl shadow-mansa-gold/5" 
          : "bg-mansa-anthracite/20 border-white/5 hover:border-white/10"
      )}
    >
      <div className={cn("p-4 rounded-2xl bg-mansa-black/50", active ? color : "text-gray-600")}>
        <Icon size={28} />
      </div>
      <span className={cn("text-[10px] font-bold uppercase tracking-widest", active ? "text-mansa-offWhite" : "text-gray-600")}>
        {label}
      </span>
    </button>
  );
}
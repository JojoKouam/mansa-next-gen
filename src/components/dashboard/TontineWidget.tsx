"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Trophy } from "lucide-react";

export const TontineWidget = () => {
  const progress = 65; // 65% de la tontine récoltée
  const totalAmount = "1.000.000";
  const currentSaved = "650.000";

  return (
    <div className="h-full bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 flex flex-col justify-between">
      
      {/* Header du Widget */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-mansa-offWhite">Tontine &quot;Succès&quot;</h3>
          <p className="text-sm text-gray-500 mt-1">Cercle d&apos;investissement entrepreneurs</p>
        </div>
        <div className="bg-mansa-gold/10 p-3 rounded-2xl text-mansa-gold">
          <Trophy size={24} />
        </div>
      </div>

      {/* Visuel Central : Progression Circulaire */}
      <div className="relative flex items-center justify-center py-10">
        {/* Cercle de fond */}
        <svg className="w-48 h-48 transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-white/5"
          />
          {/* Cercle de progression animé */}
          <motion.circle
            cx="96"
            cy="96"
            r="80"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={502} // Circonférence (2 * PI * r)
            initial={{ strokeDashoffset: 502 }}
            animate={{ strokeDashoffset: 502 - (502 * progress) / 100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-mansa-gold"
          />
        </svg>

        {/* Texte au centre du cercle */}
        <div className="absolute text-center">
          <p className="text-3xl font-bold">{progress}%</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Récoltés</p>
        </div>
      </div>

      {/* Détails et Membres */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-xs text-gray-500 flex items-center gap-2">
            <Calendar size={14} /> Prochain tour
          </p>
          <p className="font-medium text-sm text-mansa-gold">15 Août 2023</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs text-gray-500 flex items-center gap-2 justify-end">
            <Users size={14} /> Membres
          </p>
          <div className="flex justify-end -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-mansa-black bg-mansa-anthracite flex items-center justify-center text-[8px] font-bold">
                M{i}
              </div>
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-mansa-black bg-mansa-gold text-mansa-black flex items-center justify-center text-[8px] font-bold">
              +1
            </div>
          </div>
        </div>
      </div>

      {/* Bouton d'action Rapide */}
      <button className="w-full mt-6 py-4 bg-mansa-gold text-mansa-black font-bold rounded-2xl hover:bg-mansa-goldSoft transition-colors">
        Verser ma part ({currentSaved} / {totalAmount} FCFA)
      </button>
    </div>
  );
};
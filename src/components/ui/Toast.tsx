"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  show: boolean;
  message: string;
  description?: string;
  type?: "success" | "info" | "error";
  onClose: () => void;
}

export const Toast = ({ show, message, description, type = "success", onClose }: ToastProps) => {
  // Fermeture automatique après 4 secondes
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          className="fixed top-6 right-6 z-100 bg-[#121212] border border-white/10 p-4 rounded-2xl shadow-2xl shadow-black flex items-start gap-4 min-w-[320px]"
        >
          {/* Icône selon le type */}
          <div className="mt-1">
            {type === "success" && <CheckCircle2 className="text-green-500" size={20} />}
            {type === "info" && <Info className="text-mansa-gold" size={20} />}
            {type === "error" && <AlertCircle className="text-red-500" size={20} />}
          </div>

          {/* Contenu */}
          <div className="flex-1">
            <p className="text-sm font-bold text-mansa-offWhite">{message}</p>
            {description && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>}
          </div>

          {/* Bouton fermer */}
          <button onClick={onClose} className="text-gray-600 hover:text-mansa-offWhite transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
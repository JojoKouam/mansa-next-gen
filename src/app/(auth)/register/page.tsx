"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Mail, User, Briefcase, CheckCircle2, Eye, EyeOff  } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [isRegistered, setIsRegistered] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  // Fonction pour simuler l'inscription
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);

    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-mansa-black text-mansa-offWhite">
      
      {/* ALERTE DE SUCCÈS */}
      <AnimatePresence>
        {isRegistered && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-mansa-anthracite border border-mansa-gold/50 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Compte Mansa créé !</p>
              <p className="text-xs text-gray-400">Redirection vers la connexion...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Devenir un Mansa</h1>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Rejoignez l&apos;élite entrepreneuriale</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Nom Complet */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Nom Complet</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="text" placeholder="Ex: Jean Kouassi" className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-mansa-gold/50 transition-all text-sm" required />
            </div>
          </div>

          {/* Nom de l'Entreprise */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Nom de l&apos;Entreprise</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="text" placeholder="Ex: Mansa Tech SARL" className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-mansa-gold/50 transition-all text-sm" required />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Email Pro</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="email" placeholder="directeur@entreprise.ci" className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-mansa-gold/50 transition-all text-sm" required />
            </div>
          </div>

          {/* Mot de passe */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-mansa-gold/50 transition-all text-sm" 
              />

              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-mansa-gold transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirmation Mot de passe */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Confirmer le mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              
              <input 
                type={showConfirmPassword? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-mansa-gold/50 transition-all text-sm" 
              />

              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-mansa-gold transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-linear-to-r from-[#D4AF37] to-[#AA8839] text-mansa-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all mt-4 shadow-xl shadow-mansa-gold/10"
          >
            Créer mon compte <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-600">
          Déjà partenaire ? <Link href="/login" className="text-mansa-gold hover:underline font-medium">Se connecter</Link>
        </p>
      </motion.div>
    </div>
  );
}
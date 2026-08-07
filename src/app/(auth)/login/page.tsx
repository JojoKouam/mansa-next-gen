"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-linear-to-br from-[#D4AF37] to-[#AA8839] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-mansa-gold/20">
             <span className="text-mansa-black text-2xl font-bold italic">M</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Akwaba sur Mansa</h1>
          <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">L&apos;excellence financière</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 ml-1">Email Professionnel</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input type="email" placeholder="nom@entreprise.ci" className="w-full bg-mansa-anthracite border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-mansa-gold/50 transition-all" />
            </div>
          </div>

          <div className="space-y-2">
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

          <button 
            onClick={() => router.push("/")}
            className="w-full bg-linear-to-r from-[#D4AF37] to-[#AA8839] text-mansa-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-mansa-gold/10"
          >
            Accéder au Dashboard <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
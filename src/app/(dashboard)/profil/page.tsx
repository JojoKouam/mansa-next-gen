"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Briefcase, Shield, LogOut, Camera, 
  Settings, Globe, CreditCard, ChevronRight, 
  LucideIcon
} from "lucide-react";

export default function ProfilPage() {
  // 1. L'état pour savoir quel onglet est ouvert
  const [activeTab, setActiveTab] = useState<"profil" | "settings">("profil");

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em]">Gestion du compte</h2>
          <h1 className="text-3xl font-bold mt-2">Espace Mansa</h1>
        </div>

        {/* 2. LE SÉLECTEUR D'ONGLETS (Style iOS/Apple) */}
        <div className="bg-mansa-anthracite/50 p-1 rounded-2xl border border-white/5 flex relative">
          <TabButton 
            label="Mon Profil" 
            active={activeTab === "profil"} 
            onClick={() => setActiveTab("profil")} 
          />
          <TabButton 
            label="Paramètres" 
            active={activeTab === "settings"} 
            onClick={() => setActiveTab("settings")} 
          />
        </div>
      </header>

      {/* 3. AFFICHAGE CONDITIONNEL DES VUES */}
      <AnimatePresence mode="wait">
        {activeTab === "profil" ? (
          <motion.div
            key="profil"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* ... Ta colonne de gauche (Photo) ... */}
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-mansa-anthracite/30 border border-white/5 rounded-[32px] p-8 text-center relative">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-mansa-gold/10 border-2 border-mansa-gold/30 flex items-center justify-center text-2xl font-bold text-mansa-gold">MK</div>
                    <button className="absolute bottom-0 right-0 p-2 bg-mansa-gold text-mansa-black rounded-full"><Camera size={14} /></button>
                  </div>
                  <h3 className="font-bold">Moussa Koné</h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 italic">Membre Platine</p>
               </div>
               <button className="w-full py-4 rounded-2xl border border-red-500/20 text-red-500 text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-500/5 transition-all">
                  <LogOut size={18} /> Déconnexion
               </button>
            </div>

            {/* Ton contenu Profil actuel (déjà fait précédemment) */}
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-mansa-anthracite/30 border border-white/5 rounded-[32px] p-8 space-y-6">
                <ProfileField label="Nom Complet" value="Moussa Koné" icon={User} />
                <ProfileField label="Email" value="m.kone@mansatech.ci" icon={Mail} />
                <ProfileField label="Entreprise" value="Mansa Tech SARL" icon={Briefcase} />
              </section>
            </div>
          </motion.div>
        ) : (
          /* 4. VUE PARAMÈTRES (La nouveauté) */
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <section className="bg-mansa-anthracite/30 border border-white/5 rounded-[32px] p-8 space-y-8">
              
              {/* Choix de la Langue (La touche locale !) */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-mansa-gold" />
                  <h3 className="font-bold">Langue de l&apos;interface</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Français", "Baoulé", "Dioula", "Sénoufo"].map((lang) => (
                    <button key={lang} className={lang === "Français" ? "px-4 py-2 bg-mansa-gold text-mansa-black rounded-xl text-xs font-bold" : "px-4 py-2 bg-white/5 text-gray-400 rounded-xl text-xs hover:bg-white/10 transition-all"}>
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Plafonds de virement */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className="text-mansa-gold" />
                  <h3 className="font-bold">Limites de virement</h3>
                </div>
                <div className="p-6 bg-mansa-black/40 rounded-2xl border border-white/5">
                   <div className="flex justify-between items-end mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Plafond Quotidien</p>
                      <p className="text-xl font-bold text-mansa-gold">2.000.000 FCFA</p>
                   </div>
                   <div className="h-2 w-full bg-gray-800 rounded-full">
                      <div className="h-full w-2/3 bg-mansa-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                   </div>
                   <p className="text-[10px] text-gray-600 mt-4 italic">Vous pouvez augmenter votre plafond en contactant votre conseiller Mansa Platine.</p>
                </div>
              </div>

            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// COMPOSANT BOUTON D'ONGLET AVEC ANIMATION
function TabButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${active ? 'text-mansa-black' : 'text-gray-500'}`}
    >
      {label}
      {active && (
        <motion.div 
          layoutId="activeTab"
          className="absolute inset-0 bg-mansa-gold rounded-xl -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}

// Sous-composants pour la propreté du code
interface ProfileFieldProps {
  label: string;
  value: string;
  icon: LucideIcon;
}
function ProfileField({ label, value, icon: Icon }: ProfileFieldProps) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">{label}</p>
      <div className="bg-mansa-black/40 border border-white/5 p-4 rounded-2xl text-sm font-medium">
        {value}
      </div>
    </div>
  );
}
interface SecurityToggleProps {
  title: string;
  description: string;
  active: boolean;
}

function SecurityToggle({ title, description, active }:  SecurityToggleProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/2 transition-all">
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
      <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${active ? 'bg-mansa-gold' : 'bg-gray-800'}`}>
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${active ? 'left-7' : 'left-1'}`} />
      </div>
    </div>
  );
}
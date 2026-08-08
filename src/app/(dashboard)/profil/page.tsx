"use client";

import { LucideIcon, User, Mail, Briefcase, Shield, Bell, LogOut, Camera } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function ProfilPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <header>
        <h2 className="text-gray-500 text-[10px] font-medium uppercase tracking-[0.3em]">Gestion</h2>
        <h1 className="text-3xl font-bold mt-2">Mon Profil Mansa</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLONNE GAUCHE : Photo & Status */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 text-center relative overflow-hidden group">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-mansa-gold/10 border-2 border-mansa-gold/30 flex items-center justify-center text-2xl font-bold text-mansa-gold">
                MK
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-mansa-gold text-mansa-black rounded-full shadow-xl hover:scale-110 transition-all">
                <Camera size={14} />
              </button>
            </div>
            <h3 className="font-bold text-lg">Moussa Koné</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Membre Platine</p>
            
            <div className="mt-6 pt-6 border-t border-white/5 flex justify-center gap-2">
               <div className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20">
                 COMPTE VÉRIFIÉ
               </div>
            </div>
          </div>

          <button className="w-full py-4 rounded-2xl border border-red-500/20 text-red-500 text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-500/5 transition-all">
            <LogOut size={18} /> Déconnexion
          </button>
        </div>

        {/* COLONNE DROITE : Infos & Formulaires */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION : INFORMATIONS PERSONNELLES */}
          <section className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <User size={20} className="text-mansa-gold" />
              <h3 className="font-bold">Informations Personnelles</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileField label="Nom Complet" value="Moussa Koné" icon={User} />
              <ProfileField label="Email" value="m.kone@mansatech.ci" icon={Mail} />
              <ProfileField label="Entreprise" value="Mansa Tech SARL" icon={Briefcase} />
              <ProfileField label="Téléphone" value="+225 07 00 00 00 00" icon={Briefcase} />
            </div>
            
            <button className="text-mansa-gold text-sm font-bold hover:underline mt-4">
              Modifier mes informations
            </button>
          </section>

          {/* SECTION : SÉCURITÉ */}
          <section className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield size={20} className="text-mansa-gold" />
              <h3 className="font-bold">Sécurité & Accès</h3>
            </div>

            <div className="space-y-4">
              <SecurityToggle 
                title="Double Authentification (2FA)" 
                description="Sécurisez vos virements par SMS ou Email." 
                active={true} 
              />
              <SecurityToggle 
                title="Notifications de Connexion" 
                description="Recevez une alerte à chaque nouvelle connexion." 
                active={false} 
              />
            </div>
          </section>

        </div>
      </div>
    </div>
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
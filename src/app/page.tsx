"use client";
import { usePrivacy } from "@/context/PrivacyContext";
export default function Home() {
    const { isPrivate } = usePrivacy();
  return (
    <div>
      <h1 className="text-3xl font-bold">Bienvenue sur Mansa</h1>
      <p className="text-red-400 mt-2">Le dashboard commence ici.</p>
      <div className="mt-10 p-6 bg-mansa-anthracite rounded-2xl w-80">
        <p className="text-gray-400 text-sm">Solde Orange Money</p>
        <p className="text-2xl font-bold mt-2">
          {/* Si c'est privé, on met des étoiles, sinon le montant */}
          {isPrivate ? "•••••• FCFA" : "1.250.000 FCFA"}
        </p>
      </div>
    </div>
    
  );
}
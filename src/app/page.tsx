import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { TransactionList } from "@/components/dashboard/TransactionList";

export default function Home() {
  // Voici nos données (le tableau d'objets)
  // En situation réelle, ça viendrait d'une base de données
  const accounts = [
    {
      title: "Compte Mansa Platine",
      amount: "12.500.000",
      type: "mansa" as const,
      trend: "+12%"
    },
    {
      title: "Orange Money",
      amount: "450.000",
      type: "orange" as const,
      trend: "+5%"
    },
    {
      title: "Portefeuille Wave",
      amount: "820.000",
      type: "wave" as const,
      trend: "+8%"
    }
  ];

  return (
    <div className="space-y-10">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Le Mapping : on boucle sur le tableau accounts */}
          {accounts.map((account) => (
            <BalanceCard 
              key={account.title} 
              title={account.title}
              amount={account.amount}
              type={account.type}
              trend={account.trend}
            />
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        </div>
        <div className="lg:col-span-1">
          <TransactionList />
        </div>
        </section>

      {/* Zone pour les futurs graphiques de l'étape 3 suite */}
      <section className="bg-mansa-anthracite/50 border border-white/5 rounded-4xl h-80 flex items-center justify-center italic text-gray-600">
        Graphique des flux (Recharts) - En cours de préparation...
      </section>
    </div>
  );
}
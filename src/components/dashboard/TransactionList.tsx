import { TransactionItem } from "./TransactionItem";

const TRANSACTIONS = [
  {
    id: 1,
    title: "Virement de Mme. Koné",
    category: "Prestation Service",
    date: "Aujourd'hui, 14:20",
    amount: 150000,
    type: "income" as const,
    operator: "bank" as const,
  },
  {
    id: 2,
    title: "Dépôt Wave",
    category: "Réapprovisionnement",
    date: "Aujourd'hui, 09:05",
    amount: 50000,
    type: "income" as const,
    operator: "wave" as const,
  },
  {
    id: 3,
    title: "Paiement CIE",
    category: "Factures",
    date: "Hier, 18:30",
    amount: 32500,
    type: "expense" as const,
    operator: "orange" as const,
  },
  {
    id: 4,
    title: "Retrait Orange Money",
    category: "Cash Out",
    date: "28 Juil. 2023",
    amount: 10000,
    type: "expense" as const,
    operator: "orange" as const,
  }
];

export const TransactionList = () => {
  return (
    <div className="bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold">Activités Récentes</h3>
        <button className="text-mansa-gold text-sm font-medium hover:underline">Voir tout</button>
      </div>

      <div className="space-y-2">
        {TRANSACTIONS.map((t) => (
          <TransactionItem key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
};
"use client";

import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Données fictives (on simulera les mois)
const data = [
  { name: 'Jan', income: 400000, expense: 240000 },
  { name: 'Fév', income: 300000, expense: 139800 },
  { name: 'Mar', income: 900000, expense: 200000 },
  { name: 'Avr', income: 278000, expense: 390800 },
  { name: 'Mai', income: 189000, expense: 480000 },
  { name: 'Juin', income: 239000, expense: 380000 },
];

export const OverviewChart = () => {
  return (
    <div className="h-87.5 w-full bg-mansa-anthracite/30 border border-white/5 rounded-4xl p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold">Flux de Trésorerie</h3>
        <p className="text-xs text-gray-500">Performance des 6 derniers mois</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            {/* Dégradé pour la courbe Or */}
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#666', fontSize: 12}}
            dy={10}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#121212', border: '1px solid #ffffff10', borderRadius: '16px' }}
            itemStyle={{ color: '#D4AF37' }}
          />
          <Area 
            type="monotone" 
            dataKey="income" 
            stroke="#D4AF37" 
            fillOpacity={1} 
            fill="url(#colorIncome)" 
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};                                      
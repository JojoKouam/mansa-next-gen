import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-mansa-black text-mansa-offWhite antialiased`}>
        <div className="flex min-h-screen">
          {/* 1. La Sidebar reste à gauche */}
          <Sidebar />

          {/* 2. On crée un bloc à droite qui contient le Header ET le Contenu */}
          <div className="flex-1 lg:ml-72 flex flex-col">
            <Header />
            
            {/* Le contenu de la page vient juste en dessous du Header */}
            <main className="p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
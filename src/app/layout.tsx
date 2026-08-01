import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

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
          {/* Notre Sidebar qui sera à gauche */}
          <Sidebar />
          {/* Le contenu de la page qui sera à droite */}
          <main className="flex-1 lg:ml-72 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
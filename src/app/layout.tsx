import "./globals.css";
import { Inter } from "next/font/google"; // On importe une police élégante

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-mansa-black text-mansa-offWhite`}>
        {/* Pour l'instant on affiche juste le contenu */}
        {children}
      </body>
    </html>
  );
}
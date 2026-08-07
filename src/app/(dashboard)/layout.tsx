import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { PrivacyProvider } from "@/context/PrivacyContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivacyProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 w-full lg:ml-72 flex flex-col">
          <Header />
          <main className="p-4 md:p-8 lg:p-12">
            {children}
          </main>
        </div>
      </div>
    </PrivacyProvider>
  );
}
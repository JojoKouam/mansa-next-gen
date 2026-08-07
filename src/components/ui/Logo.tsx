// src/components/ui/Logo.tsx
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn(
      "w-16 h-16 bg-linear-to-br from-[#D4AF37] to-[#AA8839] rounded-2xl flex items-center justify-center shadow-2xl shadow-mansa-gold/20",
      className
    )}>
      <span className="text-mansa-black text-2xl font-bold italic tracking-tighter">M</span>
    </div>
  );
};
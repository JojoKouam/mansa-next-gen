import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

export const SidebarItem = ({ icon: Icon, label, href, active }: Props) => {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
        ${active 
          ? "bg-mansa-anthracite text-mansa-gold" 
          : "text-gray-500 hover:bg-mansa-anthracite/50 hover:text-mansa-offWhite"
        }
      `}
    >
      <Icon size={22} />
      <span className="font-medium tracking-wide">{label}</span>
    </Link>
  );
};
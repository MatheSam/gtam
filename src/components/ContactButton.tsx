import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { company } from '../data/company';
export function ContactButton({ children = 'Solicitar orçamento', variant = 'primary', className = '' }: { children?: React.ReactNode; variant?: 'primary' | 'light'; className?: string }) {
  return <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className={`button button-${variant} ${className}`}><MessageCircle size={20} aria-hidden="true"/>{children}<ArrowUpRight size={18} aria-hidden="true"/></a>;
}

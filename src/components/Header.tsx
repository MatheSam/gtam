import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './Brand';
import { company } from '../data/company';
const links = [['A GTAM', '#sobre'], ['Serviços', '#servicos'], ['Nosso trabalho', '#trabalhos'], ['Contato', '#contato']];
export function Header() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><div className="container header-inner"><Brand/><nav aria-label="Navegação principal" className="desktop-nav">{links.map(([label, href])=><a key={href} href={href}>{label}</a>)}</nav><a className="header-contact" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">{links.map(([label, href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>}</header>;
}

import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './Brand';
import { company } from '../data/company';
const base = import.meta.env.BASE_URL;
const links = [['A GTAM', `${base}#sobre`], ['Soluções', `${base}solucoes/`], ['Tecnologia', `${base}#tecnologia`], ['Máquinas', `${base}maquinas/`], ['Parceiros', `${base}parceiros/`], ['Clientes e homologações', `${base}clientes/`]];
export function Header() {
 const [open, setOpen] = useState(false);
 const [compact, setCompact] = useState(false);
 useEffect(() => {
   const desktop = window.matchMedia('(min-width: 801px)');
   const updateHeader = () => {
     setCompact(previous => desktop.matches && window.scrollY > (previous ? 32 : 96));
   };
   updateHeader();
   window.addEventListener('scroll', updateHeader, { passive: true });
   desktop.addEventListener('change', updateHeader);
   return () => {
     window.removeEventListener('scroll', updateHeader);
     desktop.removeEventListener('change', updateHeader);
   };
 }, []);
 return <header className={`site-header${compact ? ' is-compact' : ''}`}><div className="container header-inner"><Brand href={`${base}#inicio`}/><span className="header-slogan">Precisão em<br/><strong>cada detalhe.</strong></span><nav aria-label="Navegação principal" className="desktop-nav">{links.map(([label, href])=><a key={href} href={href}>{label}</a>)}</nav><a className="header-contact" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div><nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>{links.map(([label, href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav></header>;
}

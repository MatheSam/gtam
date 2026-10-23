import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand } from './Brand';
const base = import.meta.env.BASE_URL;
const links = [['A GTAM', `${base}sobre/`], ['Soluções', `${base}solucoes/`], ['Tecnologia', `${base}#tecnologia`], ['Máquinas', `${base}maquinas/`], ['Parceiros', `${base}parceiros/`], ['Clientes e homologações', `${base}clientes/`], ['ESG', `${base}esg/`], ['Contato', `${base}contato/`]];
function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
 return <a className={label === 'ESG' ? 'esg-nav-link' : undefined} href={href} onClick={onClick}><span>{label}</span>{label === 'ESG' && <svg className="esg-nav-tree" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path className="esg-nav-tree-trunk" d="M12 21V10m0 7-4-4m4 1 4-4"/><circle className="esg-nav-tree-crown crown-left" cx="8" cy="11" r="3"/><circle className="esg-nav-tree-crown crown-right" cx="16" cy="8" r="3"/><circle className="esg-nav-tree-crown crown-top" cx="12" cy="5" r="3.5"/></svg>}</a>;
}
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
 return <header className={`site-header${compact ? ' is-compact' : ''}`}><div className="container header-inner"><div className="header-brand-group"><Brand href={`${base}#inicio`}/><span className="header-slogan">Precisão em<br/><strong>cada detalhe.</strong></span></div><nav aria-label="Navegação principal" className="desktop-nav">{links.map(([label, href])=><NavLink key={href} label={label} href={href}/>)}</nav><button className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div><nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>{links.map(([label, href])=><NavLink key={href} label={label} href={href} onClick={()=>setOpen(false)}/>)}</nav></header>;
}

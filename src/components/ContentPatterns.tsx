import { ArrowUpRight } from 'lucide-react';

export function ContentHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="content-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div></section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Você está aqui">{items.map((item, index) => <span className="breadcrumb-item" key={`${item.label}-${index}`}>{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function ContentCardGrid({ items, baseUrl }: { items: { id: string; path: string; title: string }[]; baseUrl: string }) {
  if (!items.length) return null;
  return <div className="content-link-grid">{items.map(item => <a className="content-link-card" key={item.id} href={`${baseUrl}${item.path}`}><span>{item.title}</span><ArrowUpRight size={19}/></a>)}</div>;
}

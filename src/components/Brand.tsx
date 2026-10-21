export function Brand({ light = false, href = '#inicio' }: { light?: boolean; href?: string }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href={href} aria-label="GTAM Ferramentaria — início"><span className="brand-name"><span>G</span>TAM</span><span className="brand-description">FERRAMENTARIA</span></a>;
}

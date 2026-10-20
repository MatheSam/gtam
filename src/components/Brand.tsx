export function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="GTAM Ferramentaria — início"><span className="brand-name"><span>G</span>TAM</span><span className="brand-description">FERRAMENTARIA</span></a>;
}

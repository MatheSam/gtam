import logoGtam from '../../img/logos/logo_gtam.png';

export function Brand({ light = false, href = '#inicio' }: { light?: boolean; href?: string }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href={href} aria-label="GTAM Ferramentaria — início"><img className="brand-logo" src={logoGtam} alt="GTAM Ferramentaria"/></a>;
}

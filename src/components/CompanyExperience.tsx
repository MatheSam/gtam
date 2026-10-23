import { useEffect, useState } from 'react';

// The anniversary follows the company's local calendar, regardless of the visitor's timezone.
export function companyYears(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: 'numeric' }).formatToParts(date);
  const year = Number(parts.find(part => part.type === 'year')!.value);
  const month = Number(parts.find(part => part.type === 'month')!.value);
  return Math.max(0, year - 2010 - (month < 11 ? 1 : 0));
}

export function CompanyExperience({ sentence = false }: { sentence?: boolean }) {
  const [years, setYears] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setYears(companyYears());
    update();
    const timer = window.setInterval(update, 60_000);
    document.addEventListener('visibilitychange', update);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', update); };
  }, []);
  if (years === null) return <>Desde 2010</>;
  return <>{sentence ? 'Há ' : ''}{years}<span>{' anos'}</span></>;
}

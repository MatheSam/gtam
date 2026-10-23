import { useEffect, useState } from 'react';

const words = ['O FUTURO', 'O AMBIENTE', 'AS PESSOAS', 'OS PARCEIROS'];

export function RotatingCommitment() {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: number;
    let cancelled = false;
    const start = () => {
      window.clearTimeout(timer);
      setText(words[0]);
      if (preference.matches) return;
      let index = 0;
      const cycle = () => {
        let remaining = words[index].length;
        const erase = () => {
          if (cancelled) return;
          setText(words[index].slice(0, --remaining));
          if (remaining > 0) timer = window.setTimeout(erase, 35);
          else {
            index = (index + 1) % words.length;
            let count = 0;
            const type = () => {
              if (cancelled) return;
              setText(words[index].slice(0, ++count));
              timer = window.setTimeout(count < words[index].length ? type : cycle, count < words[index].length ? 65 : 3000);
            };
            timer = window.setTimeout(type, 160);
          }
        };
        erase();
      };
      timer = window.setTimeout(cycle, 3000);
    };
    start();
    preference.addEventListener('change', start);
    return () => { cancelled = true; window.clearTimeout(timer); preference.removeEventListener('change', start); };
  }, []);
  return <><span className="sr-only">COMPROMISSO COM O FUTURO, O AMBIENTE, AS PESSOAS E OS PARCEIROS</span><span aria-hidden="true">COMPROMISSO COM <span className="commitment-word">{text}</span></span></>;
}

import { useEffect } from 'react';

type ContactEvent = { event: 'contact_click'; contact_method: 'whatsapp' | 'phone' | 'email'; contact_section: string };

// A GTM/analytics integration may consume this event after its own consent setup.
// Clicking is an intent signal, not proof that a lead or sale was completed.
export function useContactEvents() {
  useEffect(() => {
    const track = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const method = href.startsWith('https://wa.me/') ? 'whatsapp' : href.startsWith('tel:') ? 'phone' : href.startsWith('mailto:') ? 'email' : null;
      if (!method) return;
      const analytics = window as Window & { dataLayer?: ContactEvent[] };
      if (analytics.dataLayer) analytics.dataLayer.push({
        event: 'contact_click', contact_method: method,
        contact_section: link.closest('[id]')?.id || 'header',
      });
    };
    document.addEventListener('click', track);
    return () => document.removeEventListener('click', track);
  }, []);
}

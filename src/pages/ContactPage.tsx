import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, X } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHero } from '../components/ContentPatterns';
import { company } from '../data/company';

// Coordinates from the GTAM Ferramentaria Google Maps listing.
const mapEmbed = 'https://maps.google.com/maps?q=-25.5724556%2C-49.2173674&z=17&output=embed';

async function isPdfFile(file: File) {
  if (!file.name.toLowerCase().endsWith('.pdf')) return false;
  const header = new TextDecoder().decode(await file.slice(0, 1024).arrayBuffer());
  return header.includes('%PDF-');
}

export function ContactPage() {
  const [showToast, setShowToast] = useState(false);
  const [subject, setSubject] = useState('');
  const [fileError, setFileError] = useState('');
  const toastTimer = useRef<number | undefined>(undefined);
  const resumeInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  function handleSubjectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextSubject = event.target.value;
    setSubject(nextSubject);
    setFileError('');
    if (nextSubject !== 'Trabalhe conosco' && resumeInput.current) resumeInput.current.value = '';
  }

  async function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) {
      setFileError('');
      return;
    }
    if (!await isPdfFile(file)) {
      input.value = '';
      setFileError('O anexo deve ser um arquivo PDF válido.');
      return;
    }
    setFileError('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (fileError) return;
    const form = event.currentTarget;
    const resume = resumeInput.current?.files?.[0];
    if (subject === 'Trabalhe conosco' && resume && !await isPdfFile(resume)) {
      setFileError('O anexo deve ser um arquivo PDF válido.');
      if (resumeInput.current) resumeInput.current.value = '';
      return;
    }
    setFileError('');
    form.reset();
    setSubject('');
    setShowToast(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setShowToast(false), 6000);
  }

  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page contact-page">
    {showToast && <div className="contact-toast" role="status" aria-live="polite"><div><strong>Mensagem enviada com sucesso!</strong><span>Simulação: nenhum e-mail foi enviado.</span></div><button type="button" aria-label="Fechar aviso" onClick={() => setShowToast(false)}><X size={18} aria-hidden="true"/></button></div>}
    <ContentHero eyebrow="FALE COM A GTAM" title="Estamos prontos para conversar" description="Entre em contato para falar sobre um projeto, solicitar um orçamento ou visitar nossa ferramentaria em São José dos Pinhais."/>
    <section className="section contact-page-main" aria-label="Localização e canais de contato">
      <div className="container contact-page-layout">
        <div className="contact-map-panel">
          <div className="contact-map-heading"><div><p className="eyebrow">NOSSA LOCALIZAÇÃO</p><h2>Visite a GTAM</h2><p>{company.address}<br/>{company.city} · CEP {company.cep}</p></div><a className="contact-map-directions" href={company.maps} target="_blank" rel="noopener noreferrer">Abrir rotas <ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (abre em outra aba)</span></a></div>
          <iframe className="contact-map" title="Mapa da localização da GTAM Ferramentaria no Google Maps" src={mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
        <aside className="contact-channels" aria-labelledby="contact-channels-title">
          <p className="eyebrow">CANAIS DE ATENDIMENTO</p><h2 id="contact-channels-title">Fale com a nossa equipe</h2>
          <div className="contact-channel"><Phone size={21} aria-hidden="true"/><div><h3>Telefones</h3><a href="tel:+5541998400155">{company.mobile}</a><a href="tel:+554130810319">{company.phone}</a></div></div>
          <div className="contact-channel"><Mail size={21} aria-hidden="true"/><div><h3>E-mail</h3><a href={`mailto:${company.email}`}>{company.email}</a></div></div>
          <div className="contact-channel"><MapPin size={21} aria-hidden="true"/><div><h3>Endereço</h3><p>{company.address}<br/>{company.city}<br/>CEP {company.cep}</p></div></div>
          <a className="button button-primary contact-whatsapp" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Conversar pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true"/><span className="sr-only"> (abre em outra aba)</span></a>
        </aside>
      </div>
    </section>
    <section className="section contact-form-section" aria-labelledby="contact-form-title">
      <div className="container contact-form-layout">
        <div className="contact-form-intro"><p className="eyebrow">ENVIE SUA MENSAGEM</p><h2 id="contact-form-title">Como podemos ajudar?</h2><p>Preencha os campos para registrar sua mensagem. A confirmação exibida é uma simulação; o envio real por e-mail será configurado depois.</p><p className="contact-form-status"><span aria-hidden="true"/>Nenhum dado é enviado ou armazenado por este formulário.</p></div>
        <form className="contact-form" aria-label="Formulário de contato" onSubmit={handleSubmit}>
          <div className="contact-form-fields">
            <label>Nome completo<input name="name" type="text" autoComplete="name" placeholder="Seu nome" required /></label>
            <label>E-mail<input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com.br" required /></label>
            <label>Telefone<input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" /></label>
            <label><span className="contact-label-title">Empresa <span>(opcional)</span></span><input name="company" type="text" autoComplete="organization" placeholder="Nome da empresa" /></label>
            <label className="contact-form-full">Assunto<select name="subject" value={subject} onChange={handleSubjectChange} required><option value="" disabled>Selecione um assunto</option><option>Solicitar orçamento</option><option>Serviços e soluções</option><option>Trabalhe conosco</option><option>Outro assunto</option></select></label>
            {subject === 'Trabalhe conosco' && <label className="contact-form-full">Currículo em PDF <span>(opcional)</span><input ref={resumeInput} name="resume" type="file" accept=".pdf,application/pdf" aria-describedby={fileError ? 'resume-hint resume-error' : 'resume-hint'} aria-invalid={Boolean(fileError)} onChange={handleResumeChange} /><span id="resume-hint" className="contact-file-hint">Anexe somente um arquivo PDF.</span>{fileError && <span id="resume-error" className="contact-file-error" role="alert">{fileError}</span>}</label>}
            <label className="contact-form-full">Mensagem<textarea name="message" rows={5} placeholder="Conte brevemente como podemos ajudar" required /></label>
          </div>
          <button className="button button-primary contact-submit" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  </main><Footer/></>;
}

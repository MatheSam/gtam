import { Faq } from './sections/Faq';
import { useContactEvents } from './hooks/useContactEvents';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Work } from './sections/Work';
import { Contact } from './sections/Contact';
import { Partners } from './sections/Partners';
import { Equipment } from './sections/Equipment';
import { Sustainability } from './sections/Sustainability';
import { useReveal } from './hooks/useReveal';
export default function App(){useReveal();useContactEvents();return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo"><Hero/><Partners/><About/><Services/><Equipment/><Work/><Sustainability/><Faq/><Contact/></main><Footer/></>}

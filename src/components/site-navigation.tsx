import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Projects', 'projects'], ['Expertise', 'expertise'], ['Gallery', 'gallery'], ['Testimonials', 'trust'], ['Contact', 'contact']];
export function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#home" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="KD BUILDER home"><span className="brand-name">KD <span>BUILDER</span></span><span className="brand-subtitle">REAL ESTATE · DEVELOPER · CONSTRUCTION</span></a>;
}
export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return <header className={`site-header ${scrolled || open ? 'scrolled' : ''}`}>
    <div className="nav-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <Button asChild variant="luxury" className="nav-cta"><a href="#contact">Start a Project <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}
  </header>;
}
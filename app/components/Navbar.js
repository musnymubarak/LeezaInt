'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <header className={s.navbar}>
      <div className={`${s.navbarInner} container`}>
        <Link href="/" className={s.navbarLogo}>
          <span className={s.logoIcon}>🌿</span>
          <div className={s.logoText}>
            <span className={s.logoBrand}>Leeza International</span>
            <span className={s.logoTagline}>Premium Ceylon Exports</span>
          </div>
        </Link>

        <nav className={`${s.navbarNav} ${open ? s.open : ''}`}>
          <Link href="/" className={`${s.navLink} ${isActive('/') ? s.active : ''}`} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className={`${s.navLink} ${isActive('/about') ? s.active : ''}`} onClick={() => setOpen(false)}>About</Link>
          <Link href="/products" className={`${s.navLink} ${isActive('/products') ? s.active : ''}`} onClick={() => setOpen(false)}>Products</Link>
          <div className={s.navDropdown} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <span className={`${s.navLink} ${s.navLinkDropdown} ${pathname.startsWith('/services') ? s.active : ''}`}>
              Services <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <div className={`${s.dropdownMenu} ${servicesOpen ? s.show : ''}`}>
              <Link href="/services/import" className={`${s.dropdownItem} ${isActive('/services/import') ? s.active : ''}`} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
                </span>
                Import Services
              </Link>
              <Link href="/services/export" className={`${s.dropdownItem} ${isActive('/services/export') ? s.active : ''}`} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12.01"/></svg>
                </span>
                Export Services
              </Link>
              <Link href="/services/import-export-agent" className={`${s.dropdownItem} ${isActive('/services/import-export-agent') ? s.active : ''}`} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                Import &amp; Export Agent
              </Link>
            </div>
          </div>
          <Link href="/contact" className={`${s.navLink} ${isActive('/contact') ? s.active : ''}`} onClick={() => setOpen(false)}>Contact</Link>
          <Link href="https://wa.me/94760009500" target="_blank" className={`cta-wa-btn ${s.navCta}`} onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </Link>
        </nav>

        <button className={`${s.navbarToggle} ${open ? s.open : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

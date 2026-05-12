'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <Link href="/" className={s.navLink} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className={s.navLink} onClick={() => setOpen(false)}>About</Link>
          <Link href="/products" className={s.navLink} onClick={() => setOpen(false)}>Products</Link>
          <div className={s.navDropdown} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <span className={`${s.navLink} ${s.navLinkDropdown}`}>
              Services <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </span>
            <div className={`${s.dropdownMenu} ${servicesOpen ? s.show : ''}`}>
              <Link href="/services/import" className={s.dropdownItem} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>📦</span>Import Services
              </Link>
              <Link href="/services/export" className={s.dropdownItem} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>🚢</span>Export Services
              </Link>
              <Link href="/services/import-export-agent" className={s.dropdownItem} onClick={() => setOpen(false)}>
                <span className={s.dropdownIcon}>🌐</span>Import &amp; Export Agent
              </Link>
            </div>
          </div>
          <Link href="/contact" className={s.navLink} onClick={() => setOpen(false)}>Contact</Link>
          <Link href="https://wa.me/94760009500" target="_blank" className={`btn btn-whatsapp ${s.navCta}`} onClick={() => setOpen(false)}>
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

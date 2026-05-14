'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import s from './Hero.module.css';

/* ── Count-up hook (IntersectionObserver triggered) ──────── */
function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isPercent = String(target).includes('%');
    const isPlus = String(target).includes('+');
    const num = parseInt(target, 10) || 0;
    let raf;
    let startTime = null;

    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * num) + (isPlus ? '+' : isPercent ? '%' : '');
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [target, duration]);
  return ref;
}

function StatPill({ value, label }) {
  const ref = useCountUp(value);
  return (
    <div className={s.statPill}>
      <span className={s.statNum} ref={ref}>0</span>
      <span className={s.statLabel}>{label}</span>
    </div>
  );
}

/* ── Component ──────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <section className={s.hero}>
        {/* Background layers */}
        <div className={s.grain} />
        <div className={s.lines} />
        <div className={`${s.orb} ${s.orbGold}`} />
        <div className={`${s.orb} ${s.orbGreen}`} />

        <div className={s.inner}>
          {/* ─── LEFT — Content ─── */}
          <div className={s.content}>
            <span className={s.eyebrow}>
              <span className={s.eyebrowDot} />
              Sri Lanka · Premium Exports · Est. 2020
            </span>

            <h1 className={s.headline}>
              <span className={s.line}>From Sri Lanka&apos;s</span>
              <span className={s.line}><em className={s.italic}>Finest Fields</em></span>
              <span className={s.line}>to Your Global Market</span>
            </h1>

            <p className={s.subline}>
              Premium Ceylon cinnamon, tea, coffee, coconut products, and certified organic
              European superfoods — sourced with care, exported with excellence to 20+ countries.
            </p>

            <div className={s.actions}>
              <Link href="/products" className={s.btnPrimary}>
                Explore Products
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3.5 9h11M9.5 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className={s.btnGhost}>
                Get a Quote
              </Link>
            </div>

            <div className={s.stats}>
              <StatPill value="32+" label="Products" />
              <StatPill value="7" label="Categories" />
              <StatPill value="20+" label="Countries" />
              <StatPill value="100%" label="Quality Assured" />
            </div>
          </div>

          {/* ─── RIGHT — Showcase ─── */}
          <div className={s.showcase} aria-hidden="true">
            <div className={s.showcaseGlow} />

            {/* Floating thumbnails (decorative) */}
            <div className={`${s.thumb} ${s.thumbA}`}>
              <img src="/products/tea-green.jpeg" alt="" />
            </div>
            <div className={`${s.thumb} ${s.thumbB}`}>
              <img src="/products/coffee-ground.jpeg" alt="" />
            </div>
            <div className={`${s.thumb} ${s.thumbC}`}>
              <img src="/products/coconut-oil.jpeg" alt="" />
            </div>

            {/* Main hero card */}
            <div className={s.heroCard}>
              <img src="/products/cinnamon-c4.jpeg" alt="Premium Ceylon Cinnamon" />
              <div className={s.heroCardOverlay}>
                <div>
                  <div className={s.heroCardLabel}>Signature Product</div>
                  <div className={s.heroCardTitle}>Ceylon Cinnamon — Alba Grade</div>
                </div>
              </div>
            </div>

            {/* Verified badge — top right */}
            <div className={s.verifiedBadge}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.8 1.5 2.3-.3.8 2.2 2 1.2-.8 2.2 1 2.1-1.7 1.6.3 2.3-2.3.5-1.4 1.9L8 15l-2-1.5-2.3-.5.3-2.3-1.7-1.6 1-2.1L2.5 5l2-1.2.8-2.2 2.3.3L8 1z"
                      fill="currentColor" opacity="0.2"/>
                <path d="M5.5 8l2 2 3.5-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Quality Verified
            </div>

            {/* Certification chip — bottom left */}
            <div className={s.certChip}>
              <div className={s.certChipIcon}>🌿</div>
              <div className={s.certChipText}>
                <span className={s.certChipLabel}>Certified</span>
                <span className={s.certChipValue}>ISO · HACCP · Organic</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.bottomGlow} />
      </section>

      {/* ─── Trust strip below hero ─── */}
      <div className={s.trustStrip}>
        <div className={s.trustInner}>
          <span className={s.trustLabel}>Trusted by Buyers In</span>
          <div className={s.trustFlags} aria-label="Countries we export to">
            <span title="European Union">🇪🇺</span>
            <span title="United Arab Emirates">🇦🇪</span>
            <span title="United States">🇺🇸</span>
            <span title="United Kingdom">🇬🇧</span>
            <span title="Japan">🇯🇵</span>
            <span title="Australia">🇦🇺</span>
            <span title="Saudi Arabia">🇸🇦</span>
            <span title="Singapore">🇸🇬</span>
          </div>
          <div className={s.trustCerts}>
            <span className={s.trustCert}>ISO 22000</span>
            <span className={s.trustCert}>HACCP</span>
            <span className={s.trustCert}>GMP</span>
            <span className={s.trustCert}>HALAL</span>
            <span className={s.trustCert}>ORGANIC</span>
          </div>
        </div>
      </div>
    </>
  );
}

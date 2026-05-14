'use client';
import Link from 'next/link';
import { categories } from '@/src/data/categories';
import { products } from '@/src/data/products';
import Hero from './components/Hero';

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <>
      <Hero />

      {/* CATEGORIES */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">Our Collections</span>
            <h2 className="section-title">Explore Our Product Range</h2>
            <p className="section-subtitle center">From traditional Ceylon spices to organic European superfoods, we offer a diverse range of premium products for global markets.</p>
          </div>
          <div className="cat-bento">
            {categories.map((cat, i) => (
              <Link
                href={`/products?category=${cat.id}`}
                key={cat.id}
                className={`cat-bento-card ${i === 0 ? 'cat-featured' : ''} ${i === 6 ? 'cat-wide' : ''}`}
                style={{'--delay': `${i * 0.08}s`}}
              >
                <img src={cat.image} alt={cat.name} className="cat-bento-img" />
                <div className="cat-bento-gradient" />
                <div className="cat-bento-content">
                  <span className="cat-bento-count">{cat.count} Products</span>
                  <h3>{cat.name}</h3>
                  <span className="cat-bento-link">
                    Explore
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
            <Link href="/products" className="cat-bento-cta" style={{'--delay': '0.56s'}}>
              <div className="cat-cta-inner">
                <span className="cat-cta-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </span>
                <h3>View All<br/>Products</h3>
                <span className="cat-bento-link">
                  Browse Collection
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section featured-section">
        <div className="container">
          <div className="featured-header">
            <div>
              <span className="section-badge light">Featured Products</span>
              <h2 className="section-title light">Our Bestsellers</h2>
              <p className="section-subtitle light">Handpicked premium products trusted by buyers across 20+ countries.</p>
            </div>
            <Link href="/products" className="featured-view-all">
              View All Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="products-grid">
            {featured.map((p) => (
              <Link href={`/products/${p.slug}`} key={p.id} className="fp-card">
                <div className="fp-img-wrap">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="fp-img" />
                  ) : (
                    <div className="fp-img-placeholder">
                      <span>{p.name.split(' ').map(w => w[0]).join('').slice(0,2)}</span>
                    </div>
                  )}
                  <div className="fp-img-overlay" />
                  <span className="fp-badge">{categories.find(c => c.id === p.category)?.name || p.category}</span>
                </div>
                <div className="fp-info">
                  <h3 className="fp-name">{p.name}</h3>
                  <p className="fp-desc">{p.shortDesc}</p>
                  <span className="fp-link">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">Why Leeza International</span>
            <h2 className="section-title">Your Trusted Trade Partner</h2>
          </div>

          {/* Stats Counter Bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Export Countries</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Product Range</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Certified</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Response Time</span>
            </div>
          </div>

          {/* Split Layout */}
          <div className="why-split">
            {/* Left — Feature Card */}
            <div className="why-feature-card">
              <div className="why-feature-inner">
                <span className="why-feature-badge">Since Establishment</span>
                <h3>Built on Trust,<br/>Driven by Quality</h3>
                <p>We don&apos;t just trade products — we build long-term partnerships with growers, manufacturers, and buyers worldwide. Every shipment carries our commitment to excellence.</p>
                <div className="why-feature-certs">
                  <span>ISO</span>
                  <span>HACCP</span>
                  <span>GMP</span>
                  <span>Organic</span>
                  <span>Halal</span>
                </div>
              </div>
            </div>

            {/* Right — Trust Items */}
            <div className="why-items">
              <div className="why-item">
                <div className="why-item-num">01</div>
                <div className="why-item-body">
                  <div className="why-item-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                    <h4>Premium Quality</h4>
                  </div>
                  <p>Every product is carefully sourced, processed, and quality-checked to meet international export standards.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-num">02</div>
                <div className="why-item-body">
                  <div className="why-item-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                    <h4>Global Reach</h4>
                  </div>
                  <p>We export to over 20 countries across Europe, Middle East, and Asia with reliable logistics support.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-num">03</div>
                <div className="why-item-body">
                  <div className="why-item-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <h4>Trusted Partnerships</h4>
                  </div>
                  <p>Direct relationships with Sri Lankan growers and European organic producers ensure supply consistency.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-num">04</div>
                <div className="why-item-body">
                  <div className="why-item-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    <h4>Custom Packaging</h4>
                  </div>
                  <p>Private labeling and custom packaging solutions for retail, foodservice, and industrial buyers.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-item-num">05</div>
                <div className="why-item-body">
                  <div className="why-item-header">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <h4>Direct Communication</h4>
                  </div>
                  <p>Reach us instantly via WhatsApp for quotes, samples, and order inquiries — no middlemen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section gradient-hero">
        <div className="container">
          <div className="section-header-center light">
            <span className="section-badge light">Our Services</span>
            <h2 className="section-title light">Comprehensive Trade Solutions</h2>
            <p className="section-subtitle center light">From sourcing to shipping, we handle every aspect of international trade.</p>
          </div>
          <div className="services-grid">
            <Link href="/services/export" className="service-card">
              <span className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 21h20"/><path d="M6 17V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13"/><path d="M10 17V7l2-1 2 1v10"/><path d="M2 17h20"/></svg>
              </span>
              <h3>Export</h3>
              <p>Premium Ceylon products shipped worldwide with full export documentation and compliance.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link href="/services/import" className="service-card">
              <span className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              </span>
              <h3>Import</h3>
              <p>Bulk raw materials and commodities imported for Sri Lankan industries at competitive prices.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link href="/services/import-export-agent" className="service-card">
              <span className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><path d="M12 21.8c2.3-4.8 2.3-14.8 0-19.6"/></svg>
              </span>
              <h3>Trade Agency</h3>
              <p>Strategic sourcing, procurement, and trade facilitation services for international buyers.</p>
              <span className="service-link">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <span className="cta-badge">Get Started</span>
          <h2>Ready to Source Premium Products?</h2>
          <p>Get in touch with us today for pricing, samples, and custom orders.</p>
          <div className="cta-actions">
            <Link href="https://wa.me/94760009500?text=Hi%2C%20I%27m%20interested%20in%20your%20products" target="_blank" className="cta-wa-btn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </Link>
            <Link href="/contact" className="cta-inquiry-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5"/></svg>
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section-header-center { text-align: center; margin-bottom: 48px; }
        .section-header-center .section-subtitle { margin: 0 auto; }
        .section-badge {
          display: inline-block; padding: 6px 16px; background: rgba(123,91,58,0.08);
          border-radius: 20px; font-size: 0.8rem; font-weight: 600; color: var(--primary);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;
        }
        .section-badge.light { background: rgba(255,255,255,0.1); color: var(--gold); }
        .section-title.light { color: white; }
        .section-subtitle.center { text-align: center; margin-left: auto; margin-right: auto; }
        .section-subtitle.light, .light .section-subtitle { color: rgba(255,255,255,0.6); }

        .section-header-row { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 40px; }






        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .service-card {
          padding: 36px; background: rgba(255,255,255,0.05); border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px);
          transition: all 0.3s var(--ease); text-decoration: none; display: block;
        }
        .service-card:hover { background: rgba(255,255,255,0.12); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.2); }
        .service-icon { display: block; margin-bottom: 16px; color: var(--gold); }
        .service-card h3 { color: #ffffff !important; font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
        .service-card p { font-size: 0.9rem; color: rgba(255,255,255,0.7) !important; line-height: 1.65; margin-bottom: 16px; }
        .service-link { font-size: 0.85rem; font-weight: 600; color: var(--gold); }

        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ''; position: absolute; top: -50%; right: -20%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-inner { text-align: center; position: relative; z-index: 1; }
        .cta-badge {
          display: inline-block; padding: 5px 16px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px; font-size: 0.75rem; font-weight: 700;
          color: var(--gold-light); text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .cta-inner h2 { color: white !important; font-size: 2.4rem; margin-bottom: 12px; }
        .cta-inner p { color: rgba(255,255,255,0.65); font-size: 1.1rem; margin-bottom: 40px; max-width: 500px; margin-left: auto; margin-right: auto; }
        .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
          .section-header-row { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>
    </>
  );
}

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
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link href={`/products?category=${cat.id}`} key={cat.id} className="category-card" style={{'--delay': `${i * 0.1}s`}}>
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <span className="category-count">{cat.count} Products</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section gradient-warm">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-badge">Featured Products</span>
              <h2 className="section-title">Our Bestsellers</h2>
            </div>
            <Link href="/products" className="btn btn-outline">View All Products →</Link>
          </div>
          <div className="products-grid">
            {featured.map((p) => (
              <Link href={`/products/${p.slug}`} key={p.id} className="product-card card">
                <div className="product-img">
                  {p.image ? (
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="product-img-placeholder">
                      <span>{p.name.split(' ').map(w => w[0]).join('').slice(0,2)}</span>
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <span className="badge badge-primary">{categories.find(c => c.id === p.category)?.name || p.category}</span>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.shortDesc}</p>
                  <span className="product-link">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-badge">Why Leeza International</span>
            <h2 className="section-title">Your Trusted Trade Partner</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Every product is carefully sourced, processed, and quality-checked to meet international export standards.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>We export to over 20 countries across Europe, Middle East, and Asia with reliable logistics support.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">🤝</div>
              <h3>Trusted Partnerships</h3>
              <p>Direct relationships with Sri Lankan growers and European organic producers ensure supply consistency.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">📋</div>
              <h3>Certifications Ready</h3>
              <p>ISO, HACCP, GMP, Organic, Halal — certifications arranged based on your market requirements.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">📦</div>
              <h3>Custom Packaging</h3>
              <p>Private labeling and custom packaging solutions for retail, foodservice, and industrial buyers.</p>
            </div>
            <div className="trust-card">
              <div className="trust-icon">💬</div>
              <h3>Direct Communication</h3>
              <p>Reach us instantly via WhatsApp for quotes, samples, and order inquiries — no middlemen.</p>
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
              <span className="service-icon">🚢</span>
              <h3>Export</h3>
              <p>Premium Ceylon products shipped worldwide with full export documentation and compliance.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link href="/services/import" className="service-card">
              <span className="service-icon">📦</span>
              <h3>Import</h3>
              <p>Bulk raw materials and commodities imported for Sri Lankan industries at competitive prices.</p>
              <span className="service-link">Learn More →</span>
            </Link>
            <Link href="/services/import-export-agent" className="service-card">
              <span className="service-icon">🌐</span>
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
          <h2>Ready to Source Premium Products?</h2>
          <p>Get in touch with us today for pricing, samples, and custom orders.</p>
          <div className="cta-actions">
            <Link href="https://wa.me/94760009500?text=Hi%2C%20I%27m%20interested%20in%20your%20products" target="_blank" className="btn btn-whatsapp btn-lg">💬 Chat on WhatsApp</Link>
            <Link href="/contact" className="btn btn-outline btn-lg" style={{borderColor:'white',color:'white'}}>Send Inquiry</Link>
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

        .categories-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;
        }
        .category-card {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          padding: 32px 24px; background: white; border-radius: var(--radius-md);
          border: 1px solid var(--border-light); text-align: center;
          transition: all 0.3s var(--ease);
          animation: fadeInUp 0.5s var(--ease) var(--delay) both;
        }
        .category-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); border-color: var(--primary-light); }
        .category-icon { font-size: 2.5rem; }
        .category-card h3 { font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; }
        .category-count { font-size: 0.8rem; color: var(--text-muted); }

        .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .product-card { text-decoration: none; }
        .product-img {
          height: 200px; background: linear-gradient(135deg, var(--bg-warm), #EDE8E0);
          display: flex; align-items: center; justify-content: center;
        }
        .product-img-placeholder {
          width: 80px; height: 80px; border-radius: 50%;
          background: rgba(123,91,58,0.1); display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading); font-size: 1.2rem; color: var(--primary); font-weight: 700;
        }
        .product-info { padding: 20px; }
        .product-name { font-family: var(--font-body); font-size: 0.95rem; font-weight: 600; margin: 8px 0 6px; line-height: 1.4; }
        .product-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .product-link { font-size: 0.82rem; font-weight: 600; color: var(--primary); }

        .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .trust-card {
          padding: 32px; background: white; border-radius: var(--radius-md);
          border: 1px solid var(--border-light); transition: all 0.3s var(--ease);
        }
        .trust-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .trust-icon { font-size: 2rem; margin-bottom: 16px; }
        .trust-card h3 { font-family: var(--font-body); font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
        .trust-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .service-card {
          padding: 36px; background: rgba(255,255,255,0.05); border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px);
          transition: all 0.3s var(--ease);
        }
        .service-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
        .service-icon { font-size: 2.2rem; display: block; margin-bottom: 16px; }
        .service-card h3 { color: white; font-family: var(--font-body); font-size: 1.1rem; font-weight: 600; margin-bottom: 10px; }
        .service-card p { font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 16px; }
        .service-link { font-size: 0.85rem; font-weight: 600; color: var(--gold); }

        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        }
        .cta-inner { text-align: center; }
        .cta-inner h2 { color: white; font-size: 2.2rem; margin-bottom: 12px; }
        .cta-inner p { color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-bottom: 32px; }
        .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .section-header-row { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
        @media (max-width: 480px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

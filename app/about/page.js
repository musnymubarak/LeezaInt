'use client';
import Link from 'next/link';

const metadata = {
  title: 'About Us | Leeza International',
  description: 'Learn about Leeza International - Sri Lanka\'s trusted partner for premium Ceylon exports and international trade.',
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <span className="sbadge">About Us</span>
          <h1>Leeza International</h1>
          <p>Connecting Sri Lanka&apos;s Finest to the World</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Leeza International is a Sri Lankan-based import and export company specializing in premium-quality agricultural products, spices, and organic superfoods. Under our product brand <strong>Dr Ceylon</strong>, we deliver authentic Ceylon products to international markets worldwide.</p>
            <p>From the lush cinnamon gardens of Sri Lanka to the organic farms of Europe, we source, process, and export products that meet the highest international quality standards.</p>
            <p>Our mission is simple: to bridge the gap between Sri Lanka&apos;s rich agricultural heritage and the global demand for premium, natural, and sustainable food products.</p>
          </div>
          <div className="about-values">
            <div className="value-card">
              <span className="vi">🌿</span>
              <h3>Purity</h3>
              <p>100% natural products with no additives, preservatives, or artificial treatments.</p>
            </div>
            <div className="value-card">
              <span className="vi">🤝</span>
              <h3>Trust</h3>
              <p>Direct relationships with growers and producers ensure traceability and consistency.</p>
            </div>
            <div className="value-card">
              <span className="vi">🌍</span>
              <h3>Sustainability</h3>
              <p>Eco-conscious practices from sourcing to packaging, supporting rural communities.</p>
            </div>
            <div className="value-card">
              <span className="vi">⭐</span>
              <h3>Excellence</h3>
              <p>Every product meets international export standards with full quality documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section gradient-warm">
        <div className="container">
          <div className="approach-header">
            <h2 className="section-title">Our Approach</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-step">
              <div className="step-num">01</div>
              <h3>Source</h3>
              <p>We carefully select raw materials from trusted growers in Sri Lanka and certified European suppliers.</p>
            </div>
            <div className="approach-step">
              <div className="step-num">02</div>
              <h3>Process</h3>
              <p>Products are processed under strict hygiene and quality control procedures with modern facilities.</p>
            </div>
            <div className="approach-step">
              <div className="step-num">03</div>
              <h3>Quality Check</h3>
              <p>Batch-wise quality inspections ensure every shipment meets international food safety standards.</p>
            </div>
            <div className="approach-step">
              <div className="step-num">04</div>
              <h3>Export</h3>
              <p>Full export documentation, custom packaging, and reliable logistics to your destination port.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-about">
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to Partner With Us?</h2>
          <p>Whether you&apos;re a retailer, distributor, or food manufacturer — we&apos;d love to connect.</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',marginTop:'32px',flexWrap:'wrap'}}>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
            <Link href="/products" className="btn btn-outline btn-lg">Browse Products</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          background: linear-gradient(135deg, #1A1208 0%, #2C1810 40%, #4A2E1A 100%);
          padding: 80px 0 60px; text-align: center; color: white;
        }
        .sbadge { display:inline-block; padding:6px 16px; background:rgba(255,255,255,0.1); border-radius:20px; font-size:0.8rem; font-weight:600; color:var(--gold); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:12px; }
        .about-hero h1 { font-size:2.8rem; background:linear-gradient(135deg,#fff,var(--gold-light)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin:12px 0; }
        .about-hero p { color:rgba(255,255,255,0.6); font-size:1.05rem; }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        .about-text h2 { font-size:1.8rem; margin-bottom:20px; }
        .about-text p { font-size:1rem; color:var(--text-secondary); line-height:1.8; margin-bottom:16px; }
        .about-values { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .value-card { padding:24px; background:white; border-radius:var(--radius-md); border:1px solid var(--border-light); transition:all 0.3s; }
        .value-card:hover { box-shadow:var(--shadow-md); transform:translateY(-2px); }
        .vi { font-size:1.8rem; display:block; margin-bottom:12px; }
        .value-card h3 { font-family:var(--font-body); font-size:0.95rem; font-weight:600; margin-bottom:6px; }
        .value-card p { font-size:0.85rem; color:var(--text-muted); line-height:1.5; }
        .approach-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:32px; }
        .approach-step { padding:28px; background:white; border-radius:var(--radius-md); border:1px solid var(--border-light); }
        .step-num { font-family:var(--font-heading); font-size:2rem; font-weight:700; color:var(--gold); margin-bottom:12px; }
        .approach-step h3 { font-family:var(--font-body); font-size:1rem; font-weight:600; margin-bottom:8px; }
        .approach-step p { font-size:0.88rem; color:var(--text-secondary); line-height:1.6; }
        .cta-about { background:linear-gradient(135deg,var(--primary),var(--primary-dark)); color:white; }
        .cta-about h2 { color:white; font-size:2rem; }
        .cta-about p { color:rgba(255,255,255,0.7); font-size:1.05rem; }
        @media (max-width:768px) {
          .about-grid { grid-template-columns:1fr; }
          .approach-grid { grid-template-columns:1fr 1fr; }
        }
        @media (max-width:500px) { .approach-grid { grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}

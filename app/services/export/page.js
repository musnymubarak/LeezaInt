'use client';
import Link from 'next/link';
import Image from 'next/image';

const metadata = {
  title: 'Export Services | Leeza International',
  description: 'Premium Ceylon products exported worldwide - cinnamon, tea, coffee, coconut, and organic superfoods.',
};

export default function ExportPage() {
  return (
    <>
      <section className="export-dark-hero">
        <div className="container text-center">
          <span className="hero-badge">EXPORT SERVICES</span>
          <h1>Global Export</h1>
          <p>Connecting authentic Ceylon products with global markets through trusted supply chains.</p>
        </div>
      </section>

      <div className="export-page">
        <div className="container">
          <div className="bento-layout">
            
            {/* Top Wide Hero Card */}
            <div className="bento-card hero-card">
              <div className="hero-img-wrap">
                <Image 
                  src="/services/export_bento_hero.png" 
                  alt="Global Export" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="hero-content">
                <h2>Premium Ceylon-Origin Products</h2>
                <h4>Authentic. Responsible. Globally Trusted.</h4>
                <p>
                  At Leeza International, we source and export the finest authentic Ceylon products directly to the world, ensuring premium quality through sustainable practices.
                </p>
                <Link href="https://wa.me/94760009500?text=Hi%2C%20I%27m%20interested%20in%20bulk%20export" target="_blank" className="btn btn-brown mt-4">
                  Inquire for Bulk
                </Link>
              </div>
            </div>

            {/* Split Content Area */}
            <div className="bento-split">
              
              <div className="bento-card product-card cinnamon-card">
                <div className="prod-img-wrap">
                  <Image 
                    src="/services/export_bento_cinnamon.png" 
                    alt="Ceylon Cinnamon" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="prod-content">
                  <div className="prod-header">
                    <div>
                      <h3>Ceylon Cinnamon</h3>
                      <p>Authentic, high-coumarin spice sourced from generations-skilled growers. Available in varied grades.</p>
                    </div>
                  </div>
                  <div className="prod-footer">
                    <Link href="/products/ceylon-cinnamon" className="btn btn-outline-brown">View Grades</Link>
                    <div className="icons">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card product-card tea-card">
                <div className="prod-img-wrap">
                  <Image 
                    src="/services/export_bento_tea.png" 
                    alt="Ceylon Tea" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="prod-content">
                  <div className="prod-header">
                    <div>
                      <h3>Ceylon Tea</h3>
                      <p>Pure Island Character. Balanced strength and aroma, representing diverse elevations and profiles.</p>
                    </div>
                  </div>
                  <div className="prod-footer">
                    <Link href="/products/ceylon-tea" className="btn btn-outline-brown">Explore Blends</Link>
                    <div className="icons">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="12" y1="2" x2="12" y2="8"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card map-card horizontal-card-right map-card-grid">
                <div className="map-content">
                  <h3 className="text-left">Our Global Export Reach & Partnerships</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5 }}>Exporting to 20+ countries across EU, UK, GCC, and Asia with trusted logistics.</p>
                </div>
                <div className="map-img-wrap" style={{ height: '100%', minHeight: '200px' }}>
                  <Image 
                    src="/services/export_bento_map.png" 
                    alt="Global Reach Map" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </div>

              <div className="bento-card product-card horizontal-card coconut-card">
                <div className="prod-img-wrap" style={{ height: '100%', minHeight: '220px' }}>
                  <Image 
                    src="/services/export_bento_coconut.png" 
                    alt="Coconut Products" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="prod-content">
                  <div className="prod-header">
                    <div>
                      <h3>Coconut Products</h3>
                      <p>Naturally versatile. Virgin coconut oil, desiccated coconut, and shell charcoal sourced from experienced processors.</p>
                    </div>
                  </div>
                  <div className="prod-footer" style={{ marginTop: 'auto' }}>
                    <Link href="/products" className="btn btn-outline-brown">Explore Range</Link>
                    <div className="icons">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bento-card why-card why-card-grid">
                <h3 className="text-center mb-4">Why Choose Leeza International for Export?</h3>
                <div className="why-grid">
                  <div className="why-item">
                    <div className="icon-wrap">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                    </div>
                    <h4>Sustainable Practices</h4>
                    <p>Eco-conscious sourcing of water, materials, and meeting environmental safety standards.</p>
                  </div>
                  <div className="why-item">
                    <div className="icon-wrap">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <h4>Unmatched Quality Control</h4>
                    <p>Secure and certified global intelligence for raw material quality standards.</p>
                  </div>
                  <div className="why-item">
                    <div className="icon-wrap">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                    </div>
                    <h4>Compliant Packaging</h4>
                    <p>Compliant packaging conceived, built, and meeting global safety standards.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .export-page {
          background-color: #FAFAFA;
          padding: 100px 0 80px;
          min-height: 100vh;
        }
        
        .export-dark-hero {
          background: linear-gradient(135deg, #2A170F 0%, #462B1D 100%);
          padding: 80px 0;
          color: white;
        }
        .export-dark-hero h1 {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 700;
          color: #FDF6E3;
          margin-bottom: 12px;
        }
        .export-dark-hero p {
          color: rgba(253, 246, 227, 0.7);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          color: #E2B97A;
          border-radius: 30px;
          padding: 6px 16px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        
        .bento-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .bento-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #EAEAEA;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .bento-card:hover {
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        
        .cover-img { object-fit: cover; }
        .contain-img { object-fit: contain; }
        
        /* Hero Card */
        .hero-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          min-height: 280px;
        }
        .hero-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 280px;
        }
        .hero-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-content h2 { font-size: 1.6rem; font-weight: 800; color: #111; margin-bottom: 8px; }
        .hero-content h4 { font-size: 0.95rem; font-weight: 600; color: #555; margin-bottom: 16px; }
        .hero-content p { font-size: 0.95rem; color: #666; line-height: 1.6; }
        
        .btn-brown {
          background-color: #8C5A35;
          color: white;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          border: none;
          max-width: fit-content;
        }
        .btn-brown:hover { background-color: #6C4223; }
        .btn-outline-brown {
          background-color: transparent;
          color: #8C5A35;
          border: 2px solid #8C5A35;
          padding: 8px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .btn-outline-brown:hover { background-color: #8C5A35; color: white; }
        
        /* Split Area (Unified Grid) */
        .bento-split {
          display: grid;
          grid-template-columns: 1fr 1fr 1.6fr;
          gap: 24px;
        }
        
        .cinnamon-card { grid-area: 1 / 1 / 2 / 2; }
        .tea-card { grid-area: 1 / 2 / 2 / 3; }
        .map-card-grid { grid-area: 1 / 3 / 2 / 4; }
        
        .coconut-card { grid-area: 2 / 1 / 3 / 3; }
        .why-card-grid { grid-area: 2 / 3 / 3 / 4; }
        
        .product-card {
          display: flex;
          flex-direction: column;
        }
        .prod-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          background: #F5F5F5;
        }
        .prod-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .prod-header h3 { font-size: 1.3rem; font-weight: 700; margin-bottom: 8px; color: #111; }
        .prod-header p { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 20px; }
        .prod-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .prod-footer .icons svg { color: #8C5A35; }
        
        /* Right Column (Info) */
        .bento-right {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        /* Horizontal Cards (Coconut & Map) */
        .horizontal-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        
        .horizontal-card-right {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
        }
        .map-content {
          padding: 30px 20px 30px 30px;
        }
        
        .map-card { padding: 0; }
        .map-card h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 12px; color: #111; }
        .map-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .why-card { padding: 30px; }
        .why-card h3 { font-size: 1.4rem; font-weight: 700; color: #111; }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .why-item { text-align: center; }
        .icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #F5F0EB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #8C5A35;
        }
        .why-item h4 { font-size: 0.95rem; font-weight: 700; margin-bottom: 8px; color: #222; }
        .why-item p { font-size: 0.8rem; color: #666; line-height: 1.5; }
        
        .mt-4 { margin-top: 16px; }

        @media (max-width: 1024px) {
          .hero-card { grid-template-columns: 1fr; }
          .bento-split { 
            grid-template-columns: 1fr 1fr; 
          }
          .cinnamon-card { grid-area: auto; }
          .tea-card { grid-area: auto; }
          .coconut-card { grid-area: auto; grid-column: 1 / -1; }
          .map-card-grid { grid-area: auto; grid-column: 1 / -1; }
          .why-card-grid { grid-area: auto; grid-column: 1 / -1; }
          .horizontal-card-right { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .bento-split { grid-template-columns: 1fr; }
          .coconut-card, .map-card-grid, .why-card-grid { grid-column: auto; }
          .horizontal-card { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; gap: 30px; }
          .export-page { padding: 80px 0 60px; }
        }
      `}</style>
    </>
  );
}

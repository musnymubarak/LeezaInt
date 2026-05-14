'use client';
import Link from 'next/link';
import Image from 'next/image';

const metadata = {
  title: 'Import & Export Agent | Leeza International',
  description: 'Leeza International represents selected international manufacturers with a focus on health-oriented, organic, and specialty food products.',
};

export default function ImportPage() {
  return (
    <>
      <section className="export-dark-hero">
        <div className="container text-center">
          <span className="hero-badge">IMPORT & EXPORT AGENT</span>
          <h1>Strategic Representation</h1>
          <p>Connecting international manufacturers with qualified buyers and retail channels for structured entry into new markets.</p>
        </div>
      </section>

      <div className="import-page">
        {/* Exhibition Showcase Section mimicking the 3D concept */}
        <section className="agency-showcase">
          <div className="container">
            <div className="showcase-wrapper">
              
              <div className="showcase-left">
                <div className="info-block">
                  <div className="block-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <h3>Strategic Sourcing Agency</h3>
                  <p>As an Import & Export Agent, Leeza International represents selected international manufacturers, with a strong focus on health-oriented, organic, and specialty food products.</p>
                  
                  <div className="service-list mt-4">
                    <div className="service-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Market entry support and buyer identification</span>
                    </div>
                    <div className="service-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Product positioning aligned with local demand</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="showcase-center">
                <div className="center-img-wrap">
                  <Image 
                    src="/services/import_agency_3d_hero.png" 
                    alt="Corporate Exhibition" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority 
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              </div>

              <div className="showcase-right">
                <div className="info-block">
                  <div className="block-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  </div>
                  <h3>Global Import-Export Agent</h3>
                  <p>Our role extends beyond simple matchmaking. We manage the commercial, regulatory, and operational aspects of trade, allowing focus on growth and market expansion.</p>
                  
                  <div className="service-list mt-4">
                    <div className="service-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Coordination of regulatory and documentation requirements</span>
                    </div>
                    <div className="service-item">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Trade execution, logistics coordination, and follow-up</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="division-note">
              <p>This division is designed for manufacturers and buyers seeking long-term representation, controlled market access, and professionally managed trade relationships.</p>
            </div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="popular-categories">
          <div className="container">
            <div className="text-center mb-5">
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Popular Categories</h2>
              <p style={{ fontSize: '1.05rem', color: '#666' }}>Curated specialty foods, grains, and beverages.</p>
            </div>
            
            <div className="cat-grid">
              <div className="cat-card">
                <div className="cat-img">
                  <Image 
                    src="/services/import_category_grains.png" 
                    alt="Organic Grains" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="cat-content">
                  <h4>Health-Oriented & Organic Foods</h4>
                  <p>Quinoa, Oats, Chia Seeds, Buckwheat, Agave Syrup.</p>
                </div>
              </div>
              
              <div className="cat-card">
                <div className="cat-img">
                  <Image 
                    src="/services/import_category_snacks.png" 
                    alt="Specialty Snacks" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="cat-content">
                  <h4>Specialty Foods & Beverages</h4>
                  <p>Cocoa Nibs, Nuts, Cookies, Sweets, Cereals, Snacks, Bread, Pasta & Beverages.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        /* Dark Hero Styles (matching Export page) */
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
          font-size: 1.05rem;
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

        .import-page {
          background-color: #FAFAFA;
        }

        /* Exhibition Showcase */
        .agency-showcase {
          padding: 60px 0 80px;
        }
        .showcase-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 30px;
          align-items: center;
          background: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          padding: 40px;
          border: 1px solid #EAEAEA;
        }
        
        .info-block {
          display: flex;
          flex-direction: column;
        }
        .block-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: #F5F0EB;
          color: #8C5A35;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .info-block h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }
        .info-block p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }
        
        .service-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .service-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .service-item svg {
          color: #8C5A35;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .service-item span {
          font-size: 0.9rem;
          color: #333;
          font-weight: 500;
          line-height: 1.4;
        }
        .mt-4 { margin-top: 24px; }
        .mb-5 { margin-bottom: 48px; }

        .showcase-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .center-img-wrap {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
        }

        .division-note {
          background: #F5F0EB;
          padding: 24px 32px;
          border-radius: 12px;
          border-left: 4px solid #8C5A35;
          margin-top: 40px;
          text-align: center;
        }
        .division-note p {
          font-size: 1.05rem;
          color: #444;
          font-weight: 500;
          margin: 0;
        }

        /* Popular Categories */
        .popular-categories {
          padding: 60px 0 100px;
        }
        .cat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .cat-card {
          background: #FFF;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid #EAEAEA;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s;
        }
        .cat-card:hover { transform: translateY(-4px); }
        .cat-img {
          position: relative;
          width: 100%;
          height: 280px;
        }
        .cat-content {
          padding: 30px;
          text-align: center;
        }
        .cat-content h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }
        .cat-content p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .showcase-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .center-img-wrap {
            height: 350px;
            order: -1; /* Move image to top on mobile */
          }
        }
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr; }
          .division-note { text-align: left; }
        }
      `}</style>
    </>
  );
}

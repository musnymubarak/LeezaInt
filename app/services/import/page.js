'use client';
import Link from 'next/link';
import Image from 'next/image';

const metadata = {
  title: 'Import Services | Leeza International',
  description: 'Bulk Imports for Sri Lankan Industries. Supporting Local Production Through Reliable Global Sourcing.',
};

export default function ImportPage() {
  return (
    <>
      <section className="export-dark-hero">
        <div className="container text-center">
          <span className="hero-badge">IMPORT SERVICES</span>
          <h1>Strategic Global Sourcing</h1>
          <p>Supporting local production through reliable global sourcing for Sri Lanka's industrial and agricultural sectors.</p>
        </div>
      </section>

      <div className="import-page">
        
        {/* ZIG-ZAG SECTION (From Screenshot 1) */}
        <section className="zig-zag-section">
          <div className="container">
            
            {/* Row 1 */}
            <div className="zz-row">
              <div className="zz-text">
                <h2>Bulk Imports for Sri Lankan Industries</h2>
                <h4 className="zz-subtitle">Supporting Local Production Through Reliable Global Sourcing</h4>
                <p>Leeza International imports essential raw materials in bulk to support Sri Lanka's animal feed, agricultural, and industrial sectors. Our import operations are structured around confirmed local demand, ensuring stability for both overseas suppliers and domestic buyers.</p>
                <p className="mt-3 font-semibold">We work closely with:</p>
                <ul className="zz-list">
                  <li><span className="chk">✓</span> Feed mills</li>
                  <li><span className="chk">✓</span> Farms</li>
                  <li><span className="chk">✓</span> Manufacturing plants</li>
                  <li><span className="chk">✓</span> Industrial processors</li>
                </ul>
                <p className="mt-4">Our role is to provide consistent supply, clear specifications, and transparent trade execution—not opportunistic trading.</p>
              </div>
              <div className="zz-img-wrap">
                <Image 
                  src="/services/import_category_grains.png" 
                  alt="Bulk Imports" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }} 
                />
                <div className="zz-icons-bar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#68C3A3" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#68C3A3" strokeWidth="2"><path d="M12 22c5-5 5-11 0-14-5 3-5 9 0 14z"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#68C3A3" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7L3 9l6 4-4 4-2.5-.5L1 14l3 6 5.5-1.5-.5-2.5 4-4 4 6c.5-.2.8-.6.7-1.1z"/></svg>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="zz-row reverse">
              <div className="zz-text">
                <h2>Imported Product Categories</h2>
                <ul className="zz-list mt-4">
                  <li><span className="chk">✓</span> Maize (Corn) - Animal Feed</li>
                  <li><span className="chk">✓</span> Soyabean Meal</li>
                  <li><span className="chk">✓</span> Wheat Bran</li>
                  <li><span className="chk">✓</span> Broken Rice - Feed Grade</li>
                  <li><span className="chk">✓</span> Palm Kernel Expeller (PKC)</li>
                  <li><span className="chk">✓</span> Calcium Carbonate - Industrial Grade</li>
                  <li><span className="chk">✓</span> Industrial Starch - Native / Modified</li>
                </ul>
              </div>
              <div className="zz-img-wrap">
                <Image 
                  src="/services/import_category_snacks.png" 
                  alt="Product Categories" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="zz-row">
              <div className="zz-text">
                <h2>Why International Suppliers Work With Us</h2>
                <ul className="zz-list mt-4">
                  <li><span className="chk">✓</span> Structured off-take through reliable local buyers</li>
                  <li><span className="chk">✓</span> Clear quality and specification requirements</li>
                  <li><span className="chk">✓</span> Professional documentation and trade processes</li>
                  <li><span className="chk">✓</span> Long-term sourcing focus, not spot transactions</li>
                </ul>
              </div>
              <div className="zz-img-wrap">
                <Image 
                  src="/services/import_agency_3d_hero.png" 
                  alt="International Suppliers" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* 6-CARD GRID SECTION (From Screenshot 2) */}
        <section className="core-sectors-section">
          <div className="container">
            <h2 className="text-center mb-5" style={{ fontSize: '2.4rem', fontWeight: 700, color: '#111' }}>Explore Our Core Sectors</h2>
            
            <div className="sectors-grid">
              
              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_organic_superfoods.png" 
                    alt="Feed Mills" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </span> 
                      Feed Mills
                    </h3>
                  </div>
                  <p>Bulk ingredient sourcing and advanced processing technology for poultry and aquaculture feeds.</p>
                </div>
              </div>

              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_specialty_foods.png" 
                    alt="Industrial Farms" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                      </span> 
                      Industrial Farms
                    </h3>
                  </div>
                  <p>Strategic input sourcing and modern management solutions for large-scale agricultural operations.</p>
                </div>
              </div>

              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_market_entry.png" 
                    alt="Dairy Sector" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-8.5c-.5 4.5-2 6.9-4 8.5S5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                      </span> 
                      Dairy Sector
                    </h3>
                  </div>
                  <p>Nutrition programs, herd management tech, and bulk supply solutions for commercial dairy production.</p>
                </div>
              </div>

              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_trade_logistics.png" 
                    alt="Logistics & Supply Chain" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                      </span> 
                      Logistics & Supply Chain
                    </h3>
                  </div>
                  <p>Integrated transportation, customs clearance, and efficient route optimization for international bulk cargo.</p>
                </div>
              </div>

              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_product_positioning.png" 
                    alt="Agri-Inputs Sourcing" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                      </span> 
                      Agri-Inputs Sourcing
                    </h3>
                  </div>
                  <p>Secure and certified global procurement of raw materials, supplements, and critical farming supplies.</p>
                </div>
              </div>

              <div className="sector-card">
                <div className="sector-img">
                  <Image 
                    src="/services/import_regulatory_compliance.png" 
                    alt="Global Import Advisory" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="sector-content">
                  <div className="sector-header">
                    <h3>
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                      </span> 
                      Global Import Advisory
                    </h3>
                  </div>
                  <p>Regulatory consulting, market intelligence, and risk assessment for complex international import operations.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <style jsx>{`
        /* Dark Hero Styles */
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
          background-color: #F5F7F6;
        }

        /* Zig-Zag Section */
        .zig-zag-section {
          padding: 80px 0;
        }
        .zz-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
          background: #FFF;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          border: 1px solid #EAEAEA;
        }
        .zz-row.reverse .zz-text {
          order: 2;
        }
        .zz-row.reverse .zz-img-wrap {
          order: 1;
        }
        
        .zz-text {
          padding: 60px;
        }
        .zz-text h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .zz-subtitle {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .zz-text p {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
        }
        .font-semibold { font-weight: 600; color: #333; }
        
        .zz-list {
          list-style: none;
          padding: 0;
          margin: 16px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .zz-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 1rem;
          color: #444;
        }
        .chk {
          color: #68C3A3;
          font-weight: bold;
          font-size: 1.1rem;
          margin-top: -2px;
        }

        .zz-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }
        .zz-icons-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px;
          display: flex;
          justify-content: center;
          gap: 40px;
          border-top: 1px solid #EAEAEA;
        }

        /* Core Sectors Section */
        .core-sectors-section {
          padding: 60px 0 100px;
        }
        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .sector-card {
          background: #FFF;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid #EAEAEA;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s;
        }
        .sector-card:hover { transform: translateY(-4px); }
        .sector-img {
          position: relative;
          width: 100%;
          height: 220px;
        }
        .sector-content {
          padding: 24px;
        }
        .sector-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        .sector-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111;
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
        }
        .sector-content p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
          margin: 0;
        }
        .icon { font-size: 1.5rem; }

        @media (max-width: 1024px) {
          .zz-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .zz-row.reverse .zz-text { order: 1; }
          .zz-row.reverse .zz-img-wrap { order: 2; }
          .zz-img-wrap { height: 350px; min-height: 350px; }
          .sectors-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .zz-text { padding: 40px 24px; }
          .sectors-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

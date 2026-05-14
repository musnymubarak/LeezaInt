'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <div>
                <h3>Leeza International</h3>
                <p className="footer-tagline">Premium Ceylon Exports</p>
              </div>
            </div>
            <p className="footer-desc">
              Your trusted partner for premium Ceylon spices, teas, and organic superfoods.
              Connecting Sri Lanka&apos;s finest to the world.
            </p>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <Link href="/products?category=ceylon-cinnamon">Ceylon Cinnamon</Link>
            <Link href="/products?category=ceylon-tea">Ceylon Tea</Link>
            <Link href="/products?category=coffee-cocoa">Coffee &amp; Cocoa</Link>
            <Link href="/products?category=coconut">Coconut Products</Link>
            <Link href="/products?category=organic-superfoods">Organic Superfoods</Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services/import">Import Services</Link>
            <Link href="/services/export">Export Services</Link>
            <Link href="/services/import-export-agent">Import &amp; Export Agent</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+94760009500">+94 760 009 500</a>
            <a href="mailto:info@leezaint.com">info@leezaint.com</a>
            <a href="https://wa.me/94760009500" target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{verticalAlign:'middle',marginRight:'6px'}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
            <p className="footer-address">Sri Lanka</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Leeza International. All rights reserved.</p>
          <div className="footer-badges">
            <span className="footer-badge">🌱 Eco-Friendly</span>
            <span className="footer-badge">✅ Quality Assured</span>
            <span className="footer-badge">🌍 Global Shipping</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1A1208 0%, #2C1810 50%, #1A1208 100%);
          color: rgba(255,255,255,0.8);
          padding: 64px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo .logo-icon { font-size: 1.6rem; }
        .footer-logo h3 {
          font-family: var(--font-heading);
          color: white;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        .footer-tagline {
          font-size: 0.7rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .footer-desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
        }
        .footer-col h4 {
          color: white;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
        }
        .footer-col a {
          display: block;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.6);
          padding: 4px 0;
          transition: color 0.2s;
        }
        .footer-col a:hover { color: var(--gold); }
        .footer-whatsapp { color: var(--whatsapp) !important; font-weight: 600; }
        .footer-address { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin-top: 8px; }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
        }
        .footer-badges { display: flex; gap: 16px; }
        .footer-badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.06);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          .footer-badges { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}

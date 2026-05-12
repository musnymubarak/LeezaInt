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
              💬 WhatsApp Us
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

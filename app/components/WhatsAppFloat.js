'use client';
import Link from 'next/link';

export default function WhatsAppFloat() {
  return (
    <Link href="https://wa.me/94760009500?text=Hi%2C%20I%27m%20interested%20in%20your%20products" target="_blank" className="whatsapp-float" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.052 31.29l6.158-1.966A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.322-5.656-1.216-4.748-1.966-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.792s1.194-3.4 1.618-3.866c.424-.466.924-.582 1.232-.582.308 0 .616.002.884.016.284.014.664-.108 1.04.792.39.934 1.326 3.234 1.442 3.468.116.234.194.506.038.82-.154.314-.232.51-.464.784-.232.274-.488.612-.698.822-.232.232-.474.484-.204.95.272.466 1.208 1.994 2.594 3.23 1.782 1.59 3.284 2.082 3.748 2.316.466.234.736.194 1.008-.116.272-.31 1.156-1.348 1.464-1.814.308-.466.616-.39 1.04-.234.424.156 2.694 1.272 3.158 1.504.464.234.774.348.89.54.116.194.116 1.1-.274 2.2z"/></svg>
      <style jsx>{`
        .whatsapp-float {
          position: fixed; bottom: 24px; right: 24px; z-index: 999;
          width: 60px; height: 60px; border-radius: 50%;
          background: var(--whatsapp); display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          transition: all 0.3s var(--ease); animation: float 3s ease-in-out infinite;
        }
        .whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 6px 30px rgba(37,211,102,0.5); }
      `}</style>
    </Link>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\nMessage: ${form.message}`);
    window.open(`https://wa.me/94760009500?text=${msg}`, '_blank');
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span className="sbadge">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you. Reach out for quotes, samples, or any inquiries.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Let&apos;s Connect</h2>
            <p className="info-desc">Whether you&apos;re a retailer, distributor, or food manufacturer — we&apos;re here to help with pricing, samples, and custom orders.</p>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📞</span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+94760009500">+94 760 009 500</a>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@leezaint.com">info@leezaint.com</a>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">💬</span>
                <div>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/94760009500" target="_blank" rel="noopener noreferrer">Chat Now</a>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="quick-wa">
              <Link href="https://wa.me/94760009500?text=Hi%2C%20I%27m%20interested%20in%20your%20products" target="_blank" className="btn btn-whatsapp btn-lg" style={{width:'100%',justifyContent:'center'}}>
                💬 Quick Chat on WhatsApp
              </Link>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+94 ..." />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                  <option value="">Select...</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Export Services">Export Services</option>
                  <option value="Import Services">Import Services</option>
                  <option value="Trade Agent">Trade Agent Services</option>
                  <option value="Sample Request">Sample Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{width:'100%',justifyContent:'center'}}>
              Send via WhatsApp →
            </button>
            <p className="form-hint">Your message will be sent directly to our WhatsApp for fastest response.</p>
          </form>
        </div>
      </section>

      <style jsx>{`
        .contact-hero { background:linear-gradient(135deg,#1A1208,#2C1810 40%,#4A2E1A); padding:80px 0 60px; text-align:center; color:white; }
        .sbadge { display:inline-block; padding:6px 16px; background:rgba(255,255,255,0.1); border-radius:20px; font-size:0.8rem; font-weight:600; color:var(--gold); text-transform:uppercase; letter-spacing:0.06em; margin-bottom:12px; }
        .contact-hero h1 { font-size:2.8rem; background:linear-gradient(135deg,#fff,var(--gold-light)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin:12px 0; }
        .contact-hero p { color:rgba(255,255,255,0.6); font-size:1.05rem; }
        .contact-layout { display:grid; grid-template-columns:1fr 1.2fr; gap:48px; align-items:start; }
        .contact-info h2 { font-size:1.6rem; margin-bottom:12px; }
        .info-desc { font-size:0.95rem; color:var(--text-secondary); line-height:1.7; margin-bottom:24px; }
        .info-cards { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px; }
        .info-card { display:flex; align-items:flex-start; gap:12px; padding:16px; background:var(--bg-warm); border-radius:var(--radius-sm); }
        .info-icon { font-size:1.4rem; }
        .info-card h3 { font-family:var(--font-body); font-size:0.8rem; font-weight:600; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:4px; }
        .info-card a, .info-card p { font-size:0.9rem; color:var(--text); font-weight:500; }
        .info-card a:hover { color:var(--primary); }
        .contact-form { background:white; padding:32px; border-radius:var(--radius-md); border:1px solid var(--border-light); box-shadow:var(--shadow-sm); }
        .contact-form h2 { font-size:1.4rem; margin-bottom:24px; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .form-group { margin-bottom:16px; }
        .form-group label { display:block; font-size:0.82rem; font-weight:600; color:var(--text-secondary); margin-bottom:6px; }
        .form-group input, .form-group select, .form-group textarea {
          width:100%; padding:12px 14px; border:1px solid var(--border); border-radius:var(--radius-sm);
          font-family:var(--font-body); font-size:0.9rem; outline:none; transition:border-color 0.2s;
          background:white;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color:var(--primary); }
        .form-group textarea { resize:vertical; }
        .form-hint { text-align:center; font-size:0.8rem; color:var(--text-muted); margin-top:12px; }
        @media (max-width:768px) { .contact-layout { grid-template-columns:1fr; } .form-row { grid-template-columns:1fr; } }
      `}</style>
    </>
  );
}

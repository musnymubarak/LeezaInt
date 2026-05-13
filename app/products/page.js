'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { categories } from '@/src/data/categories';
import { products } from '@/src/data/products';
import { Suspense } from 'react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [activeCat, setActiveCat] = useState(initialCat);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = activeCat === 'all' ? products : products.filter(p => p.category === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q));
    }
    return list;
  }, [activeCat, search]);

  return (
    <>
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <span className="section-badge light">Our Catalog</span>
          <h1>Premium Products</h1>
          <p>Explore our complete range of 32+ premium products across 7 categories</p>
        </div>
      </section>

      <section className="section products-section">
        <div className="container products-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-search">
              <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />
            </div>
            <div className="sidebar-cats">
              <h3>Categories</h3>
              <button className={`cat-btn ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>
                All Products <span className="cat-count">{products.length}</span>
              </button>
              {categories.map(cat => (
                <button key={cat.id} className={`cat-btn ${activeCat === cat.id ? 'active' : ''}`} onClick={() => setActiveCat(cat.id)}>
                  <span>{cat.icon} {cat.name}</span> <span className="cat-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Grid */}
          <div className="products-main">
            <div className="products-header">
              <p className="results-count">Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="products-grid">
              {filtered.map(p => (
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
                    <span className="badge badge-primary">{categories.find(c => c.id === p.category)?.name || ''}</span>
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-desc">{p.shortDesc}</p>
                    <span className="product-link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="no-results">
                <p>No products found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .products-hero {
          background: linear-gradient(135deg, #1A1208 0%, #2C1810 40%, #4A2E1A 100%);
          padding: 80px 0 60px; text-align: center; color: white;
        }
        .products-hero h1 {
          font-size: 2.8rem; margin: 12px 0;
          background: linear-gradient(135deg, #fff, var(--gold-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .products-hero p { color: rgba(255,255,255,0.6); font-size: 1.05rem; }
        .products-layout { display: grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: start; }
        .sidebar {
          position: sticky; top: 96px;
          background: white; border-radius: var(--radius-md); border: 1px solid var(--border-light);
          padding: 20px; box-shadow: var(--shadow-sm);
        }
        .search-input {
          width: 100%; padding: 10px 14px; border: 1px solid var(--border);
          border-radius: var(--radius-sm); font-size: 0.88rem; font-family: var(--font-body);
          outline: none; transition: border-color 0.2s;
        }
        .search-input:focus { border-color: var(--primary); }
        .sidebar-cats { margin-top: 20px; }
        .sidebar-cats h3 { font-family: var(--font-body); font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 10px; }
        .cat-btn {
          display: flex; align-items: center; justify-content: space-between; width: 100%;
          padding: 10px 12px; background: none; border: none; border-radius: var(--radius-sm);
          font-size: 0.85rem; color: var(--text-secondary); cursor: pointer;
          transition: all 0.2s; text-align: left;
        }
        .cat-btn:hover { background: var(--bg-warm); color: var(--primary); }
        .cat-btn.active { background: rgba(123,91,58,0.08); color: var(--primary); font-weight: 600; }
        .cat-count { font-size: 0.75rem; background: var(--bg-warm); padding: 2px 8px; border-radius: 10px; color: var(--text-muted); }
        .results-count { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 20px; }
        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .product-card { text-decoration: none; }
        .product-img {
          height: 180px; background: linear-gradient(135deg, var(--bg-warm), #EDE8E0);
          display: flex; align-items: center; justify-content: center;
        }
        .product-img-placeholder {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(123,91,58,0.1); display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading); font-size: 1rem; color: var(--primary); font-weight: 700;
        }
        .product-info { padding: 16px; }
        .product-name { font-family: var(--font-body); font-size: 0.9rem; font-weight: 600; margin: 8px 0 4px; line-height: 1.4; }
        .product-desc {
          font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 10px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .product-link { font-size: 0.8rem; font-weight: 600; color: var(--primary); }
        .no-results { text-align: center; padding: 60px 0; color: var(--text-muted); }
        .section-badge.light { background: rgba(255,255,255,0.1); color: var(--gold); display: inline-block; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }

        @media (max-width: 900px) {
          .products-layout { grid-template-columns: 1fr; }
          .sidebar { position: static; }
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

import Link from 'next/link';
import { products, getProductBySlug } from '@/src/data/products';
import { categories } from '@/src/data/categories';
import { notFound } from 'next/navigation';
import s from './page.module.css';

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Dr Ceylon - Leeza International`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const cat = categories.find(c => c.id === product.category);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const waMsg = encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you share pricing and availability?`);

  return (
    <>
      <div className={s.breadcrumbBar}>
        <div className={s.breadcrumb}>
          <Link href="/">Home</Link> <span>/</span>
          <Link href="/products">Products</Link> <span>/</span>
          <span className={s.current}>{product.name}</span>
        </div>
      </div>

      <section className={s.detailSection}>
        <div className={s.detailLayout}>
          <div className={s.detailImage}>
            {product.image ? (
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className={s.imagePlaceholder}>
                <span className={s.imageInitials}>{product.name.split(' ').map(w => w[0]).join('').slice(0,3)}</span>
                <span className={s.imageLabel}>Dr Ceylon</span>
              </div>
            )}
          </div>

          <div className={s.detailInfo}>
            {cat && <span className="badge badge-primary">{cat.icon} {cat.name}</span>}
            <h1>{product.name}</h1>
            <p className={s.detailDesc}>{product.description}</p>

            <div className={s.ctaBox}>
              <Link href={`https://wa.me/94760009500?text=${waMsg}`} target="_blank" className={`btn btn-whatsapp btn-lg ${s.btnFull}`}>
                💬 Order via WhatsApp
              </Link>
              <p className={s.ctaHint}>Contact us for pricing, samples &amp; custom orders</p>
            </div>

            <div className={s.sectionBlock}>
              <h2>Specifications</h2>
              <div className={s.specsTable}>
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className={s.specRow}>
                    <span className={s.specKey}>{key}</span>
                    <span className={s.specVal}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.sectionBlock}>
              <h2>Quality &amp; Features</h2>
              <ul className={s.featuresList}>
                {product.features.map((f, i) => (
                  <li key={i}><span className={s.check}>✓</span> {f}</li>
                ))}
              </ul>
            </div>

            <div className={s.sectionBlock}>
              <h2>Packaging</h2>
              <div className={s.packagingTags}>
                {product.packaging.map((p, i) => (
                  <span key={i} className={s.pkgTag}>📦 {p}</span>
                ))}
              </div>
              <p className={s.shelfLife}>Shelf Life: {product.shelfLife}</p>
            </div>

            {product.applications && (
              <div className={s.sectionBlock}>
                <h2>Applications</h2>
                <div className={s.appTags}>
                  {product.applications.map((a, i) => (
                    <span key={i} className={s.appTag}>{a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`${s.relatedSection} gradient-warm`}>
          <div className={s.relatedInner}>
            <h2 className="section-title">Related Products</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link href={`/products/${p.slug}`} key={p.id} className="card" style={{textDecoration:'none'}}>
                  <div className={s.relatedImg}>
                    {p.image ? (
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div className={s.riPlaceholder}>{p.name.split(' ').map(w => w[0]).join('').slice(0,2)}</div>
                    )}
                  </div>
                  <div className={s.productInfo}>
                    <h3 className={s.productName}>{p.name}</h3>
                    <span className={s.productLink}>View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

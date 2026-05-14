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
              <Link href={`https://wa.me/94760009500?text=${waMsg}`} target="_blank" className={`cta-wa-btn ${s.btnFull}`}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order via WhatsApp
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

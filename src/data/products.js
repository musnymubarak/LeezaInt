import { productsPart1 } from './products-part1';
import { productsPart2 } from './products-part2';

export const products = [...productsPart1, ...productsPart2];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

export function getAllSlugs() {
  return products.map(p => p.slug);
}

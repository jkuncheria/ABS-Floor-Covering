import { SEO_CONFIG, type PageKey } from '../seoConfig';

/**
 * Builds a route's meta from the existing SEO_CONFIG entry, so titles and
 * descriptions keep coming from the one place they always came from.
 *
 * Emits canonical + Open Graph + Twitter alongside the title/description, which
 * the old useEffect-based <SEO> component did at runtime and crawlers missed.
 */
export function pageMeta(key: PageKey) {
  const page = SEO_CONFIG.pages[key];
  const url = `${SEO_CONFIG.baseUrl}${page.path}`;
  // NOTE: a child route's meta() REPLACES the root's entirely in React Router
  // framework mode, so site-wide tags must live here or they vanish from every
  // page. They were previously only in root.tsx and were being dropped.
  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: SEO_CONFIG.siteName },
    { name: 'geo.region', content: 'US-AZ' },
    { name: 'geo.placename', content: 'Phoenix' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SEO_CONFIG.siteName },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: `${SEO_CONFIG.baseUrl}/og-image.jpg` },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${SEO_CONFIG.siteName}, commercial flooring contractor in Phoenix AZ` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: `${SEO_CONFIG.baseUrl}/og-image.jpg` },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: url },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:url', content: url },
  ];
}

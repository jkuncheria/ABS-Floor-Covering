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
  return [
    { title: page.title },
    { name: 'description', content: page.description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: url },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:url', content: url },
  ];
}

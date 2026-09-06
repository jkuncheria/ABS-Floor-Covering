import { type RouteConfig, index, route } from '@react-router/dev/routes';

/**
 * Every path here is prerendered to its own static HTML file at build time
 * (react-router.config.ts sets `prerender: true`).
 *
 * The 21 legacy SEO redirects that used to live in App.tsx as <Navigate>
 * elements are now real 308s in vercel.json. Client-side redirects cannot be
 * prerendered and require a crawler to execute JS before it sees the target.
 */
export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('faq', 'routes/faq.tsx'),
  route('all-flooring-products', 'routes/all-flooring-products.tsx'),
  route('commercial', 'routes/commercial.tsx'),
  route('residential', 'routes/residential.tsx'),
  route('project-gallery', 'routes/project-gallery.tsx'),
  route('hardwood', 'routes/hardwood.tsx'),
  route('carpet', 'routes/carpet.tsx'),
  route('tile', 'routes/tile.tsx'),
  route('luxury-vinyl', 'routes/luxury-vinyl.tsx'),
  route('laminate', 'routes/laminate.tsx'),
  route('polished-concrete', 'routes/polished-concrete.tsx'),
  route('floor-restoration', 'routes/floor-restoration.tsx'),
  route('commercial-flooring-phoenix', 'routes/commercial-flooring-phoenix.tsx'),
  route('commercial-flooring-scottsdale', 'routes/commercial-flooring-scottsdale.tsx'),
  route('stained-concrete', 'routes/stained-concrete.tsx'),
  route('epoxy-flooring', 'routes/epoxy-flooring.tsx'),
  route('moisture-testing', 'routes/moisture-testing.tsx'),
  route('blog', 'routes/blog.tsx'),
  route('blog/retail-flooring-customer-experience-sales', 'routes/blog-retail-flooring.tsx'),
  route('blog/lvt-vs-hardwood-commercial-flooring', 'routes/blog-lvt-vs-hardwood.tsx'),
  route('blog/2026-commercial-flooring-trends-phoenix', 'routes/blog-flooring-trends-2026.tsx'),
] satisfies RouteConfig;

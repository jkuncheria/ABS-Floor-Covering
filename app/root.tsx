import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from 'react-router';
import type { Route } from './+types/root';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { SEO_CONFIG } from '../seoConfig';
import { LOCAL_BUSINESS_SCHEMA } from './localBusinessSchema';

/**
 * Document shell. This replaces index.html, which no longer drives the build.
 *
 * Site-wide tags live here; per-page title/description/canonical come from each
 * route module's meta() export and override the defaults below by name.
 */
export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/png', href: '/abslogo.png' },
  { rel: 'apple-touch-icon', href: '/abslogo.png' },
  { rel: 'preload', href: '/abslogo.webp', as: 'image' },
  { rel: 'preload', href: '/hotel-thumbnail.webp', as: 'image' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'dns-prefetch', href: 'https://elfsightcdn.com' },
  { rel: 'dns-prefetch', href: 'https://www.roomvo.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap',
  },
];

export function meta() {
  return [
    { title: SEO_CONFIG.pages.home.title },
    { name: 'description', content: SEO_CONFIG.pages.home.description },
    {
      name: 'keywords',
      content:
        'commercial flooring Phoenix, flooring contractor Arizona, hardwood flooring Phoenix, carpet installation Scottsdale, tile flooring, luxury vinyl, polished concrete, epoxy flooring, floor restoration',
    },
    { name: 'author', content: 'ABS Floor Covering' },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'US-AZ' },
    { name: 'geo.placename', content: 'Phoenix' },
    { name: 'geo.position', content: '33.4646792;-112.1216764' },
    { name: 'ICBM', content: '33.4646792, -112.1216764' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SEO_CONFIG.siteName },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: `${SEO_CONFIG.baseUrl}${SEO_CONFIG.defaultImage}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: `${SEO_CONFIG.baseUrl}${SEO_CONFIG.defaultImage}` },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />

        {/* Tailwind is served from the CDN. src/index.css exists but is not
            imported anywhere, so removing this drops all styling. */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://elfsightcdn.com/platform.js" defer></script>

        {/* Roomvo visualiser, desktop only */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.innerWidth >= 1024) {
  var roomvoScript = document.createElement('script');
  roomvoScript.defer = true;
  roomvoScript.id = 'roomvoAssistant';
  roomvoScript.type = 'text/javascript';
  roomvoScript.setAttribute('data-locale', 'en-us');
  roomvoScript.setAttribute('data-position', 'bottom-left');
  roomvoScript.src = 'https://www.roomvo.com/static/scripts/b2b/common/assistant.js';
  document.head.appendChild(roomvoScript);
}`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `body { font-family: 'Inter', sans-serif; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
/* Guard against a stray wide element causing sideways scroll on mobile */
html, body { overflow-x: clip; }
@supports not (overflow: clip) { html, body { overflow-x: hidden; } }`,
          }}
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        {/* Elfsight All-in-One Chat */}
        <div className="elfsight-app-8d6fce49-bdbb-4276-a2df-2a4134016a6a" data-elfsight-app-lazy></div>
      </div>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-24 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {is404 ? 'Page not found' : 'Something went wrong'}
          </h1>
          <p className="text-gray-600 mb-8">
            {is404
              ? 'That page does not exist or has moved.'
              : 'Please try again, or call us at 602-415-1919.'}
          </p>
          <a href="/" className="text-blue-900 font-semibold hover:underline">
            Back to home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/**
 * Cloudflare Worker — Oportunidad País
 * Sirve archivos estáticos + SPA routing para oportunidadpais.cl
 * Sin ASSETS binding (modo Pages), solo Worker puro con Worker Route.
 */
const HTML_FILES = ['index.html', 'ranking-aporte-instituciones.html', 'reporte-aporte-instituciones.html'];
const STATIC_EXTENSIONS = ['.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.woff2', '.json'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff2':'font/woff2',
  '.json': 'application/json',
};

async function serveFile(path, env) {
  // Strip leading slash
  const clean = path.replace(/^\//, '') || 'index.html';

  // Security: block path traversal
  if (clean.includes('..') || clean.startsWith('/')) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    const val = await env.OPORTUNIDADPAIS.get(clean);
    if (val !== null) {
      const ext = '.' + clean.split('.').pop();
      const contentType = MIME[ext] || 'application/octet-stream';
      return new Response(val, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
  } catch (e) {}

  // Try KV for other files
  try {
    const val = await env.OPORTUNIDADPAIS_KV.get(clean);
    if (val !== null) {
      const ext = '.' + clean.split('.').pop();
      const contentType = MIME[ext] || 'application/octet-stream';
      return new Response(val, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
  } catch (e) {}

  return new Response('Not Found', { status: 404 });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Skip static asset handling for non-static paths (SPA)
    const ext = '.' + pathname.split('.').pop();
    const isStatic = STATIC_EXTENSIONS.includes(ext);

    if (!isStatic && !HTML_FILES.some(f => pathname.endsWith(f))) {
      // SPA: serve index.html for any non-file request
      const idx = await env.OPORTUNIDADPAIS.get('index.html');
      if (idx) {
        return new Response(idx, {
          headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
        });
      }
      // fallback: try KV
      try {
        const idx2 = await env.OPORTUNIDADPAIS_KV.get('index.html');
        if (idx2) {
          return new Response(idx2, {
            headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
          });
        }
      } catch (e) {}
      return new Response('Service Unavailable', { status: 503 });
    }

    return serveFile(pathname, env);
  },
};
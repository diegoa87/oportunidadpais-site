/**
 * Cloudflare Worker — Oportunidad País
 * SPA routing + static file serving
 * Wraps ASSETS.fetch() in safe error handling to prevent 1101 crashes.
 */

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
  '.webp': 'image/webp',
  '.mp4':  'video/mp4',
  '.ogg':  'audio/ogg',
  '.txt':  'text/plain',
};

const DIRECT_FILES = new Set([
  'index.html',
  'capitulos.html',
  'personas.html',
  'reportes.html',
  'sobre.html',
  'capitulo.html',
  'persona.html',
  '404.html',
]);

function isStaticFile(pathname) {
  const ext = '.' + (pathname.split('.').pop() || '');
  return ext in MIME
    || pathname.startsWith('/static/')
    || pathname.startsWith('/logos/')
    || pathname.startsWith('/entrevistados/img/')
    || pathname.startsWith('/personas/img/');
}

function isSpaPath(pathname) {
  if (isStaticFile(pathname)) return false;
  if (pathname === '/') return false;
  const base = pathname.replace(/\/$/, '');
  if (DIRECT_FILES.has(base.slice(1))) return false;
  if (DIRECT_FILES.has(base.slice(1) + '.html')) return false;
  return true;
}

async function serveAsset(env, request) {
  if (env.ASSETS) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // ASSETS binding not properly configured — fall through
    }
  }
  return null;
}

async function serveStatic(env, pathname) {
  const cleanPath = pathname.replace(/^\//, '') || 'index.html';
  if (cleanPath.includes('..') || cleanPath.includes(':')) {
    return new Response('Forbidden', { status: 403 });
  }

  const ext = '.' + (cleanPath.split('.').pop() || '');
  const contentType = MIME[ext] || 'application/octet-stream';

  // KV stores
  if (env.OPORTUNIDADPAIS) {
    const v = await env.OPORTUNIDADPAIS.get(cleanPath);
    if (v !== null) {
      return new Response(v, {
        headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=86400' },
      });
    }
  }
  if (env.OPORTUNIDADPAIS_KV) {
    const v = await env.OPORTUNIDADPAIS_KV.get(cleanPath);
    if (v !== null) {
      return new Response(v, {
        headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=86400' },
      });
    }
  }

  // ASSETS binding
  const url = new URL('https://oportunidadpais.cl' + pathname);
  const req = new Request(url.toString(), {
    method: 'GET',
    headers: {},
  });
  const assetResp = await serveAsset(env, req);
  if (assetResp && assetResp.ok) {
    return assetResp;
  }

  return null;
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      // SPA: serve index.html for all non-file routes
      if (isSpaPath(pathname)) {
        const assetResp = await serveAsset(env, new Request(url.origin + '/index.html'));
        if (assetResp && assetResp.ok) {
          return new Response(assetResp.body, {
            headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
          });
        }
        return new Response('Not Found', { status: 404 });
      }

      // Static files
      const staticResp = await serveStatic(env, pathname);
      if (staticResp) return staticResp;

      return new Response('Not Found: ' + pathname, { status: 404 });
    } catch (e) {
      return new Response('Error: ' + e.message, { status: 500 });
    }
  },
};
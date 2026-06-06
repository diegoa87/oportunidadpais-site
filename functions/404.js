export async function onRequest({ request }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.oportunidadpais.cl') {
    url.hostname = 'oportunidadpais.cl';
    return Response.redirect(url.toString(), 301);
  }
  return new Response('Not Found', { status: 404 });
}

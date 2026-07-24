/**
 * Cloudflare Pages middleware — canonical host enforcement.
 * 301 redirect hmz.technology → www.hmz.technology so only one
 * canonical origin is indexed (matches canonical tags & sitemap).
 */
interface PagesContext {
  request: Request;
  next: () => Promise<Response>;
}

const CANONICAL_HOST = "www.hmz.technology";
const APEX_HOST = "hmz.technology";

export const onRequest = async (context: PagesContext): Promise<Response> => {
  const url = new URL(context.request.url);

  if (url.hostname === APEX_HOST) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};

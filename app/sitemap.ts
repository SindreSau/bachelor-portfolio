export const baseUrl = 'https://bachelorproject.sindresau.me';

export default async function sitemap() {
  const routes = [
    '',
    '/admin-dashboard',
    '/application-portal',
    '/architecture',
    '/team',
    '/video-overview',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}

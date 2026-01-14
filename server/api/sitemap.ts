import { repositoryName } from "../../slicemachine.config.json";
import { createClient } from "@prismicio/client";

export default defineEventHandler(async (event) => {
  const routes = [
    '',
  ];

  const client = createClient(repositoryName);
  const documents = await client.getAllByType('page', { pageSize: 100 });

  documents.forEach((doc) => {
    routes.push(doc.uid + '/');
  });

  const sitemapEntries = routes.map((route) => {
    return `
      <url>
        <loc>https://rijschoolgorredijk.nl/${route}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapEntries.join('')}
    </urlset>
  `;
  setResponseHeader(event, 'Content-Type', 'application/xml');
  return sitemap;
});
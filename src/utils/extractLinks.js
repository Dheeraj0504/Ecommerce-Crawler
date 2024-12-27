const cheerio = require('cheerio');
const { PRODUCT_PATTERNS } = require('./constants');

function extractProductUrls(html, baseUrl) {
  const $ = cheerio.load(html);
  const links = new Set();

  $('a[href]').each((_, element) => {
    const href = $(element).attr('href');
    if (PRODUCT_PATTERNS.some((pattern) => pattern.test(href))) {
      const fullUrl = href.startsWith('/') ? `${baseUrl}${href}` : href;
      links.add(fullUrl);
    }
  });

  return Array.from(links);
}

module.exports = extractProductUrls;

const { fetchStaticPage, fetchDynamicPage } = require('./utils/fetchPage');
const extractProductUrls = require('./utils/extractLinks');
const { MAX_DEPTH } = require('./utils/constants');

async function crawlDomain(domain, useDynamic = false, depth = 0) {
  if (depth > MAX_DEPTH) return [];

  console.log(`Crawling ${domain} at depth ${depth}`);
  const fetchPage = useDynamic ? fetchDynamicPage : fetchStaticPage;
  const html = await fetchPage(domain);

  if (!html) return [];

  const productUrls = extractProductUrls(html, domain);
  return productUrls;
}

module.exports = crawlDomain;

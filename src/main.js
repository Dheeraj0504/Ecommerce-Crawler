const fs = require('fs-extra');
const path = require('path');
const crawlDomain = require('./crawler');

async function main() {
  const domains = [
    'https://example1.com',
    'https://example2.com',
    'https://example3.com',
  ];

  const results = {};

  for (const domain of domains) {
    const productUrls = await crawlDomain(domain);
    results[domain] = productUrls;
  }

  const outputPath = path.join(__dirname, '../output/productUrls.json');
  await fs.outputJson(outputPath, results, { spaces: 2 });

  console.log('Crawling completed. Results saved to:', outputPath);
}

main().catch((error) => console.error('Error in main process:', error));

const axios = require('axios');
const puppeteer = require('puppeteer');

async function fetchStaticPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    return null;
  }
}

async function fetchDynamicPage(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const content = await page.content();
    await browser.close();
    return content;
  } catch (error) {
    console.error(`Failed to fetch dynamic content from ${url}:`, error.message);
    return null;
  }
}

module.exports = { fetchStaticPage, fetchDynamicPage };

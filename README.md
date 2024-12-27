# Ecommerce Crawler

This project is an ecommerce crawler that fetches product URLs from specified domains. It supports both static and dynamic page fetching.

## Installation

To install the dependencies, run:

```bash
npm install
```

## Usage

To start the crawler, run:

```bash
node src/main.js
```

## Configuration

You can configure the crawler by modifying the following files:

- `src/utils/constants.js`: Adjust the `PRODUCT_PATTERNS` and `MAX_DEPTH` values.
- `src/main.js`: Add or remove domains to crawl.

## Files

- `src/utils/fetchPage.js`: Contains functions to fetch static and dynamic pages.
- `src/utils/extractLinks.js`: Contains a function to extract product URLs from HTML.
- `src/utils/constants.js`: Contains constants used in the project.
- `src/main.js`: Main entry point for the crawler.
- `src/crawler.js`: Contains the main crawling logic.

## Output

The results are saved in the `output/productUrls.json` file.

## Dependencies

- `axios`: For fetching static pages.
- `cheerio`: For parsing HTML and extracting links.
- `fs-extra`: For file system operations.
- `puppeteer`: For fetching dynamic pages.

## License

This project is licensed under the ISC License.

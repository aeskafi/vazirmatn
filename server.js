/**
 * @fileoverview Lightweight static server for Vazirmatn Font Studio.
 * Serves font files with correct MIME types and headers.
 *
 * Curated by Arham Eskafi (https://arham.dev) - Walk Cook Live
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
};

function createServer() {
  return http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split("?")[0]);
    if (reqPath === "/" || reqPath === "") {
      reqPath = "/index.html";
    }

    const filePath = path.join(__dirname, reqPath);

    // Security check against directory traversal
    if (!filePath.startsWith(__dirname)) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("Forbidden");
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      res.writeHead(200, {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      });

      fs.createReadStream(filePath).pipe(res);
    });
  });
}

if (require.main === module) {
  const server = createServer();
  server.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🎨 Vazirmatn Font Studio running at:`);
    console.log(`   http://localhost:${PORT}`);
    console.log(`======================================================\n`);
  });
}

module.exports = { createServer, MIME_TYPES, PORT };

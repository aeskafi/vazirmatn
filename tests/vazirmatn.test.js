const { describe, it } = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const http = require("http");

const { createServer } = require("../server");

describe("Vazirmatn Typeface & Studio Test Suite", () => {
  const rootDir = path.resolve(__dirname, "..");

  describe("Font Assets Integrity", () => {
    const expectedWeights = [
      "Thin",
      "ExtraLight",
      "Light",
      "Regular",
      "Medium",
      "SemiBold",
      "Bold",
      "ExtraBold",
      "Black",
    ];

    expectedWeights.forEach((weight) => {
      it(`verifies Vazirmatn-${weight}.woff2 exists and is non-empty`, () => {
        const fontPath = path.join(rootDir, "fonts", "webfonts", `Vazirmatn-${weight}.woff2`);
        assert.ok(fs.existsSync(fontPath), `Font file missing: ${fontPath}`);
        const stat = fs.statSync(fontPath);
        assert.ok(stat.size > 10000, `Font file size unexpectedly small (${stat.size} bytes)`);
      });
    });

    it("verifies variable font Vazirmatn[wght].woff2 exists", () => {
      const varFontPath = path.join(rootDir, "fonts", "webfonts", "Vazirmatn[wght].woff2");
      assert.ok(fs.existsSync(varFontPath));
    });
  });

  describe("CSS Font-Face Declarations", () => {
    it("Vazirmatn-font-face.css contains all 9 weights from 100 to 900", () => {
      const cssPath = path.join(rootDir, "Vazirmatn-font-face.css");
      assert.ok(fs.existsSync(cssPath));
      const content = fs.readFileSync(cssPath, "utf8");

      [100, 200, 300, 400, 500, 600, 700, 800, 900].forEach((weight) => {
        assert.ok(content.includes(`font-weight: ${weight};`), `Missing font-weight: ${weight}`);
      });
      assert.ok(content.includes("format('woff2')"));
    });

    it("Vazirmatn-Variable-font-face.css defines variable weight range 100 900", () => {
      const cssPath = path.join(rootDir, "Vazirmatn-Variable-font-face.css");
      assert.ok(fs.existsSync(cssPath));
      const content = fs.readFileSync(cssPath, "utf8");
      assert.ok(content.includes("font-weight: 100 900;"));
    });
  });

  describe("Studio Server & MIME Types", () => {
    let server;
    let port;

    it("starts server and serves index.html and font assets", async () => {
      server = createServer();
      await new Promise((resolve) => {
        server.listen(0, () => {
          port = server.address().port;
          resolve();
        });
      });

      // 1. Test index.html
      const htmlRes = await new Promise((resolve) => {
        http.get(`http://localhost:${port}/`, (res) => {
          let data = "";
          res.on("data", (chunk) => (data += chunk));
          res.on("end", () => resolve({ status: res.statusCode, data, headers: res.headers }));
        });
      });

      assert.strictEqual(htmlRes.status, 200);
      assert.ok(htmlRes.headers["content-type"].includes("text/html"));
      assert.ok(htmlRes.data.includes("Vazirmatn"));

      // 2. Test woff2 font serving
      const fontRes = await new Promise((resolve) => {
        http.get(`http://localhost:${port}/fonts/webfonts/Vazirmatn-Regular.woff2`, (res) => {
          res.resume();
          resolve({ status: res.statusCode, headers: res.headers });
        });
      });

      assert.strictEqual(fontRes.status, 200);
      assert.strictEqual(fontRes.headers["content-type"], "font/woff2");

      // 3. Test 404 for non-existent files
      const notFoundRes = await new Promise((resolve) => {
        http.get(`http://localhost:${port}/non-existent.xyz`, (res) => {
          res.resume();
          resolve({ status: res.statusCode });
        });
      });
      assert.strictEqual(notFoundRes.status, 404);

      server.close();
    });
  });
});

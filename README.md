<div align="center">

```
  تایپ‌فیس محبوب وزیرمتن
  [ V A Z I R M A T N ]
  A Modern, Elegant Persian/Arabic Typeface & Studio
```

# Vazirmatn (وزیرمتن)

### The premier open-source Persian & Arabic typeface with 9 weights, variable font support, and interactive studio.

[![Typeface](https://img.shields.io/badge/Typeface-Persian%20%2F%20Arabic-007ACC?style=flat-square&logo=google-fonts&logoColor=white)](https://arham.dev)
[![Weights](https://img.shields.io/badge/Weights-9%20Weights%20(100--900)-blueviolet?style=flat-square)](./Vazirmatn-font-face.css)
[![Variable Font](https://img.shields.io/badge/Font-Variable%20VF-38BDF8?style=flat-square)](./Vazirmatn-Variable-font-face.css)
[![Studio UI](https://img.shields.io/badge/Studio-Interactive%20Web%20Tester-success?style=flat-square)](./index.html)
[![License: OFL](https://img.shields.io/badge/License-OFL%201.1-brightgreen.svg?style=flat-square)](./OFL.txt)
[![Curator](https://img.shields.io/badge/Curated%20by-Arham%20Eskafi-007ACC?style=flat-square&logo=github&logoColor=white)](https://arham.dev)

[**Live Font Studio**](https://arham.dev) • [**Walk Cook Live**](https://youtube.com/@walkcooklive) • [**GitHub**](https://github.com/aeskafi/vazirmatn)

</div>

---

## 🎨 Overview

**Vazirmatn (وزیرمتن)** is the de facto standard open-source Persian and Arabic typeface designed for digital readability, modern user interfaces, web applications, and print typography. 

Originally created by the late Iranian font designer **Saber Rastikerdar (صابر راستی‌کردار)**, Vazirmatn features harmonious horizontal proportions, optimized ascenders/descenders for UI buttons and mobile screens, seamless pairing with Latin glyphs (Roboto integration), and comprehensive Arabic script language support (Persian, Arabic, Urdu, Kurdish, Pashto).

---

## ✨ Key Features

- 🖋️ **Full 9-Weight Spectrum**: Thin (100), ExtraLight (200), Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800), and Black (900).
- 🎛️ **Variable Font Technology**: Continuous weight interpolation with `Vazirmatn[wght].woff2` minimizing payload sizes across web apps.
- 📱 **Screen-Optimized Geometry**: Engineered specifically for high-DPI screens, mobile viewports, and clean UI rendering without baseline jitter.
- 🌐 **Interactive Typeface Studio**: Built-in zero-dependency web playground (`index.html`) featuring real-time weight sliders, size adjusters, poetry/UI copy presets, and CSS snippet generators.
- 📦 **Multi-Format Web Distribution**: Ready-to-serve modern `.woff2`, `.ttf`, and `.css` font-face declarations.

---

## 🚀 Quickstart

Preview and test Vazirmatn locally in 3 steps:

### 1. Clone the repository
```bash
git clone https://github.com/aeskafi/vazirmatn.git
cd vazirmatn
```

### 2. Launch the local Font Studio
```bash
npm start
```

### 3. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to interact with the live typeface specimen and controls.

---

## 💻 Web Integration

### Option 1: Via CDN (`jsdelivr`)

Add the stylesheet link directly to your HTML:

```html
<link href="https://cdn.jsdelivr.net/gh/aeskafi/vazirmatn@master/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
```

Or import in your CSS:

```css
@import url('https://cdn.jsdelivr.net/gh/aeskafi/vazirmatn@master/Vazirmatn-font-face.css');

body {
  font-family: 'Vazirmatn', sans-serif;
}
```

### Option 2: Variable Font (Single Payload)

```html
<link href="https://cdn.jsdelivr.net/gh/aeskafi/vazirmatn@master/Vazirmatn-Variable-font-face.css" rel="stylesheet" type="text/css" />
```

```css
body {
  font-family: 'Vazirmatn', sans-serif;
  font-weight: 450; /* Any value between 100 and 900 */
}
```

---

## 🧪 Testing

Verify font files, CSS `@font-face` declarations, and studio server integrity:

```bash
npm test
```

---

## 👥 Credits & Mission

- **Original Designer & Creator**: Created with immense love and dedication by **[Saber Rastikerdar (صابر راستی‌کردار)](https://github.com/rastikerdar)** (1986–2023), who transformed open typography across the Persian-speaking world.
- **Curation & Modernization**: Maintained, curated, and upgraded with the interactive Font Studio by **[Arham Eskafi](https://arham.dev)** — Rapid MVP Specialist, Full-Stack Architect, and creator of **[Walk Cook Live](https://youtube.com/@walkcooklive)**, documenting overland nomad adventures across the globe.

---

## 📄 License

This Font Software is licensed under the **SIL Open Font License, Version 1.1** (see [OFL.txt](./OFL.txt)).

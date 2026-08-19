# Lingkup — Executive Pitch Dashboard

A single-page executive dashboard built for **Lingkup**, a property management SaaS platform. It presents platform usage, tenant service (inquiry) analytics, and electricity token transaction data across multiple residential properties in one scrollable pitch-style page.

> **Note on data:** the numbers shown in this demo are **anonymized / dummy values**, scaled and randomized from the original internal dataset. Property names have also been replaced with fictional names. Layout, structure, and visual design reflect the real production dashboard.

## ✨ Features

- **Animated stat counters** and scroll-triggered fade-up transitions (`IntersectionObserver`)
- **Custom SVG data visualizations** — no chart library, hand-built line charts, bar distributions, and donut chart
- Responsive dark, glass-morphism UI with a noise-texture + grid-line background treatment
- Fully static — no build step, no framework, just HTML/CSS/JS

## 🛠 Tech Stack

- HTML5
- CSS3 (custom properties / variables, no framework)
- Vanilla JavaScript (`IntersectionObserver` API)
- [Google Fonts](https://fonts.google.com/) — Syne & DM Sans

## 📁 Project Structure

```
lingkup-executive-dashboard/
├── index.html              # Page structure & content
├── css/
│   ├── base.css             # Resets, CSS variables, typography, body background
│   ├── layout.css           # Nav, container, section-level layout
│   ├── components.css       # Cards, tables, charts, badges — reusable UI pieces
│   └── animations.css       # Keyframes & transition classes
├── js/
│   └── main.js               # Fade-up scroll animation + counter utility
├── README.md
└── LICENSE
```

## 🚀 Running Locally

No build tools required — it's a static site.

```bash
# Clone the repo
git clone https://github.com/<your-username>/lingkup-executive-dashboard.git
cd lingkup-executive-dashboard

# Open directly...
open index.html

# ...or serve it locally (recommended, avoids any file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📄 Sections

1. **Hero** — headline platform stats
2. **Platform at a Glance** — user base breakdown + peak traffic hour chart
3. **Inquiry Analytics** — tenant service request volume, payment nominal distribution, per-property completion table, monthly trend chart
4. **Token Listrik** — electricity token top-up transaction analytics
5. **Capabilities** — platform feature overview
6. **Business Value** — benefit-per-stakeholder table
7. **Proof Points** — summary KPIs
8. **Closing** — call to action

## 📝 License

MIT — see [LICENSE](./LICENSE).

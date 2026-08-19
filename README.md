# Lingkup — Executive Investor Dashboard

A data-driven executive dashboard built to demonstrate platform traction and operational health to **existing investors** of Lingkup, a property management SaaS platform. The goal: consolidate scattered operational data into a single, presentable narrative that shows the platform is actively used, growing, and worth continued investment.

> **Note on data:** the numbers shown in this demo are **anonymized / dummy values**, scaled from the original internal dataset. Property names have also been replaced with fictional names for public portfolio use. The structure, metrics, and narrative flow reflect the real investor-facing deliverable.

## 🎯 Purpose & My Role

This dashboard was built for an **investor retention deck** — the goal was to give existing investors clear, credible evidence that Lingkup remains a healthy, growing platform worth their continued backing.

**My role: Data Analyst.**

- Pulled and reconciled data across platform usage, tenant service (inquiry) activity, and electricity token transactions
- Decided which metrics would matter most to an investor audience (growth, adoption, completion rates, transaction volume) and how to sequence them into a persuasive narrative
- Structured the data into a presentation flow: platform overview → engagement → service performance → transaction volume → proof points
- Directed the frontend build (AI-assisted, using Claude) based on the data structure and story I designed

The frontend implementation (HTML/CSS/JS) was AI-assisted — I focused on the analysis, metric selection, and narrative structure; Claude handled the coding based on my data and direction.

## 📊 What the Dashboard Shows

1. **Hero** — headline traction numbers investors see first
2. **Platform at a Glance** — user base breakdown & engagement patterns (peak usage hours)
3. **Inquiry Analytics** — tenant service request volume, payment behavior, per-property performance, and growth trend over time
4. **Token Listrik** — electricity token transaction volume and value, showing consistent transactional activity
5. **Capabilities** — platform feature overview
6. **Business Value** — benefit breakdown per stakeholder (owner, developer, tenant)
7. **Proof Points** — summary KPIs that anchor the investment case
8. **Closing** — call to action

## 🛠 Tech Stack

- HTML5 / CSS3 (custom properties, no framework)
- Vanilla JavaScript (`IntersectionObserver` API)
- Custom-built SVG data visualizations (no charting library)
- [Google Fonts](https://fonts.google.com/) — Syne & DM Sans

## 📁 Project Structure

```
lingkup-executive-dashboard/
├── index.html
├── css/
│   ├── base.css          # Resets, CSS variables, typography, body background
│   ├── layout.css        # Nav, container, section-level layout
│   ├── components.css    # Cards, tables, charts, badges — reusable UI pieces
│   └── animations.css    # Keyframes & transition classes
├── js/
│   └── main.js            # Fade-up scroll animation + counter utility
├── README.md
└── LICENSE
```

## 🚀 Running Locally

No build tools required — it's a static site.

```bash
git clone https://github.com/reyhanarya20/lingkup-executive-dashboard.git
cd lingkup-executive-dashboard

# Open directly...
open index.html

# ...or serve locally (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📄 Live Demo

**[View the live dashboard →](https://reyhanarya20.github.io/lingkup-executive-dashboard/)**

## 📝 License

MIT — see [LICENSE](./LICENSE).

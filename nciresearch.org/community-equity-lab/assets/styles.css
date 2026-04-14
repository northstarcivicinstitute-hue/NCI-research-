/* ======================================================
   Community Equity Lab — Stylesheet
   Parent brand: NCI · Navy #1B2A4A · Gold #C5A55A
   ====================================================== */

@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,700;0,8..60,900;1,8..60,400&family=DM+Sans:ital,wght@0,400;0,500;0,700;0,800&display=swap');

:root {
  --navy: #1B2A4A;
  --navy-deep: #111D36;
  --navy-light: #243556;
  --gold: #C5A55A;
  --gold-soft: #D4BC80;
  --gold-pale: #F5EFE0;
  --gold-wash: #FBF8F1;
  --ink: #1A2235;
  --muted: #5E6A7A;
  --bg: #FAFAF8;
  --paper: #FFFFFF;
  --surface: #F4F3EF;
  --line: rgba(27,42,74,0.10);
  --line-strong: rgba(27,42,74,0.18);
  --shadow: 0 4px 24px rgba(27,42,74,0.06), 0 1px 3px rgba(27,42,74,0.04);
  --shadow-lg: 0 16px 48px rgba(27,42,74,0.10), 0 2px 8px rgba(27,42,74,0.04);
  --shadow-hover: 0 8px 32px rgba(27,42,74,0.10);
  --radius: 20px;
  --radius-sm: 14px;
  --max: 1200px;
  --font-display: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0; background: var(--bg); color: var(--ink);
  font-family: var(--font-body); font-size: 1rem; line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

/* ---- Top Bar ---- */
.top-bar {
  background: var(--navy-deep); color: rgba(255,255,255,0.7);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.top-bar .container {
  display: flex; justify-content: space-between; align-items: center;
  padding: .55rem 0; font-size: .82rem;
}
.topline-brand {
  font-family: var(--font-display); font-weight: 700;
  letter-spacing: .02em; color: rgba(255,255,255,.9);
}
.topline-pill {
  display: inline-flex; padding: .25rem .6rem; border-radius: 6px;
  background: rgba(197,165,90,0.12); color: var(--gold-soft);
  font-size: .78rem; font-weight: 700; letter-spacing: .02em;
}

/* ---- Header ---- */
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(250,250,248,.92); backdrop-filter: blur(20px) saturate(150%);
  border-bottom: 1px solid var(--line);
}
.nav-wrap {
  display: flex; justify-content: space-between; align-items: center;
  padding: .85rem 0; gap: 1rem;
}
.brand-lockup { display: inline-flex; align-items: center; gap: .7rem; }
.brand-lockup img { width: 46px; height: 46px; flex: 0 0 auto; }
.brand-copy small {
  display: block; color: var(--muted); font-size: .72rem;
  letter-spacing: .08em; text-transform: uppercase; font-weight: 500;
}
.brand-copy strong {
  display: block; font-family: var(--font-display); font-size: 1.05rem;
  line-height: 1.2; color: var(--navy); font-weight: 700;
}
.nav-links { display: flex; align-items: center; gap: .15rem; }
.nav-links a {
  padding: .55rem .8rem; border-radius: 10px; color: var(--muted);
  font-weight: 600; font-size: .9rem; transition: all .15s ease;
}
.nav-links a:hover { background: rgba(27,42,74,0.05); color: var(--navy); }
.nav-links a.active { color: var(--navy); background: rgba(27,42,74,0.06); }

/* ---- Layout ---- */
.container { width: min(calc(100% - 2.5rem), var(--max)); margin: 0 auto; }
.section { padding: 4.5rem 0; }
.surface-band {
  background: var(--gold-wash);
  border-top: 1px solid rgba(197,165,90,0.12);
  border-bottom: 1px solid rgba(197,165,90,0.12);
}

/* ---- Grids ---- */
.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 1.2rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1.2rem; }
.quote-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1.2rem; }
.note-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 2rem; align-items: center; }
.copy-grid { display: grid; gap: 1rem; }

/* ---- Typography ---- */
h1, h2, h3 { margin: 0; font-family: var(--font-display); letter-spacing: -.02em; }
h1 { font-size: clamp(2.2rem, 4.5vw, 3.8rem); line-height: 1.1; font-weight: 900; color: var(--navy); }
h2 { font-size: clamp(1.7rem, 3.5vw, 2.6rem); line-height: 1.14; color: var(--navy); }
h3 { font-size: 1.25rem; line-height: 1.25; color: var(--navy); font-weight: 700; }
.eyebrow, .kicker {
  display: inline-flex; align-items: center; gap: .4rem;
  font-size: .78rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; font-family: var(--font-body); color: var(--gold);
}
.lead { margin-top: .8rem; max-width: 60ch; color: var(--muted); font-size: 1.05rem; }

/* ---- Hero ---- */
.hero-home {
  background: linear-gradient(170deg, var(--navy-deep), var(--navy) 50%, var(--navy-light));
  color: #fff; padding: 4.5rem 0 4rem;
  position: relative; overflow: hidden;
}
.hero-home::before {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse at 80% 20%, rgba(197,165,90,0.12), transparent 50%),
    radial-gradient(ellipse at 20% 80%, rgba(197,165,90,0.06), transparent 40%);
  pointer-events: none;
}
.hero-grid {
  display: grid; grid-template-columns: 1.1fr .9fr; gap: 2.5rem;
  align-items: center; position: relative;
}
.hero-home h1 { color: #fff; }
.hero-home .lead { color: rgba(255,255,255,.78); }
.hero-home .eyebrow { color: var(--gold-soft); }
.hero-actions { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1.5rem; }

/* Logo stage */
.logo-stage {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: var(--radius); padding: 2rem;
  box-shadow: var(--shadow-lg); text-align: center;
}
.logo-stage img { margin: 0 auto; max-width: 320px; }
.logo-caption { margin-top: 1rem; }
.logo-caption span {
  display: block; font-size: .82rem; color: var(--muted);
}
.logo-caption span:first-child { font-weight: 700; color: var(--navy); }

/* ---- Page Head (inner pages) ---- */
.page-head {
  background: linear-gradient(170deg, var(--navy-deep), var(--navy));
  color: #fff; padding: 3.5rem 0 3rem;
  position: relative; overflow: hidden;
}
.page-head::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 75% 30%, rgba(197,165,90,0.1), transparent 50%);
  pointer-events: none;
}
.page-head .container { position: relative; }
.page-head h1 { color: #fff; max-width: 20ch; }
.page-head .eyebrow { color: var(--gold-soft); }
.page-head .lead { color: rgba(255,255,255,.75); }

/* ---- Section Head ---- */
.section-head {
  display: grid; grid-template-columns: 1.1fr .9fr; gap: 1.5rem;
  align-items: end; margin-bottom: 1.8rem;
}
.section-head p { color: var(--muted); }

/* ---- Buttons ---- */
.button {
  display: inline-flex; align-items: center; justify-content: center; gap: .4rem;
  padding: .75rem 1.2rem; border-radius: 10px; font-weight: 700; font-size: .9rem;
  border: 1px solid transparent; font-family: var(--font-body);
  transition: transform .12s ease, box-shadow .12s ease, background .15s ease;
}
.button:hover { transform: translateY(-1px); }
.button.primary {
  background: var(--gold); color: var(--navy-deep);
  box-shadow: 0 4px 16px rgba(197,165,90,.25);
}
.button.primary:hover { box-shadow: 0 8px 24px rgba(197,165,90,.35); }
.button.secondary {
  background: var(--surface); color: var(--navy);
  border-color: var(--line-strong);
}
.button.light {
  background: rgba(255,255,255,.1); color: #fff;
  border-color: rgba(255,255,255,.12);
}
.button.download { font-size: .82rem; padding: .55rem .9rem; }
.download-row { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .8rem; }

/* ---- Cards ---- */
.card, .surface-card {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: var(--radius-sm); box-shadow: var(--shadow);
  padding: 1.4rem; transition: box-shadow .2s ease;
}
.card:hover, .surface-card:hover { box-shadow: var(--shadow-hover); }
.card p, .surface-card p { color: var(--muted); margin-top: .5rem; }
.card h3 { margin-top: .4rem; }

/* Gold accent line on cards */
.card::before {
  content: ''; display: block; width: 28px; height: 3px;
  background: var(--gold); border-radius: 2px; margin-bottom: .7rem;
}

/* Architecture numbered cards */
.arch-card { position: relative; }
.arch-number {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: 8px;
  background: var(--gold-wash); color: var(--gold);
  font-family: var(--font-display); font-weight: 900; font-size: 1.1rem;
  border: 1px solid rgba(197,165,90,0.2);
  margin-bottom: .5rem;
}

/* ---- Quote Cards ---- */
.quote-card {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: var(--radius-sm); box-shadow: var(--shadow);
  padding: 1.4rem; transition: box-shadow .2s ease;
}
.quote-card:hover { box-shadow: var(--shadow-hover); }
.quote-card blockquote {
  margin: .7rem 0 0; padding: 0;
  font-family: var(--font-display); font-style: italic;
  font-size: 1.05rem; line-height: 1.6; color: var(--navy);
}
.quote-card cite {
  display: block; margin-top: .6rem; font-style: normal;
  font-size: .82rem; color: var(--muted);
}

/* ---- Copy Blocks ---- */
.copy-block {
  background: var(--paper); border: 1px solid var(--line);
  border-radius: var(--radius-sm); padding: 1.3rem;
  box-shadow: var(--shadow);
}
.copy-chip {
  display: inline-block; margin-bottom: .5rem;
}
.copy-text {
  font-family: var(--font-display); font-size: 1.1rem;
  line-height: 1.6; color: var(--navy); font-weight: 400;
}
.copy-text a { color: var(--gold); font-weight: 600; }
.small-print { font-size: .85rem; color: var(--muted); margin-top: .5rem; }

/* ---- Meta Chips ---- */
.mini-meta { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: .8rem; }
.meta-chip {
  display: inline-flex; padding: .3rem .6rem; border-radius: 7px;
  background: var(--gold-wash); color: var(--navy); font-size: .75rem; font-weight: 600;
  border: 1px solid rgba(197,165,90,0.18);
}

/* ---- Lists ---- */
.list-clean { margin: .7rem 0 0; padding-left: 1.1rem; color: var(--muted); }
.list-clean li + li { margin-top: .35rem; }

/* ---- Contact Cards ---- */
.contact-card {
  display: grid; gap: .8rem;
}
.contact-card a { color: var(--gold); font-weight: 600; }
.contact-card a:hover { color: var(--navy); }

/* ---- Inline Note ---- */
.inline-note {
  padding: 1.2rem 1.5rem; background: var(--paper);
  border: 1px solid var(--line); border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
}
.inline-note p { margin: 0; color: var(--muted); }
.inline-note strong { color: var(--navy); }
.inline-note a { color: var(--gold); font-weight: 600; }

/* ---- CTA Banner ---- */
.cta-banner {
  background: linear-gradient(160deg, var(--navy-deep), var(--navy-light));
  color: #fff; padding: 2.5rem; border-radius: var(--radius);
  border: 1px solid rgba(197,165,90,0.15);
  box-shadow: var(--shadow-lg); position: relative; overflow: hidden;
}
.cta-banner::before {
  content: ''; position: absolute; top: -40%; right: -20%;
  width: 60%; height: 160%;
  background: radial-gradient(ellipse, rgba(197,165,90,0.08), transparent 70%);
  pointer-events: none;
}
.cta-banner h2 { color: #fff; margin-top: .4rem; }
.cta-banner p { color: rgba(255,255,255,.72); }
.cta-banner .kicker { color: var(--gold-soft); }
.cta-banner .hero-actions { margin-top: 1rem; }

/* ---- Footer ---- */
.site-footer {
  background: var(--navy-deep); color: rgba(255,255,255,.72);
  padding: 2.8rem 0 1.5rem;
}
.footer-grid { display: grid; grid-template-columns: 1.3fr .7fr .7fr; gap: 1.5rem; }
.site-footer strong { color: #fff; font-family: var(--font-display); }
.site-footer a { color: rgba(255,255,255,.72); transition: color .15s; }
.site-footer a:hover { color: var(--gold-soft); }
.site-footer p { margin-top: .4rem; }

/* ---- Responsive ---- */
@media (max-width: 1000px) {
  .hero-grid, .section-head, .note-grid { grid-template-columns: 1fr; }
}
@media (max-width: 840px) {
  .grid-3, .quote-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .grid-2, .footer-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .top-bar .container { flex-direction: column; align-items: flex-start; gap: .3rem; }
}
@media (max-width: 640px) {
  .section { padding: 3.5rem 0; }
  .grid-3, .quote-grid { grid-template-columns: 1fr; }
  .container { width: min(calc(100% - 1.25rem), var(--max)); }
  .hero-home, .page-head { padding: 3rem 0 2.5rem; }
  .logo-stage { padding: 1.2rem; }
  .cta-banner { padding: 1.5rem; }
}

/* ---- Mobile Nav Toggle ---- */
.nav-toggle {
  display: none; appearance: none; border: 1px solid var(--line); background: var(--paper);
  border-radius: 10px; padding: 11px; box-shadow: var(--shadow); cursor: pointer;
}
.nav-toggle span { display: block; width: 20px; height: 2px; background: var(--navy); border-radius: 2px; }
.nav-toggle span + span { margin-top: 4px; }
.sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); border: 0;
}

@media (max-width: 840px) {
  .nav-toggle { display: inline-flex; flex-direction: column; justify-content: center; }
  .nav-links {
    position: absolute; left: 1rem; right: 1rem; top: calc(100% + .4rem);
    background: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm);
    padding: .6rem; box-shadow: var(--shadow-lg);
    display: none; flex-direction: column; align-items: stretch;
  }
  .nav-links.is-open { display: flex; }
  .nav-links a { width: 100%; padding: .7rem .9rem; }
}

/* ---- Animations ---- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-home .eyebrow,
.hero-home h1,
.hero-home .lead,
.hero-home .hero-actions,
.page-head .eyebrow,
.page-head h1,
.page-head .lead {
  animation: fadeUp .5s ease both;
}
.hero-home h1, .page-head h1 { animation-delay: .08s; }
.hero-home .lead, .page-head .lead { animation-delay: .16s; }
.hero-home .hero-actions { animation-delay: .24s; }
.logo-stage { animation: fadeUp .6s ease .2s both; }

/* ---- Print Styles ---- */
@media print {
  .site-header, .top-bar, .nav-toggle, .nav-links,
  .site-footer, .cta-banner, .hero-actions, .button { display: none !important; }
  body { background: #fff; color: #000; font-size: 11pt; }
  .hero-home, .page-head { background: none !important; color: #000 !important; padding: 1rem 0; }
  .hero-home h1, .page-head h1, .hero-home .eyebrow, .page-head .eyebrow,
  .hero-home .lead, .page-head .lead { color: #000 !important; }
  .container { width: 100%; max-width: none; }
  .card, .surface-card, .quote-card { box-shadow: none; border: 1px solid #ccc; break-inside: avoid; }
  .card::before { display: none; }
  .grid-2, .grid-3 { grid-template-columns: 1fr 1fr; }
  a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em; color: #666; }
  a.button::after { content: none; }
}

:root {
  --bg: #07131e;
  --bg-soft: #0f1e2b;
  --surface: rgba(12, 21, 31, 0.8);
  --surface-strong: rgba(16, 29, 40, 0.94);
  --primary: #5eead4;
  --primary-2: #7aa9ff;
  --text: #ecf7ff;
  --muted: #b7c9d8;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 24px 70px rgba(7, 16, 24, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(94, 234, 212, 0.12), transparent 32%),
    radial-gradient(circle at top right, rgba(122, 169, 255, 0.14), transparent 35%),
    linear-gradient(180deg, #06111b 0%, #0a1725 100%);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

.page-glow {
  position: fixed;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.35;
  pointer-events: none;
  z-index: -1;
}

.glow-one {
  background: rgba(94, 234, 212, 0.18);
  top: 5%;
  left: 4%;
}

.glow-two {
  background: rgba(122, 169, 255, 0.15);
  right: 6%;
  bottom: 12%;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 6rem 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  color: var(--primary);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.9rem;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
  margin-bottom: 1rem;
}

h1 span {
  color: var(--primary);
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 0;
}

h3 {
  font-size: 1.2rem;
}

p {
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(16px);
  background: rgba(7, 17, 27, 0.68);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #071822;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(94, 234, 212, 0.25);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-links a {
  position: relative;
  transition: color 0.25s ease;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
  transition: transform 0.3s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

.hero {
  padding: 5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.95fr;
  gap: 2.2rem;
  align-items: center;
}

.tagline,
.lead {
  max-width: 700px;
}

.tagline {
  font-size: 1.05rem;
  color: var(--text);
  margin-bottom: 1.1rem;
  font-weight: 600;
}

.lead {
  font-size: 1.04rem;
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #06131d;
  box-shadow: 0 20px 40px rgba(94, 234, 212, 0.22);
}

.button.secondary {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  color: var(--text);
}

.mini-stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.mini-stats li {
  background: rgba(10, 19, 28, 0.7);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1rem;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

.mini-stats strong {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1.35rem;
  color: var(--text);
}

.mini-stats span {
  font-size: 0.82rem;
  color: var(--muted);
}

.profile-card {
  background: linear-gradient(180deg, rgba(17, 27, 36, 0.9), rgba(8, 16, 24, 0.96));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 1.4rem;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.profile-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(94, 234, 212, 0.12), transparent 45%, rgba(122, 169, 255, 0.12));
  pointer-events: none;
}

.profile-card > * {
  position: relative;
  z-index: 1;
}

.profile-badge {
  display: inline-flex;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(94, 234, 212, 0.1);
  color: var(--primary);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.avatar-wrap {
  display: flex;
  justify-content: center;
  margin: 1.6rem 0;
}

.avatar {
  width: 185px;
  height: 185px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  color: #071822;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 18px 45px rgba(94, 234, 212, 0.28);
}

.contact-list {
  display: grid;
  gap: 1rem;
}

.contact-list div {
  padding-top: 0.8rem;
  border-top: 1px solid var(--line);
}

.contact-list span,
.label {
  display: block;
  font-size: 0.73rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.22rem;
}

.contact-list a,
.contact-list p,
.info-item strong,
.reference-card a,
.reference-card p,
.edu-item p,
.project-card p,
.certificate-card p,
.timeline-content li {
  color: var(--text);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 2rem;
  align-items: start;
}

.about-copy,
.info-panel,
.timeline-content,
.project-card,
.certificate-card,
.reference-card,
.edu-item {
  background: rgba(10, 18, 29, 0.7);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.025);
}

.about-copy {
  padding: 1.7rem;
}

.info-panel {
  padding: 1.2rem;
  display: grid;
  gap: 1rem;
}

.info-item {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid var(--line);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem 0.9rem;
  text-align: center;
  font-weight: 600;
  color: var(--text);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.skill-box:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 234, 212, 0.5);
}

.timeline {
  display: grid;
  gap: 1.5rem;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 1rem;
}

.timeline-dot {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: 0.7rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 0 0 8px rgba(94, 234, 212, 0.08);
}

.timeline-content {
  padding: 1.5rem;
}

.date {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.timeline-content ul,
.project-card ul {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.projects-grid,
.certificate-grid,
.reference-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.project-card,
.certificate-card,
.reference-card {
  padding: 1.4rem;
}

.project-badge,
.cert-type {
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(122, 169, 255, 0.08);
  color: #b9d1ff;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.project-card h3,
.certificate-card h3,
.reference-card h3,
.edu-item h3 {
  margin-top: 1rem;
}

.education-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 2rem;
  align-items: start;
}

.education-list {
  display: grid;
  gap: 1rem;
}

.edu-item {
  padding: 1.2rem 1.3rem;
}

.reference-card {
  display: grid;
  gap: 0.5rem;
}

.site-footer {
  background: rgba(4, 9, 15, 0.9);
  border-top: 1px solid var(--line);
  padding: 3rem 0 1.4rem;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: var(--muted);
  text-align: right;
}

.copyright {
  text-align: center;
  margin-top: 2.2rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.dark {
  color: var(--text);
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero-grid,
  .about-grid,
  .education-grid,
  .projects-grid,
  .certificate-grid,
  .reference-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .footer-grid {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links {
    text-align: left;
  }
}

@media (max-width: 560px) {
  .mini-stats {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }

  .section {
    padding: 4.8rem 0;
  }
}


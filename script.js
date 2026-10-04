:root {
  --bg: #081120;
  --bg-soft: #0d1b2a;
  --surface: #101f30;
  --surface-strong: #14273e;
  --panel: rgba(19, 31, 46, 0.8);
  --primary: #55d6c2;
  --primary-2: #69a8ff;
  --text: #ebf5ff;
  --muted: #b7c7d8;
  --line: rgba(255, 255, 255, 0.09);
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #06101d 0%, #0b1627 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 6rem 0;
}

.alt-bg {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 2.5rem;
}

.eyebrow {
  color: var(--primary);
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.dark {
  color: #dbe9ff;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
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
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(7, 16, 27, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #071522;
  font-weight: 800;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  color: var(--muted);
  font-size: 0.95rem;
}

.nav-links a {
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
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

.eyebrow,
.tagline,
.lead {
  max-width: 680px;
}

.tagline {
  font-size: 1.05rem;
  color: var(--text);
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.lead {
  font-size: 1.04rem;
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #06121c;
  box-shadow: var(--shadow);
}

.button.secondary {
  border: 1px solid var(--line);
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
}

.mini-stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.mini-stats li {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem;
}

.mini-stats strong {
  display: block;
  font-size: 1.3rem;
  margin-bottom: 0.35rem;
  color: var(--text);
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.profile-card {
  background: linear-gradient(180deg, rgba(18, 31, 46, 0.9), rgba(13, 21, 31, 0.95));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 1.4rem;
  box-shadow: var(--shadow);
}

.profile-badge {
  display: inline-flex;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(85, 214, 194, 0.1);
  color: var(--primary);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.avatar-wrap {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.avatar {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(85, 214, 194, 0.92), rgba(105, 168, 255, 0.72));
  color: #081120;
  font-weight: 800;
  font-size: 3rem;
  box-shadow: 0 18px 35px rgba(14, 132, 111, 0.38);
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
  font-size: 0.74rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
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

.about-copy {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.6rem;
}

.info-panel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 1.2rem;
  display: grid;
  gap: 1rem;
}

.info-item {
  padding: 1rem;
  border-radius: 14px;
  background: rgba(10, 18, 30, 0.75);
  border: 1px solid var(--line);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.skill-box {
  background: rgba(17, 27, 38, 0.9);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1rem 0.9rem;
  text-align: center;
  font-weight: 600;
  color: var(--text);
}

.timeline {
  display: grid;
  gap: 1.5rem;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 1rem;
  padding-left: 0.25rem;
}

.timeline-dot {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  box-shadow: 0 0 0 6px rgba(85, 214, 194, 0.1);
  margin-top: 0.5rem;
}

.timeline-content {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.5rem;
}

.date {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 700;
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.4rem;
}

.project-badge,
.cert-type {
  display: inline-flex;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(105, 168, 255, 0.08);
  color: var(--primary-2);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.project-card h3,
.certificate-card h3,
.reference-card h3 {
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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.2rem 1.3rem;
}

.reference-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.reference-card {
  display: grid;
  gap: 0.5rem;
}

.site-footer {
  background: #040b14;
  border-top: 1px solid var(--line);
  padding: 3rem 0 1.4rem;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
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
  margin-top: 2rem;
  color: var(--muted);
  font-size: 0.88rem;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
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

  .section {
    padding: 4.5rem 0;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }
}


import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";

const navigation = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "Projects", href: "#projects", icon: "projects" },
  { label: "Experience", href: "#experience", icon: "experience" },
  { label: "About", href: "#about", icon: "about" },
  { label: "Contact", href: "#contact", icon: "contact" },
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    home: "M3 10.5 12 3l9 7.5M5.5 9.5V21h13V9.5M9 21v-7h6v7",
    projects: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    experience: "M3 7h18M5 7V4h14v3M5 7v13h14V7M9 11h6M9 15h6",
    about: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
    notes: "M5 3h11l4 4v14H5zM16 3v5h4M8 12h8M8 16h8",
    contact: "M3 5h18v14H3zM3 6l9 7 9-7",
    collapse: "M15 18l-6-6 6-6",
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "M6 6l12 12M18 6 6 18",
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name] ?? paths.home} />
    </svg>
  );
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || !mainRef.current) return;

    const main = mainRef.current;
    const revealItems = main.querySelectorAll<HTMLElement>("[data-reveal]");
    if (revealItems.length === 0) return;

    main.dataset.revealReady = "true";

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.revealVisible);
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      delete main.dataset.revealReady;
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.4, 0.7] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className={styles.appShell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <button
        className={styles.mobileMenu}
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <Icon name={mobileOpen ? "close" : "menu"} />
      </button>
      {mobileOpen && <button className={styles.scrim} type="button" aria-label="Close navigation" onClick={closeMobile} />}

      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ""} ${mobileOpen ? styles.sidebarOpen : ""}`}>
        <a className={styles.brand} href="#home" onClick={() => { setActive("#home"); closeMobile(); }}>
          <span className={styles.brandMark}>I.</span>
          <span className={styles.brandText}>IMAN<small>SOFTWARE ENGINEERING</small></span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? styles.navActive : ""}
              aria-current={active === item.href ? "location" : undefined}
              title={collapsed ? item.label : undefined}
              onClick={() => { setActive(item.href); closeMobile(); }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className={styles.sidebarFoot}>
          <span>PERSONAL ENGINEERING JOURNAL</span>
          <span>INDEPENDENT PRACTICE</span>
        </div>
        <button className={styles.collapseButton} type="button" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} aria-expanded={!collapsed}>
          <Icon name="collapse" />
          <span>{collapsed ? "Expand" : "Collapse"}</span>
        </button>
      </aside>

      <main id="main" ref={mainRef} className={styles.mainContent}>
        <section id="home" className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>PERSONAL ENGINEERING JOURNAL</p>
            <h1>I’m Iman.<br /><em>A software engineer.</em></h1>
            <p className={styles.heroIntro}>
              I build and maintain backend systems, business applications, and practical tools with a focus on reliable, maintainable solutions.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
              <a className={styles.secondaryAction} href="#about">About me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <img src="/images/steampunk-skull.png" alt="" />
            <span>ENGINEERING<br />IN PRACTICE</span>
          </div>
          <div className={styles.focusStrip}>
            <span>BACKEND SYSTEMS</span><span>API &amp; INTEGRATION</span><span>PRACTICAL TOOLS</span>
          </div>
        </section>

        <section id="projects" className={styles.workSection} data-reveal>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>01 / SELECTED WORK</p><h2>Built with purpose.</h2></div>
            <span className={styles.sectionMeta}>PERSONAL PROJECT</span>
          </div>
          <article className={styles.projectFeature}>
            <a className={styles.projectImage} href="https://qraft-9y9.pages.dev/" target="_blank" rel="noreferrer" aria-label="Visit Qraft">
              <img src="/images/portofolio-qraft.png" alt="Qraft application interface showing its QR code and vCard tools" loading="lazy" />
            </a>
            <div className={styles.projectInfo}>
              <p className={styles.eyebrow}>PERSONAL PRODUCT · RELEASED 2026</p>
              <h3>Qraft</h3>
              <p>A local-first digital toolbox with nine browser-based tools for QR codes, contact cards, developer utilities, and everyday text tasks.</p>
              <div className={styles.tags}><span>TypeScript</span><span>HTML &amp; CSS</span><span>Vite</span></div>
              <div className={styles.projectLinks}>
                <a href="https://qraft-9y9.pages.dev/" target="_blank" rel="noreferrer">Visit product ↗</a>
                <a href="https://github.com/imandodo01/Qraft" target="_blank" rel="noreferrer">Repository ↗</a>
              </div>
            </div>
          </article>
        </section>

        <div className={styles.overviewGrid}>
          <article id="experience" className={styles.overviewPanel} data-reveal>
            <p className={styles.eyebrow}>02 / EXPERIENCE</p>
            <h2>Engineering at work.</h2>
            <p>Backend development across business systems, REST APIs, and web/mobile application workflows.</p>
            <div className={styles.toolkit}>
              <h3>TECHNICAL TOOLKIT</h3>
              <dl>
                <div><dt>Backend</dt><dd>PHP · Laravel · Node.js</dd></div>
                <div><dt>Frontend</dt><dd>JavaScript · TypeScript · React · React Native</dd></div>
                <div><dt>Data</dt><dd>MySQL · SQL Server</dd></div>
                <div><dt>Integration</dt><dd>REST APIs</dd></div>
              </dl>
            </div>
            <a href="#about">How I approach engineering ↗</a>
          </article>
        </div>

        <section id="about" className={styles.aboutSection} data-reveal>
          <header className={styles.aboutHeader}>
            <p className={styles.eyebrow}>03 / ABOUT</p>
            <h2 className={styles.aboutStatement}>Build practical things. Keep them simple. <em>Make everyday work better.</em></h2>
          </header>
          <div className={styles.aboutDetails}>
            <article className={styles.aboutItem}>
              <p className={styles.eyebrow}>01 / HOW I THINK</p>
              <p>I approach software engineering with a focus on simplicity, maintainability, and practical solutions. I prefer breaking complex problems into smaller, understandable pieces, making solutions easier to work with and maintain over time.</p>
            </article>
            <article className={styles.aboutItem}>
              <p className={styles.eyebrow}>02 / WHAT I BUILD</p>
              <p>My work spans backend systems, REST APIs, web and mobile applications, as well as debugging and maintaining existing software.</p>
            </article>
            <article className={styles.aboutItem}>
              <p className={styles.eyebrow}>03 / WHAT DRIVES ME</p>
              <p>I enjoy building software that removes everyday friction, improves quality of life, and makes repetitive or inconvenient tasks easier to handle. Beyond professional work, I build independent tools and hope to explore game development in the future.</p>
            </article>
          </div>
        </section>

        <section id="contact" className={styles.contactSection} data-reveal>
          <div>
            <p className={styles.eyebrow}>04 / CONTACT</p>
            <h2>Have something worth building?</h2>
            <p className={styles.contactCopy}>For conversations about software, engineering, or potential opportunities, feel free to reach out.</p>
          </div>
          <div className={styles.contactLinks}>
            <a href="mailto:iman.dodo01@gmail.com">iman.dodo01@gmail.com <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/iman-sujatmiko/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <footer className={styles.footer}>
          <a className={styles.footerBrand} href="#home">IMAN<span> / SOFTWARE ENGINEERING</span></a>
          <div className={styles.footerLinks}>
            <a href="mailto:iman.dodo01@gmail.com">EMAIL</a>
            <a href="https://www.linkedin.com/in/iman-sujatmiko/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
          <span>© 2026</span>
        </footer>
      </main>
    </div>
  );
}

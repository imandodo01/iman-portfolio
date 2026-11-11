import styles from "./App.module.css";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Notes", href: "#notes" },
];

export default function App() {
  return (
    <div className={styles.siteShell}>
      <a className={styles.skipLink} href="#main">Skip to content</a>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#home" aria-label="Iman, home">
          <span className={styles.wordmarkMark}>I.</span>
          <span>IMAN</span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <span className={styles.headerMeta}>SOFTWARE ENGINEERING</span>
      </header>

      <main id="main">
        <section className={styles.hero} id="home" aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> Independent practice / 2026</p>
            <h1 id="hero-title">Building software<br /><em>with intent.</em></h1>
            <p className={styles.heroIntro}>
              I’m Iman — a software engineer focused on backend systems,
              practical tools, and thoughtful digital experiences.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryLink} href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
              <a className={styles.secondaryLink} href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className={styles.heroAside} aria-hidden="true">
            <img className={styles.heroWatermark} src="/images/steampunk-skull.png" alt="" />
          </div>
          <div className={styles.heroFoot}>
            <span>PERSONAL ENGINEERING JOURNAL</span>
            <span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span>
          </div>
        </section>

        <section className={styles.section} id="about" aria-labelledby="about-title">
          <div className={styles.sectionIndex}>01 / ABOUT</div>
          <div className={styles.sectionBody}>
            <p className={styles.eyebrow}>The person behind the work</p>
            <h2 id="about-title">Curiosity is useful.<br /><em>Clarity is essential.</em></h2>
            <div className={styles.twoColumn}>
              <p className={styles.lead}>
                I enjoy understanding how things work, finding the real problem,
                and building software that makes everyday work more reliable.
              </p>
              <p className={styles.bodyCopy}>
                My work has centered on backend development, APIs, business
                applications, and the connections between systems. I value
                maintainable solutions, clear trade-offs, and steady improvement
                over unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="experience" aria-labelledby="experience-title">
          <div className={styles.sectionIndex}>02 / EXPERIENCE</div>
          <div className={styles.sectionBody}>
            <p className={styles.eyebrow}>Where I apply the craft</p>
            <h2 id="experience-title">Engineering in<br /><em>the real world.</em></h2>
            <div className={styles.experienceRow}>
              <div>
                <span className={styles.metaLabel}>CURRENT FOCUS</span>
                <h3>Backend Development</h3>
              </div>
              <p className={styles.bodyCopy}>
                Building and maintaining business systems, REST APIs, and
                web/mobile application workflows. Specific roles, dates, and
                project contributions will be documented with their proper context.
              </p>
              <span className={styles.rowNumber}>01</span>
            </div>
          </div>
        </section>

        <section className={styles.section} id="projects" aria-labelledby="projects-title">
          <div className={styles.sectionIndex}>03 / SELECTED WORK</div>
          <div className={styles.sectionBody}>
            <p className={styles.eyebrow}>A few things made with purpose</p>
            <h2 id="projects-title">Small ideas.<br /><em>Useful outcomes.</em></h2>
            <article className={styles.projectCard}>
              <div className={styles.projectVisual}>
                <img
                  className={styles.projectScreenshot}
                  src="/images/portofolio-qraft.png"
                  alt="Qraft application interface showing its QR code and vCard tools"
                  loading="lazy"
                />
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.projectMeta}>
                  <span>01 — PERSONAL PRODUCT</span>
                  <span>RELEASED · 2026</span>
                </div>
                <h3>Qraft</h3>
                <p className={styles.bodyCopy}>
                  A lightweight web tool for creating QR codes and vCard contact
                  files. Built as an independent product, with a focus on a
                  straightforward workflow and practical output.
                </p>
                <div className={styles.tags}><span>React</span><span>TypeScript</span><span>Vite</span></div>
                <a className={styles.textLink} href="https://github.com/imandodo01/Qraft" target="_blank" rel="noreferrer">
                  View repository <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.section} id="notes" aria-labelledby="notes-title">
          <div className={styles.sectionIndex}>04 / ENGINEERING NOTES</div>
          <div className={styles.sectionBody}>
            <p className={styles.eyebrow}>Thinking out loud, carefully</p>
            <h2 id="notes-title">Notes from<br /><em>the workbench.</em></h2>
            <p className={styles.lead}>
              A place for technical lessons, implementation notes, and ideas
              worth revisiting. Published writing will appear here as it is ready.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#home"><span className={styles.wordmarkMark}>I.</span><span>IMAN</span></a>
        <p>Independent Software Engineering Portfolio</p>
        <a className={styles.backToTop} href="#home">BACK TO TOP ↑</a>
        <span className={styles.footerYear}>© 2026</span>
      </footer>
    </div>
  );
}

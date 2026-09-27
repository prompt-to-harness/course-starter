import { site, type Project } from './content/site'

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className="card-topline">
        <span>{project.label}</span>
        {project.href ? <ArrowIcon /> : <span className="card-status">In progress</span>}
      </div>
      <div className="card-art" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </>
  )

  return project.href ? (
    <a className={`project-card is-link card-${index + 1}`} href={project.href}>
      {content}
    </a>
  ) : (
    <article className={`project-card card-${index + 1}`}>
      {content}
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">✳</span>
          <span>{site.name}</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a className="nav-pill" href="#contact">Say hello <ArrowIcon /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />{site.eyebrow}</p>
            <h1 id="hero-title">{site.headline.lead}<br /><span className="accent">{site.headline.accent}</span></h1>
            <p className="hero-intro">{site.intro}</p>
            <a className="text-link" href="#projects">Explore the work <ArrowIcon /></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="sun" />
            <span className="art-note note-one">stay curious</span>
            <span className="art-note note-two">make it useful</span>
          </div>
        </section>

        <section className="meta-row" id="about" aria-label="About this project">
          <p><span className="meta-label">Based in</span>{site.location}</p>
          <p><span className="meta-label">Currently</span>{site.availability}</p>
          <p><span className="meta-label">Built with</span>{site.builtWith}</p>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Selected experiments</p>
            <h2 id="projects-title">Things I&apos;ve been<br /><span className="accent">thinking through.</span></h2>
          </div>
          <div className="project-grid">
            {site.projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Have a question?</p>
          <h2 id="contact-title">Let&apos;s make<br /><span className="accent">something clear.</span></h2>
          <a className="contact-link" href={`mailto:${site.contactEmail}`}>{site.contactEmail} <ArrowIcon /></a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.footerNote}</span>
      </footer>
    </div>
  )
}

export default App

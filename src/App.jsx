import { useState } from 'react'
import heroIllustration from './assets/hero-illustration.png'
import { uxuiProjects, graphicProjects } from './data.js'
import './App.css'

function LanguageSwitch() {
  // EN is the main language. SV texts are not added yet, so the switch
  // only changes its own state for now.
  const [lang, setLang] = useState('en')

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {['en', 'sv'].map((code) => (
        <button
          key={code}
          type="button"
          className="lang-switch__option"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          Viktoria Lorang
        </a>
        <nav className="nav__menu" aria-label="Main">
          <a href="#top" className="nav__link" aria-current="page">
            Home
          </a>
          <a href="#work" className="nav__link">
            Work
          </a>
          <a href="#contact" className="nav__link">
            Contact me
          </a>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">UX/UI designer · Graphic designer</p>
          <h1 className="hero__headline">
            I start with the user’s problem and end with an interface that{' '}
            <em className="hero__accent">explains</em> itself.
          </h1>
          <p className="hero__subline">
            Eight years in visual communication, now designing digital
            products.
          </p>
          <div className="hero__actions">
            <a href="#work" className="button-primary">
              View my work <span aria-hidden="true">→</span>
            </a>
            {/* TODO: point to the CV file once it is added to /public */}
            <a href="#contact" className="text-link">
              Download CV <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <img
          className="hero__illustration"
          src={heroIllustration}
          width="300"
          height="380"
          alt=""
        />
      </div>
    </section>
  )
}

function ProjectCard({ tags, title, text, preview }) {
  return (
    <article className="card">
      <div className="card__preview" style={{ background: preview }} />
      <div className="card__body">
        <p className="card__tags">{tags}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
    </article>
  )
}

function ProjectSection({ id, className, title, linkLabel, projects }) {
  return (
    <section id={id} className={`projects ${className}`}>
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">{title}</h2>
          <a href="#work" className="text-link">
            {linkLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div id="top" className="page">
      <Nav />
      <main>
        <Hero />
        <ProjectSection
          id="work"
          className="projects--uxui"
          title="Selected UX/UI work"
          linkLabel="All work"
          projects={uxuiProjects}
        />
        <ProjectSection
          id="graphic-design"
          className="projects--graphic"
          title="Graphic design"
          linkLabel="All graphic design"
          projects={graphicProjects}
        />
      </main>
    </div>
  )
}

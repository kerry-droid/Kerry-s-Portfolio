import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const sectionMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
  variants: fadeUp,
}
const skillGroups = [
  ['01', 'Frontend', 'Building responsive, accessible interfaces and useful product experiences.', ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'JSX', 'React Router', 'Vite']],
  ['02', 'Backend', 'Creating application logic, authentication and service integrations.', ['Python', 'Flask', 'REST APIs', 'JSON', 'Authentication', 'Authorization']],
  ['03', 'Databases', 'Designing and working with relational data stores.', ['SQL', 'SQLite', 'PostgreSQL', 'json-server']],
  ['04', 'Tools & testing', 'Keeping projects organized and shipping changes with confidence.', ['Git', 'GitHub', 'npm', 'Node.js', 'Netlify', 'Render', 'VS Code', 'Linux', 'Pytest', 'Mocha', 'Chai', 'TDD']],
]
const projects = [
  { num: '02', category: 'PROPERTY MANAGEMENT', title: 'Property Management System', text: 'A platform for managing properties, tenants, rent and payments.', tools: ['React', 'Flask', 'PostgreSQL'], art: 'property-art', kind: 'property', githubUrl: 'https://github.com/calvinwainaina-07/kejahunt' },
  { num: '03', category: 'AI / AUTOMATION', title: 'Formmate A.I', text: 'Helps users understand questions and prepare accurate answers for online forms.', tools: ['Python', 'AI', 'Automation'], art: 'form-art', kind: 'form', githubUrl: 'https://github.com/kerry-droid/formmate-AI' },
]
const services = [
  ['01', 'Frontend', <>Responsive React interfaces<br />Dashboards &amp; UI components<br />Accessible web experiences</>],
  ['02', 'Backend', <>REST APIs with Flask<br />Authentication &amp; integrations<br />Application business logic</>],
  ['03', 'Databases', <>PostgreSQL &amp; SQLite<br />Data modeling<br />SQLAlchemy applications</>],
  ['04', 'Problem solving', <>Workflow automation<br />Practical product thinking<br />Connecting systems with APIs</>],
]

function SectionLabel({ children }) { return <div className="section-label"><span>{children}</span><i /></div> }
function Chips({ items, className = '' }) { return <div className={`chips ${className}`}>{items.map((item) => <span key={item}>{item}</span>)}</div> }

function ContactIcon({ kind }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2Z" />,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7S17.6.9 15 2.8a13.5 13.5 0 0 0-7 0C5.4.9 3.2 1.2 3.2 1.2a4.9 4.9 0 0 0-.1 3.7A5.3 5.3 0 0 0 1.7 8.6c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 7 18.1V22" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.4 2.2 2.3 4.1 4.5 4.5l1-1 2 .8c-.2 1.3-1.2 2.2-2.5 2-3.9-.7-6.7-3.5-7.4-7.4-.2-1.3.7-2.3 2-2.5l.8 2Z" /></>,
  }
  return <svg className={`contact-icon contact-icon-${kind}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>
}

function Terminal() {
  return <motion.div className="terminal" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .15 }} aria-label="Developer terminal illustration">
    <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>kerry@developer: ~/projects</span><span className="terminal-menu">•••</span></div>
    <div className="terminal-body"><p><span className="prompt">$</span> npm run dev</p><p className="terminal-muted">Starting development server...</p><p className="ok">✓ <span>Server running</span></p><p className="ok">✓ <span>Database connected</span></p><p className="ok">✓ <span>Application ready</span></p><div className="terminal-rule" /><p className="terminal-stack">React <b>•</b> Flask <b>•</b> PostgreSQL</p><p className="cursor-line"><span className="prompt">$</span> <i /></p></div><span className="terminal-glow" />
  </motion.div>
}

function SokoPreview() {
  return <div className="project-art soko-art"><div className="art-grid" /><div className="app-window"><div className="app-bar"><b>SC</b><span>SokoCredit</span><i>•••</i></div><div className="app-content"><small>OVERVIEW / THIS MONTH</small><h3>Good morning, Alex</h3><div className="metric-row"><div><small>ACTIVE LOANS</small><b>128</b><span>↗ 12.8%</span></div><div><small>COLLECTED</small><b>KSh 842k</b><span>↗ 8.2%</span></div></div><div className="chart"><div className="chart-lines" /><svg viewBox="0 0 500 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80 C35 75 37 48 78 61 S126 72 165 44 S222 56 250 34 S307 43 345 20 S407 42 440 15 S480 30 500 7" /></svg><div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div><div className="app-footer"><span>RECENT ACTIVITY</span><span>View all →</span></div></div></div><div className="art-caption">PRODUCT PREVIEW <span>01 / 04</span></div></div>
}

function ProjectArt({ kind, art }) {
  return <div className={`mini-art ${art}`}>
    {kind === 'property' && <><div className="mini-top">PROPERTY / OVERVIEW <span>•••</span></div><div className="property-stats"><b>Properties <strong>24</strong></b><b>Occupancy <strong>92%</strong></b></div><div className="building-row"><i /><i /><i /><i /><i /><i /><i /></div></>}
    {kind === 'form' && <><div className="form-badge">FORM<span>+</span></div><div className="form-lines"><i /><i /><i /><b>✦ Suggested answer</b><i /></div><div className="form-orb">✳</div></>}
  </div>
}

function ResumePreview({ onClose }) {
  const [zoom, setZoom] = useState(56)
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('resume-preview-open')
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('resume-preview-open') }
  }, [onClose])
  const download = () => window.print()
  return <div className="resume-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="pdf-viewer" role="dialog" aria-modal="true" aria-label="Resume preview">
      <div className="pdf-toolbar">
        <button aria-label="Toggle page thumbnails" title="Page thumbnails" className="pdf-menu">☰</button>
        <strong className="pdf-filename">Kerry_Opiyo_Resume.pdf</strong>
        <span className="pdf-page-count">1 <i>/</i> 1</span>
        <span className="pdf-divider" />
        <button aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(35, value - 10))}>−</button>
        <span className="pdf-zoom">{zoom}%</span>
        <button aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(100, value + 10))}>＋</button>
        <span className="pdf-divider" />
        <button title="Fit page" aria-label="Fit page" onClick={() => setZoom(56)}>▣</button>
        <button title="Download resume" aria-label="Download resume" onClick={download}>↓</button>
        <button title="Print resume" aria-label="Print resume" onClick={download}>▤</button>
        <button className="pdf-close" aria-label="Close resume preview" onClick={onClose}>×</button>
      </div>
      <div className="pdf-workspace">
        <aside className="pdf-thumbnails"><button className="pdf-thumbnail" aria-label="Page 1"><ResumePage compact /><span>1</span></button></aside>
        <div className="pdf-canvas"><div className="pdf-page-wrap" style={{ width: `${Math.min(100, zoom / 56 * 100)}%` }}><ResumePage /></div></div>
      </div>
    </section>
  </div>
}

function ResumePage({ compact = false }) {
  return <article className={`resume-paper ${compact ? 'resume-paper-small' : ''}`}>
    <header><h2>KERRY OPIYO</h2><strong>JUNIOR SOFTWARE DEVELOPER | FULL-STACK WEB DEVELOPER</strong><p>Nairobi, Kenya&nbsp; | &nbsp;0725 041 243&nbsp; | &nbsp;kerryopiyo6@gmail.com</p><p>github.com/kerry-droid&nbsp; | &nbsp;instagram.com/void_kerry</p></header>
    <section><h3>PROFESSIONAL SUMMARY</h3><p>Motivated junior software developer trained in practical full-stack web development. Experienced in building responsive applications, REST APIs and database-driven products, with a focus on reliable, user-friendly software.</p></section>
    <section><h3>CORE TECHNICAL SKILLS</h3><p><b>Frontend:</b> HTML, CSS, JavaScript, React, Tailwind CSS, React Router<br/><b>Backend:</b> Python, Flask, REST APIs, authentication and authorization<br/><b>Data:</b> SQL, PostgreSQL, SQLite, SQLAlchemy, json-server<br/><b>Tools:</b> Git, GitHub, Vite, npm, Linux, Pytest, Mocha, Chai</p></section>
    <section><h3>SELECTED PROJECTS</h3>
      <h4>Movie Hub | React Web Application</h4><p>Built a movie discovery application with TMDB API integration, reusable React components, search, browsing, routing and responsive styling.</p>
      <h4>Nairobi Prime Homes | Real Estate Web Application</h4><p>Developed a property listing application with reusable UI, forms, routing and json-server API integration.</p>
      <h4>Task Manager CLI | Python Application</h4><p>Created a command-line project management tool with object-oriented models, structured data and automated pytest tests.</p>
      <h4>SokoCredit | Loan Management System</h4><p>Designed a full-stack loan management application concept for customer records, disbursements, repayments and analytics.</p>
    </section>
    <section><h3>EDUCATION &amp; TRAINING</h3><h4>Moringa School | Software Development</h4><p>February 2026 – September 2026<br/>Practical training in JavaScript, React, Python, Flask, SQL, REST APIs, testing and full-stack development.</p></section>
    <section><h3>PROFESSIONAL STRENGTHS</h3><p>Problem-solving · Teamwork · Communication · Adaptability · Continuous learning · Time management · Attention to detail</p></section>
    <section><h3>CAREER OBJECTIVE</h3><p>Seeking an entry-level software development opportunity to contribute to real products, learn from experienced developers and grow as a full-stack engineer.</p></section>
  </article>
}

function Brand() {
  const name = 'KERRY'
  return <a className="brand" href="#home" aria-label="Kerry Dev, home">
    {Array.from(name, (letter, index) => <span className="brand-letter" style={{ '--letter-index': index }} key={index}>{letter}</span>)}
    <span className="brand-suffix"><span className="brand-letter brand-dot" style={{ '--letter-index': 5 }}>.</span>{Array.from('DEV', (letter, index) => <span className="brand-letter" style={{ '--letter-index': index + 6 }} key={index}>{letter}</span>)}</span>
  </a>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const sendMessage = (event) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const subject = `Portfolio message from ${values.get('name')}`
    const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`
    window.location.href = `mailto:kerryopiyo6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return <div className={`portfolio-shell min-h-screen ${darkMode ? 'theme-dark' : 'theme-light'}`}>
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{[['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<button className="theme-toggle" type="button" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? '☀' : '☾'}</button></nav>
    </header>

    <main>
      <section className="hero wrap" id="home"><motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}><div className="portrait-mark" aria-hidden="true">KO</div><p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p><p className="intro">HELLO, I'M</p><h1>Kerry Opiyo<span>.</span></h1><h2>Junior Software Developer <b>|</b> Full-Stack Web Developer</h2><p className="hero-text">I build modern web applications that solve real-world problems using React, Python and PostgreSQL.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my work <span>↘</span></a><button className="button button-quiet" type="button" onClick={() => setResumeOpen(true)}>Preview resume <span>↗</span></button><button className="button button-quiet" type="button" onClick={() => window.print()}>Download resume <span>↓</span></button></div><a className="github-link" href="https://github.com/kerry-droid" target="_blank" rel="noreferrer"><span className="github-mark">GH</span> github.com/kerry-droid <span>↗</span></a></motion.div><Terminal /><div className="hero-index">SCROLL TO EXPLORE <span>↓</span></div></section>

      <motion.section {...sectionMotion} className="about section wrap" id="about"><SectionLabel>01 / ABOUT</SectionLabel><div className="about-grid"><h2>Practical software.<br /><span>Thoughtful solutions.</span></h2><div><p className="lead">I'm a developer focused on building useful software for real people and businesses.</p><p>I enjoy working across the frontend and backend: creating responsive interfaces, APIs and database-driven applications. My current focus is growing as a full-stack developer and turning complex workflows into tools people can actually use.</p><a className="text-link" href="#contact">A little more about working together <span>↘</span></a></div></div><div className="stats"><div><strong className="stat-words">Full-stack</strong><small>FRONTEND TO BACKEND</small></div><div><strong className="stat-words">React + Python</strong><small>CORE TOOLKIT</small></div><div><strong className="stat-words">Always learning</strong><small>GROWING EVERY DAY</small></div></div></motion.section>

      <motion.section {...sectionMotion} className="section wrap" id="skills"><SectionLabel>02 / TOOLKIT</SectionLabel><div className="section-heading"><h2>Skills &amp; tools</h2><p>Technologies I use to take ideas from interface to database.</p></div><div className="skill-groups">{skillGroups.map(([num, title, text, tools]) => <article className="skill-group" key={num}><span className="group-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><Chips items={tools} /></article>)}</div></motion.section>

      <motion.section {...sectionMotion} className="section wrap projects-section" id="projects"><SectionLabel>03 / SELECTED WORK</SectionLabel><div className="section-heading"><h2>Things I've built<span>.</span></h2><p>A selection of applications built while learning and developing my skills.</p></div><article className="project-feature"><SokoPreview /><div className="project-info"><div className="project-meta"><span>01 — FINTECH</span><span className="featured-tag">FEATURED PROJECT</span></div><h3>Soko Credit</h3><p className="project-desc">A loan management platform designed to help small lenders manage customers, loans and repayments in one place.</p><Chips items={['React', 'Flask', 'PostgreSQL', 'JWT']} className="project-chips" /><ul className="feature-list"><li>Customer and loan management</li><li>Loan approval and repayment tracking</li><li>Analytics for lending operations</li></ul><div className="project-links"><a href="#contact">Discuss this project <span>↗</span></a><a href="https://github.com/Moseti-moxy/sokocredit" target="_blank" rel="noreferrer">View Soko Credit on GitHub <span>↗</span></a></div></div></article><div className="project-grid">{projects.map((project) => <a className="project-card" key={project.num} href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ProjectArt {...project} /><div className="project-meta"><span>{project.num} — {project.category}</span></div><h3>{project.title}</h3><p>{project.text}</p><Chips items={project.tools} /><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div></motion.section>

      <motion.section {...sectionMotion} className="section wrap" id="experience"><SectionLabel>04 / CAPABILITIES</SectionLabel><div className="section-heading"><h2>What I do</h2><p>From the first screen to the data behind it.</p></div><div className="services-grid">{services.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></motion.section>

      <motion.section {...sectionMotion} className="section wrap contact-section" id="contact"><div className="contact-grid"><div className="contact-card contact-info-card"><h2>Contact Information</h2><div className="contact-details"><a href="mailto:kerryopiyo6@gmail.com"><span className="contact-icon-box"><ContactIcon kind="email" /></span><span><small>Email</small><strong>kerryopiyo6@gmail.com</strong></span></a><a href="tel:+254725041243"><span className="contact-icon-box"><ContactIcon kind="phone" /></span><span><small>Phone</small><strong>+254 725 041 243</strong></span></a><div className="contact-detail"><span className="contact-icon-box"><ContactIcon kind="location" /></span><span><small>Location</small><strong>Nairobi, Kenya</strong></span></div></div><div className="contact-social"><h3>Connect With Me</h3><div><a href="https://github.com/kerry-droid" target="_blank" rel="noreferrer" aria-label="GitHub"><ContactIcon kind="github" /></a><a href="https://www.instagram.com/void_kerry/" target="_blank" rel="noreferrer" aria-label="Instagram"><ContactIcon kind="instagram" /></a><a href="https://wa.me/254725041243" target="_blank" rel="noreferrer" aria-label="WhatsApp"><ContactIcon kind="whatsapp" /></a><a href="mailto:kerryopiyo6@gmail.com" aria-label="Email"><ContactIcon kind="email" /></a></div></div></div><form className="contact-card contact-form-card" onSubmit={sendMessage}><h2>Send a Message</h2><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" required /><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="your.email@example.com" required /><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Your message..." rows="5" required /><button className="button button-primary" type="submit">Send Message</button></form></div></motion.section>
    </main>

    <footer className="footer"><div className="wrap"><div className="footer-top"><Brand /><p>Full-Stack Developer</p><div><a href="https://github.com/kerry-droid" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:kerryopiyo6@gmail.com">Email ↗</a><a href="https://wa.me/254725041243" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/void_kerry/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#projects">Projects ↗</a></div></div><div className="footer-bottom"><span>© 2026 Kerry Opiyo.</span><a href="#home">Back to top ↑</a></div></div></footer>
    {resumeOpen && <ResumePreview onClose={() => setResumeOpen(false)} />}
  </div>
}

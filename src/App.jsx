import { useState } from 'react'
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const sendMessage = (event) => {
    event.preventDefault()
    const values = new FormData(event.currentTarget)
    const subject = `Portfolio message from ${values.get('name')}`
    const body = `Name: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`
    window.location.href = `mailto:kerryopiyo6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return <div className="min-h-screen bg-ink text-stone-100">
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kerry Dev, home">KERRY<span>.DEV</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['What I do', '#experience'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#resume" onClick={closeMenu}>Resume <span>↗</span></a></nav>
    </header>

    <main>
      <section className="hero wrap" id="home"><motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}><p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p><p className="intro">HELLO, I'M</p><h1>Kerry<br /><span>Opiyo.</span></h1><h2>Junior Software Developer | Full-Stack Web Developer</h2><p className="hero-text">I build modern web applications that solve real-world problems using React, Python and PostgreSQL.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <span>↘</span></a><a className="button button-quiet" href="#resume">Explore my background <span>↗</span></a></div><a className="github-link" href="https://github.com/kerry-droid" target="_blank" rel="noreferrer"><span className="github-mark">GH</span> github.com/kerry-droid <span>↗</span></a></motion.div><Terminal /><div className="hero-index">01 <span>—</span> 06</div></section>

      <motion.section {...sectionMotion} className="about section wrap" id="about"><SectionLabel>01 / ABOUT</SectionLabel><div className="about-grid"><h2>Practical software.<br /><span>Thoughtful solutions.</span></h2><div><p className="lead">I'm a developer focused on building useful software for real people and businesses.</p><p>I enjoy working across the frontend and backend: creating responsive interfaces, APIs and database-driven applications. My current focus is growing as a full-stack developer and turning complex workflows into tools people can actually use.</p><a className="text-link" href="#contact">A little more about working together <span>↘</span></a></div></div><div className="stats"><div><strong className="stat-words">Full-stack</strong><small>FRONTEND TO BACKEND</small></div><div><strong className="stat-words">React + Python</strong><small>CORE TOOLKIT</small></div><div><strong className="stat-words">Always learning</strong><small>GROWING EVERY DAY</small></div></div></motion.section>

      <motion.section {...sectionMotion} className="section wrap" id="skills"><SectionLabel>02 / TOOLKIT</SectionLabel><div className="section-heading"><h2>Skills &amp; tools</h2><p>Technologies I use to take ideas from interface to database.</p></div><div className="skill-groups">{skillGroups.map(([num, title, text, tools]) => <article className="skill-group" key={num}><span className="group-num">{num}</span><div><h3>{title}</h3><p>{text}</p></div><Chips items={tools} /></article>)}</div></motion.section>

      <motion.section {...sectionMotion} className="section wrap projects-section" id="projects"><SectionLabel>03 / SELECTED WORK</SectionLabel><div className="section-heading"><h2>Things I've built<span>.</span></h2><p>A selection of applications built while learning and developing my skills.</p></div><article className="project-feature"><SokoPreview /><div className="project-info"><div className="project-meta"><span>01 — FINTECH</span><span className="featured-tag">FEATURED PROJECT</span></div><h3>Soko Credit</h3><p className="project-desc">A loan management platform designed to help small lenders manage customers, loans and repayments in one place.</p><Chips items={['React', 'Flask', 'PostgreSQL', 'JWT']} className="project-chips" /><ul className="feature-list"><li>Customer and loan management</li><li>Loan approval and repayment tracking</li><li>Analytics for lending operations</li></ul><div className="project-links"><a href="#contact">Discuss this project <span>↗</span></a><a href="https://github.com/Moseti-moxy/sokocredit" target="_blank" rel="noreferrer">View Soko Credit on GitHub <span>↗</span></a></div></div></article><div className="project-grid">{projects.map((project) => <a className="project-card" key={project.num} href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ProjectArt {...project} /><div className="project-meta"><span>{project.num} — {project.category}</span></div><h3>{project.title}</h3><p>{project.text}</p><Chips items={project.tools} /><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div></motion.section>

      <motion.section {...sectionMotion} className="section wrap" id="experience"><SectionLabel>04 / CAPABILITIES</SectionLabel><div className="section-heading"><h2>What I do</h2><p>From the first screen to the data behind it.</p></div><div className="services-grid">{services.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></motion.section>

      <section className="resume-band" id="resume"><motion.div {...sectionMotion} className="wrap resume-inner"><div className="resume-heading"><p className="eyebrow">05 / RESUME</p><h2>Kerry<br /><span>Opiyo.</span></h2><p className="resume-role">Junior Software Developer | Full-Stack Web Developer</p><div className="resume-contact"><a href="tel:+254725041243">0725 041 243</a><a href="https://wa.me/254725041243" target="_blank" rel="noreferrer">WhatsApp: 0725 041 243 ↗</a><a href="mailto:kerryopiyo6@gmail.com">kerryopiyo6@gmail.com</a><span>Nairobi, Kenya</span><a href="https://github.com/kerry-droid" target="_blank" rel="noreferrer">github.com/kerry-droid ↗</a><a href="https://www.instagram.com/void_kerry/" target="_blank" rel="noreferrer">instagram.com/void_kerry ↗</a></div></div><div className="resume-content">
        <section><h3>Professional summary</h3><p>Motivated junior software developer trained in practical full-stack web development. Experienced in building responsive web applications, consuming REST APIs, working with databases, implementing authentication and routing, debugging applications, and deploying projects. Strong problem-solving mindset with a willingness to learn, collaborate, and build reliable user-focused software.</p></section>
        <section><h3>Projects</h3><article><h4>Movie Hub <span>— React Web Application</span></h4><p>Built a movie discovery application using React and the TMDB API. Implemented reusable components, React Router navigation, API data fetching, search and browsing functionality, responsive Tailwind CSS styling, and environment-based API configuration.</p></article><article><h4>Nairobi Prime Homes <span>— Real Estate Web Application</span></h4><p>Developed a React real estate application for displaying and managing property listings, with routing, reusable UI components, forms, json-server API integration, and deployment workflows.</p></article><article><h4>Task Manager CLI <span>— Python Application</span></h4><p>Built a command-line project management tool using Python and object-oriented programming. Designed user, project, and task models with structured data storage and automated pytest tests.</p></article><article><h4>SokoCredit <span>— Loan Management System</span></h4><p>Designed a full-stack loan management concept for microfinance lenders serving small-scale traders, covering customer management, loan disbursement, repayments, analytics, and role-based admin and customer workflows.</p></article></section>
        <section><h3>Education &amp; training</h3><article><h4>Moringa School <span>— Software Development</span></h4><p>February 2026 – September 2026</p><p>Practical training in frontend and backend development, JavaScript, React, Python, Flask, SQL, REST APIs, testing, Git/GitHub, and full-stack application development.</p></article></section>
        <section><h3>Soft skills</h3><p>Problem-solving · Teamwork · Communication · Adaptability · Continuous learning · Time management · Debugging and troubleshooting · Attention to detail</p></section>
        <section><h3>Career objective</h3><p>Seeking an entry-level software development opportunity where I can apply my technical skills, contribute to real-world products, learn from experienced developers, and grow into a strong full-stack software engineer.</p></section>
        <a className="button button-primary resume-email" href="mailto:kerryopiyo6@gmail.com?subject=Let's%20talk">Get in touch <span>↗</span></a>
      </div></motion.div></section>

      <motion.section {...sectionMotion} className="section wrap contact-section" id="contact"><SectionLabel>06 / CONTACT</SectionLabel><div className="contact-grid"><div><p className="eyebrow">HAVE A PROJECT?</p><h2>Let's work<br /><span>together.</span></h2><p className="contact-intro">I'm open to opportunities, collaborations and interesting software projects.</p><div className="contact-details"><a href="mailto:kerryopiyo6@gmail.com"><small>EMAIL</small>kerryopiyo6@gmail.com <span>↗</span></a><a href="tel:+254725041243"><small>PHONE</small>0725 041 243 <span>↗</span></a><a href="https://wa.me/254725041243" target="_blank" rel="noreferrer"><small>WHATSAPP</small>0725 041 243 <span>↗</span></a><a href="https://www.instagram.com/void_kerry/" target="_blank" rel="noreferrer"><small>INSTAGRAM</small>@void_kerry <span>↗</span></a><a href="https://github.com/kerry-droid" target="_blank" rel="noreferrer"><small>GITHUB</small>github.com/kerry-droid <span>↗</span></a></div></div><form onSubmit={sendMessage}><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" required /><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" required /><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Tell me a little about your project..." rows="4" required /><button className="button button-primary" type="submit">Send message <span>↗</span></button><p className="form-note">Your email app will open with the message ready to send.</p></form></div></motion.section>
    </main>

    <footer className="footer"><div className="wrap"><div className="footer-top"><a className="brand" href="#home">KERRY<span>.DEV</span></a><p>Full-Stack Developer</p><div><a href="https://github.com/kerry-droid" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:kerryopiyo6@gmail.com">Email ↗</a><a href="https://wa.me/254725041243" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/void_kerry/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#projects">Projects ↗</a></div></div><div className="footer-bottom"><span>© 2026 Kerry Opiyo.</span><a href="#home">Back to top ↑</a></div></div></footer>
  </div>
}

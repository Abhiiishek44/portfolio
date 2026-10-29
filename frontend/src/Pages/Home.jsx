import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiArrowUp, FiArrowUpRight, FiCheck, FiCode, FiCpu, FiDatabase, FiGitBranch, FiGithub, FiGitPullRequest, FiMail, FiSearch, FiShare2, FiStar } from 'react-icons/fi';
import {
  SiAmazonwebservices, SiC, SiCplusplus, SiCss3, SiDocker, SiExpress, SiFastapi,
  SiGit, SiGithub, SiHtml5, SiJavascript, SiLangchain, SiMongodb, SiMysql,
  SiNodedotjs, SiOpenai, SiOpenjdk, SiPostgresql, SiPython, SiRailway, SiReact,
  SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import Navbar from '../components/Navbar';
import aboutPhoto from '../assets/images/me.jpeg';

const skillGroups = [
  { label: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
  { label: 'Frontend', items: ['HTML5', 'CSS', 'Tailwind CSS', 'React.js'] },
  { label: 'Backend & APIs', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'] },
  { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'QdrantDB'] },
  { label: 'Cloud & Development Tools', items: ['AWS', 'Railway', 'Docker', 'Git', 'GitHub'] },
  { label: 'Generative AI', items: ['LLM integrations', 'LangChain', 'LangGraph', 'RAG', 'Agentic AI', 'MCP'] },
];

const technologyIcons = {
  C: [SiC, '#659ad2'],
  'C++': [SiCplusplus, '#00599c'],
  Java: [SiOpenjdk, '#e76f00'],
  Python: [SiPython, '#3776ab'],
  JavaScript: [SiJavascript, '#d4ad00'],
  TypeScript: [SiTypescript, '#3178c6'],
  HTML5: [SiHtml5, '#e34f26'],
  CSS: [SiCss3, '#1572b6'],
  'Tailwind CSS': [SiTailwindcss, '#06b6d4'],
  'React.js': [SiReact, '#149eca'],
  'Node.js': [SiNodedotjs, '#339933'],
  'Express.js': [SiExpress, '#353535'],
  FastAPI: [SiFastapi, '#009688'],
  'REST APIs': [FiCode, '#7c3aed'],
  PostgreSQL: [SiPostgresql, '#4169e1'],
  MySQL: [SiMysql, '#4479a1'],
  MongoDB: [SiMongodb, '#47a248'],
  QdrantDB: [FiDatabase, '#dc244c'],
  AWS: [SiAmazonwebservices, '#ff9900'],
  Railway: [SiRailway, '#5b55e7'],
  Docker: [SiDocker, '#2496ed'],
  Git: [SiGit, '#f05032'],
  GitHub: [SiGithub, '#24292f'],
  'LLM integrations': [SiOpenai, '#10a37f'],
  LangChain: [SiLangchain, '#1c3c3c'],
  LangGraph: [FiGitBranch, '#5b55e7'],
  RAG: [FiSearch, '#d97706'],
  'Agentic AI': [FiCpu, '#8b5cf6'],
  MCP: [FiShare2, '#e34f26'],
};

function TechBadge({ name }) {
  const [Icon, color] = technologyIcons[name] ?? [FiCode, '#666'];
  return <span className="tech-badge" style={{ '--tech-color': color }}><i><Icon /></i>{name}</span>;
}

const impact = [
  'Ship customer-facing capabilities from early product decisions through production.',
  'Connect AI behavior, APIs, data, and interfaces into dependable workflows.',
  'Build the backend and infrastructure foundations needed for the product to scale.',
];

const projects = [
  { number: '01', title: 'InteraOne', eyebrow: 'AI customer support platform', description: 'An end-to-end platform that turns product knowledge into intelligent, dependable customer support experiences.', tags: ['AI Applications', 'Product Engineering', 'Automation'], github: 'https://github.com/InteraOne/InteraOne', live: 'https://www.interaone.app/', tone: 'intera' },
  { number: '02', title: 'Industrial Thermal Intelligence', eyebrow: 'Geospatial AI · Thermal monitoring', description: 'An explainable monitoring platform that uses NASA FIRMS observations, historical baselines, and geospatial context to detect and prioritize thermal anomalies across industrial corridors and forest landscapes.', tags: ['Python & Flask', 'PostGIS', 'Isolation Forest', 'Leaflet'], github: 'https://github.com/Abhiiishek44/industrial-thermal-intelligence', live: 'https://industrial-thermal-intelligence-production.up.railway.app/', tone: 'blue' },
];

const contributions = [
  { project: 'LangChain OpenWiki', stars: '+13.2k', reference: 'langchain-ai/openwiki#477', title: 'Added multilingual wiki output', description: 'Added language-aware CLI options, persisted settings, translation recovery, and localized reader-facing wiki content.', url: 'https://github.com/langchain-ai/openwiki/pull/477' },
  { project: 'Apache Superset', stars: '+73.9k', reference: 'apache/superset#41975', title: 'Fixed BigQuery project resolution', description: 'Updated BigQuery clients to honor the connection project and prevent metadata operations from resolving the wrong dataset.', url: 'https://github.com/apache/superset/pull/41975' },
  { project: 'Odysseus AI', stars: '+83.2k', pullRequests: [
    { reference: 'odysseus-dev/odysseus#5491', title: 'Made LLM fallbacks recover from empty streams', description: 'Empty or metadata-only model streams now advance to the next candidate instead of ending without a useful response.', url: 'https://github.com/odysseus-dev/odysseus/pull/5491' },
    { reference: 'odysseus-dev/odysseus#3840', title: 'Prevented blank API integrations', description: 'Added client- and server-side validation that blocks blank integrations and protects stored data during updates.', url: 'https://github.com/odysseus-dev/odysseus/pull/3840' },
  ] },
];

function Label({ children }) { return <p className="section-label">{children}</p>; }

function Home() {
  const [dark, setDark] = useState(false);
  const [odysseusPage, setOdysseusPage] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    return () => { document.documentElement.style.colorScheme = ''; };
  }, [dark]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const hero = heroRef.current;
    if (!hero) return undefined;

    let frame;
    let isVisible = true;
    let currentX = 0;
    let currentY = window.scrollY * 0.18;
    let pointerX = 0;
    let pointerY = 0;
    let scrollY = currentY;

    const animateGrid = (time) => {
      const autoX = Math.sin(time * 0.00042) * 34;
      const autoY = Math.cos(time * 0.00034) * 28;
      const targetX = autoX + pointerX;
      const targetY = autoY + pointerY + scrollY;
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;
      hero.style.setProperty('--grid-x', `${currentX}px`);
      hero.style.setProperty('--grid-y', `${currentY}px`);
      frame = isVisible ? window.requestAnimationFrame(animateGrid) : undefined;
    };

    const startAnimation = () => {
      if (!frame) frame = window.requestAnimationFrame(animateGrid);
    };
    const handleScroll = () => {
      scrollY = window.scrollY * 0.18;
      startAnimation();
    };
    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 34;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 34;
      hero.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
      hero.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
      hero.classList.add('cursor-on-grid');
      startAnimation();
    };
    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      hero.classList.remove('cursor-on-grid');
      startAnimation();
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else if (frame) {
        window.cancelAnimationFrame(frame);
        frame = undefined;
      }
    }, { threshold: 0 });

    hero.style.setProperty('--grid-x', '0px');
    hero.style.setProperty('--grid-y', `${currentY}px`);
    window.addEventListener('scroll', handleScroll, { passive: true });
    hero.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    observer.observe(hero);
    startAnimation();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      hero.style.removeProperty('--grid-x');
      hero.style.removeProperty('--grid-y');
      hero.style.removeProperty('--cursor-x');
      hero.style.removeProperty('--cursor-y');
      hero.classList.remove('cursor-on-grid');
    };
  }, []);

  return (
    <div className={`portfolio-shell ${dark ? 'is-dark' : ''}`}>
      <Navbar dark={dark} onThemeToggle={() => setDark((value) => !value)} />
      <main>
        <section ref={heroRef} id="home" className="hero-grid interactive-grid ruled-section">
          <div className="page-frame hero-inner">
            <div className="hero-kicker"><span>Pune, India</span><i /></div>
            <h1><span>Abhishek</span><span>Kumbhar</span></h1>
            <p className="hero-copy">Full-stack AI engineer building <strong>production-grade intelligent products</strong> from model behavior to polished interfaces.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See my work <span>→</span></a>
              <a className="availability" href="mailto:abhishekkumbhar2004@gmail.com"><i /> Available for interesting problems</a>
            </div>
          </div>
        </section>

        <section id="about" className="statement-section ruled-section">
          <div className="page-frame about-section">
            <div className="about-heading">
              <Label>About / 01</Label>
              <h2>Hi there!</h2>
            </div>
            <div className="about-grid">
              <div className="about-photo-wrap">
                <img src={aboutPhoto} alt="Abhishek Kumbhar" />
              </div>
              <div className="about-copy">
                <h3>I build full-stack products, backend APIs, and practical AI features—mostly anything that helps me understand how the whole system fits together.</h3>
                <p>I&apos;m studying Artificial Intelligence and Data Science in Pune after completing my Diploma in Computer Engineering with 89.73%. I enjoy learning by building something real instead of stopping at the tutorial.</p>
                <p>Right now, I work on InteraOne, an open-source customer support platform. I&apos;ve worked across its frontend, backend APIs, AI agent, background workers, CRM features, and embeddable widget.</p>
                <p>I also contribute to open source when I find a problem I can genuinely fix. So far, that has led to four merged pull requests across Apache Superset, Odysseus AI, and OpenWiki.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section ruled-section">
          <div className="page-frame">
            <div className="section-heading"><Label>Capabilities / 02</Label><h2>The stack behind<br />the systems I ship.</h2></div>
            <div className="skill-table">
              {skillGroups.map((group) => <div className="skill-row" key={group.label}><h3>{group.label}</h3><div>{group.items.map((item) => <TechBadge key={item} name={item} />)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section ruled-section">
          <div className="page-frame experience-grid">
            <aside>
              <Label>Experience / 03</Label>
              <a className="role-tab active" href="#interaone"><i /><span><strong>InteraOne</strong><small>Founding Developer · 2025—Now</small></span></a>
              <a className="role-tab" href="#open-source"><i /><span><strong>Open Source</strong><small>Contributor · Ongoing</small></span></a>
            </aside>
            <article id="interaone" className="experience-card">
              <div className="experience-meta"><span>Founding developer</span><span>July 2025 — Present</span></div>
              <h2>Building InteraOne across AI, backend, product, and infrastructure.</h2>
              <p>Turning early product needs into shipped capabilities—from AI behavior and APIs to customer-facing workflows and the systems behind them.</p>
              <ol>{impact.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
              <div className="inline-links"><a href="https://www.interaone.app/" target="_blank" rel="noreferrer">Website <FiArrowUpRight /></a><a href="https://github.com/InteraOne/InteraOne" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a></div>
            </article>
          </div>
        </section>

        <section id="work" className="work-section ruled-section">
          <div className="page-frame">
            <div className="section-heading split-heading"><div><Label>Selected work / 04</Label><h2>Things I’ve<br />built with intent.</h2></div><p>A small selection of products and tools shaped by real problems, careful systems thinking, and a bias toward shipping.</p></div>
            <div className="project-list">
              {projects.map((project) => <article className={`project-card project-${project.tone}`} key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-body"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}><FiArrowUpRight /></a>}<a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><FiGithub /></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="open-source" className="opensource-section ruled-section">
          <div className="page-frame">
            <div className="section-heading"><Label>Open source / 05</Label><h2>Merged work in<br />production codebases.</h2></div>
            <div className="contribution-list">
              {contributions.map((contribution, index) => {
                const pullRequests = contribution.pullRequests ?? [contribution];
                const active = contribution.project === 'Odysseus AI' ? odysseusPage : 0;
                const pullRequest = pullRequests[active];
                return <article className="contribution" key={contribution.project}>
                  <div className="contribution-name"><span>0{index + 1}</span><h3>{contribution.project}</h3><small><FiStar /> {contribution.stars} stars</small></div>
                  <div className="contribution-copy"><div className="merged"><FiCheck /> Merged <span><FiGitPullRequest /> {pullRequest.reference}</span></div><h4>{pullRequest.title}</h4><p>{pullRequest.description}</p><a href={pullRequest.url} target="_blank" rel="noreferrer">View pull request <FiArrowUpRight /></a></div>
                  {pullRequests.length > 1 && <div className="pagination"><button onClick={() => setOdysseusPage((active - 1 + pullRequests.length) % pullRequests.length)} aria-label="Previous pull request"><FiArrowLeft /></button><span>{active + 1} / {pullRequests.length}</span><button onClick={() => setOdysseusPage((active + 1) % pullRequests.length)} aria-label="Next pull request"><FiArrowRight /></button></div>}
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section ruled-section">
          <div className="page-frame contact-grid">
            <div><Label>Contact / 06</Label><h2>Let’s build<br />something.</h2><p>Open to ambitious products, hard engineering problems, and conversations worth having. Email is the fastest way to reach me.</p><a className="email-link" href="mailto:abhishekkumbhar2004@gmail.com">abhishekkumbhar2004@gmail.com <FiMail /></a><div className="social-pills"><a href="https://github.com/Abhiiishek44" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a href="https://www.linkedin.com/in/abhishekkumbhar4615" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a><a href="/photodump">Photo dump <FiArrowUpRight /></a></div></div>
            <a className="back-top" href="#home"><FiArrowUp /> Back to top</a>
          </div>
          <footer className="page-frame footer-line"><span>Abhishek Kumbhar · Pune, India</span><span>Designed with curiosity. Built with React.</span></footer>
        </section>
      </main>
    </div>
  );
}

export default Home;

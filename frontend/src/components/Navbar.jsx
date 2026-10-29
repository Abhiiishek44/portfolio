import { FiDownload, FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ dark = false, onThemeToggle }) => (
  <header className="site-header">
    <div className="nav-frame">
      <a href="/#home" className="monogram" aria-label="Top of page">AK</a>
      <nav aria-label="Main navigation"><a href="/#about">About</a><a href="/#skills">Skills</a><a href="/#experience">Experience</a><a href="/#work">Work</a><a href="/photodump">Photo dump</a><a href="/#contact">Contact</a></nav>
      <div className="nav-actions">
        {onThemeToggle && <button className="theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? <FiSun /> : <FiMoon />}</button>}
        <a className="nav-contact" href="/Abhishek-Kumbhar-Resume.pdf" download="Abhishek-Kumbhar-Resume.pdf">Résumé PDF <FiDownload /></a>
      </div>
    </div>
  </header>
);

export default Navbar;

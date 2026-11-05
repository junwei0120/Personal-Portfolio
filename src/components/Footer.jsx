
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Footer Logo */}
        <div className="footer-brand">
          <h2>My Portfolio</h2>

          <p>
            Aspiring Software Developer
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Social Links */}
        <div className="footer-socials">

          <a
            href="https://github.com/junwei0120"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/lim-jun-wei-2b62bb2a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:limjunwei0120@gmail.com"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>

        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {currentYear} LIM JUN WEI. All Rights Reserved.
        </p>

        <a href="#home">
          Back to Top ↑
        </a>
      </div>

    </footer>
  )
}

export default Footer

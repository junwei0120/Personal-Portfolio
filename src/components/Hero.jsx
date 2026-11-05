
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowDown } from 'lucide-react'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="greeting">
          HELLO, WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>LIM JUN WEI</span>
        </h1>

        <h2>
          Aspiring Software Developer
        </h2>

        <p className="description">
          I am an aspiring software developer with an interest
          in full-stack development, database management, and
          building user-friendly applications. I enjoy learning
          new technologies and turning ideas into practical solutions.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://github.com/junwei0120"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="GitHub">
            <FaGithub size={22} />
          </a>

          <a href="https://www.linkedin.com/in/lim-jun-wei-2b62bb2a5/"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="LinkedIn">
            <FaLinkedin size={22} />
          </a>

          <a href="mailto:limjunwei0120@gmail.com"
             aria-label="Email">
            <Mail size={22} />
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down to About section">
        <ArrowDown size={20} />
        <span>Scroll to explore</span>
      </a>
    </section>
  )
}

export default Hero

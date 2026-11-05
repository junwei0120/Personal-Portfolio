
import { Mail, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <p className="section-subtitle">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-description">
          I am always open to discussing software development,
          internship opportunities, collaborations and new ideas.
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="contact-grid">

          {/* Email */}
          <a
            href="mailto:limjunwei0120@gmail.com"
            className="contact-card"
          >
            <Mail size={28} />

            <h3>Email</h3>

            <p>limjunwei0120@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/junwei0120"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub size={28} />

            <h3>GitHub</h3>

            <p>Explore My Repositories</p>

            <ExternalLink size={14} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lim-jun-wei-2b62bb2a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin size={28} />
            <h3>LinkedIn</h3>
            <p>Connect With Me</p>
            <ExternalLink size={14} />
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact

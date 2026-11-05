import './App.css'
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function App() {
  // Store the current theme
  const [theme, setTheme] = useState('light')

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <div className={`portfolio ${theme}`}>

      {/* Navigation Bar */}
      <nav className="navbar">

        <h2 className="logo">My Portfolio</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="greeting">
            Hello, Welcome to my portfolio!
          </p>

          <h1>LIM JUN WEI</h1>

          <h2>Software Developer</h2>

          <p className="description">
            I am a passionate software developer interested
            in web technologies and creating practical
            solutions to real-world problems.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App


import { Moon, Sun } from 'lucide-react'

function Navbar({ theme, toggleTheme }) { //destructuring props = Navbar component receive two props: theme and toggleTheme

  return (
    <nav className="navbar">

      {/* Website Logo */}
      <h2 className="logo">
        My Portfolio
      </h2>

      {/* Navigation Links */}
      <ul className="nav-links">

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>

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
  )
}

export default Navbar

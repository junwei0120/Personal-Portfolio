import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
    </div>
  )
}

export default App

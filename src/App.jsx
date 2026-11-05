import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

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
    </div>
  )
}

export default App

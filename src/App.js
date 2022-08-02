import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
// import './App.css';
import './styles/backTopButton.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Profile from './views/Profile'
import Tecnologies from './views/Tecnologies'
import Projects from './views/Projects'
import Experience from './views/Experience'
import AppHeader from './components/NavBar/AppHeader'
import Main from './views/Main'
import AboutMe from './views/AboutMe'
import Footer from './components/Footer/Footer'
import { ThemeContext } from './utils/ThemeProvider'
import { setTheme, keepTheme } from './utils/themes'
import Contact from './views/Contact'
import BackToTopButton from './components/Shared/BackToTopButton'
import Stack from './views/Stack'

function App () {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const refScrollUp = useRef()
  const [showButton, setShowButton] = useState('button-hidden')
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleVisibleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)

    if (position > 50) {
      window.removeEventListener('scroll', handleScrollTop)
      console.log('Aqui' + position)
      setShowButton('button-show')
    } else if (position < 50) {
      console.log('Alli' + position)
      setShowButton('button-hidden')
    }
  }

  // SCROLL TO TOP FUNCTION
  const handleScrollTop = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      keepTheme()
    } else { setTheme('dark') }
    window.addEventListener('scroll', handleVisibleScroll)
  }, [])

  return (
    <div className={`${!darkMode ? 'dark:bg-primary-dark' : 'bg-secondary-light'} h-full`}>
      <div ref={refScrollUp} />
      <Router>
        <BackToTopButton showButton={showButton} handleScrollTop={handleScrollTop} />
        <AppHeader />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/stack' element={<Stack />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App

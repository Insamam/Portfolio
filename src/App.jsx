import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
const App = () => {
  return (
    <>
    <div className='bg-sky-50 min-h-screen'>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
    </>
  )
}

export default App
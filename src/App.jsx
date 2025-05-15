//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MovingBar from './Components/MovingBar'
import Services from './Components/Services'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <Navbar />
    <div id='home' className='h-screen'>
      <Home />
      <MovingBar />
    </div>
    <div id='services'>
      <Services />
    </div>
    <div id='about'>
      <About />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    <div id='contact'>
      <MovingBar />
      <Contact />
      <MovingBar />
    </div>
      <Footer />
    </>
  )
}

export default App

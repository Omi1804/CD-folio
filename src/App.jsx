import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Themes from './components/Themes'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Themes/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

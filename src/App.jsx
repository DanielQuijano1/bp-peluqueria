import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home'
import Shop from './components/ListPages/Shop'
import About from './components/ListPages/About'
import Contact from './components/ListPages/Contact'
import Services from './components/ListPages/Services'
import Footer from './components/Footer/Footer.jsx'
import Popup from './components/Navbar/Popup/Popup.jsx'
import { Provider } from 'react-wrap-balancer'
import { useState, useEffect } from 'react'

function App() {

  //windows size
  const [windowsSize, setWindowsSize] = useState([window.innerWidth])

  useEffect(() => {
    const handleWindowsResize = () => {
      setWindowsSize([window.innerWidth]);
    };

    window.addEventListener('resize', handleWindowsResize);

    return () => {
      window.removeEventListener('resize', handleWindowsResize);
    };
  });


  return (
    <div className='html'>
      <Provider>
        <BrowserRouter>
          <Navbar windowsSize={windowsSize} />
          <Popup />
          <Routes>
            <Route path='/' element={<Home windowsSize={windowsSize} />} />
            <Route path='/shop/' element={<Shop windowsSize={windowsSize} />} />
            <Route path='/about/' element={<About windowsSize={windowsSize} />} />
            <Route path='/services/' element={<Services windowsSize={windowsSize} />}/>
            <Route path='/contact/' element={<Contact windowsSize={windowsSize} />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

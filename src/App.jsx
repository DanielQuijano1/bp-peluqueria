import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import Servicios from './components/Main/flexServicios/Servicios.jsx';
import Popup from './components/Navbar/Popup/Popup.jsx'
import { Provider } from 'react-wrap-balancer'
import { useState, useEffect } from 'react'

function App() {

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
          <Main windowsSize={windowsSize}/>
          <Servicios />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

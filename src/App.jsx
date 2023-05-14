import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Servicios from './components/Main/flexServicios/Servicios';
import Popup from './components/Navbar/Popup/Popup'

function App() {

  return (
    <div className='html'>
      <BrowserRouter>
        <Navbar />
        <Popup />
        <Main />
        <Servicios />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import Servicios from './components/Main/flexServicios/Servicios.jsx';
import Popup from './components/Navbar/Popup/Popup.jsx'
import { Provider } from 'react-wrap-balancer'

function App() {

  return (
    <div className='html'>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Popup />
          <Main />
          <Servicios />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

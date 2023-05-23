import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Servicios from './components/Main/flexServicios/Servicios';
import Popup from './components/Navbar/Popup/Popup'
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

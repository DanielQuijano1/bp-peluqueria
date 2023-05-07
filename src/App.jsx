import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='html'>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

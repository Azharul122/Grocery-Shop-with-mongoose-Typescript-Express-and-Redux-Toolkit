
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/Header'
import Footer from './shared/Footer'

function App() {


  return (
    <>
      <div className="">
        <header>
          <Header />
        </header>
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App

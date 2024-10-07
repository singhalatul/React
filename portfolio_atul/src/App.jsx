
// import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <div className="overflow-hidden bg-black w-full h-screen">
      <Header />
        <Outlet />
      <Footer/>
    </div>
  )
}

export default App

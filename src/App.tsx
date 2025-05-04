import './App.css'
import Navbar from './components/Navbar.tsx'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'

function App() {

  return (
    <>
      <Navbar />
      <main className='app-content'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import CheckOut from './pages/checkout'
import Auth from './pages/auth'
import Navbar from './components/navbar'

import './App.css'
import AuthProvider from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/authentication" element= {<Auth />}/>
          <Route path="/checkout" element= {<CheckOut />}/>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App

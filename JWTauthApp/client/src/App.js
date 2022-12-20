import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Data from './pages/Data'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import { useGlobalContext } from './context'


const App = () => {
  const {color} = useGlobalContext()
  
  return (
    <div style={{
      backgroundColor:color,
      minHeight:'100vh'
    }}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/data' element={<Data />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
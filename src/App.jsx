import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import UserRegistration from './pages/User/UserRegistration'
import HomePage from './pages/User/HomePage'

function App() {

  return (
    <div>

    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<UserRegistration />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

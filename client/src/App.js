import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/Dashboard'
import Welcome from './Pages/Welcome'
import useUser from './Hooks/useUser'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { grabUser } = useUser()

  useEffect(() => {
    return async () => {
      const res = await grabUser()
      if (res) setIsLoggedIn(true)
      else setIsLoggedIn(false)
    }
  })

  return (
    <Routes>
      <Route path='/login' element={isLoggedIn ? <Navigate to='/dashboard' /> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />} />
      <Route path='/' element={<Welcome isLoggedIn={isLoggedIn} />} />
    </Routes>
  )
}

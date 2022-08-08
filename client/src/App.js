import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import Dashboard from './Pages/Dashboard'
import Welcome from './Pages/Welcome'
import useSession from './Hooks/useSession'

export default function App() {
  const { getUser, deleteUser } = useSession()
  const [auth, setAuth] = useState({ user: { deleteUser } })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const routes = (
    <Routes>
      <Route
        path='/login'
        element={
          isLoggedIn ? (
            <Navigate to='/dashboard' />
          ) : (
            <Login setLogin={setIsLoggedIn} />
          )
        }
      />
      <Route path='/register' element={<Register setLogin={setIsLoggedIn} />} />
      <Route
        path='/dashboard'
        element={
          isLoggedIn ? <Dashboard auth={auth} /> : <Navigate to='/login' />
        }
      />
      <Route path='/' element={<Welcome isLoggedIn={isLoggedIn} />} />
    </Routes>
  )

  const spinner = (
    <div className='min-h-screen flex items-center justify-center space-x-3'>
      <div className='w-16 h-16 border-8 border-teal-800 border-t-transparent border-dotted rounded-full animate-spin'></div>
    </div>
  )

  // Assert login on update
  useEffect(() => {
    const assertLogin = async () => {
      const res = await getUser()
      if (Boolean(res)) {
        setIsLoggedIn(true)
        setAuth({ user: { ...res, deleteUser } })
      } else setIsLoggedIn(false)
      setLoading(false)
    }
    assertLogin()
  }, [getUser])

  return loading ? spinner : routes
}

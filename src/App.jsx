import { BrowserRouter } from 'react-router'
import AppRouter from './components/AppRouter.jsx'
import Navbar from './components/UI/Navbar/Navbar.jsx'
import { AuthContext } from './context/index.js'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

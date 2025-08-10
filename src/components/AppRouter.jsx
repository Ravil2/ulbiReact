import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { useContext } from 'react'
import { AuthContext } from '../context'
export default function AppRouter() {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  )
}

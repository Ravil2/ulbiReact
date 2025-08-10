import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './UI/Navbar/Navbar'
import { privateRoutes, publicRoutes } from '../router'
export default function AppRouter() {
  const isAuth = false

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))
          : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

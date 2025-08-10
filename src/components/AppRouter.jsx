import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './UI/Navbar/Navbar'
import { routes } from '../router'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

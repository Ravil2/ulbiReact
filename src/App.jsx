import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './pages/Posts'
import About from './pages/About'
import Navbar from './components/UI/Navbar/Navbar.jsx'
import Error from './components/Error.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

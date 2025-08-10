import { Link } from 'react-router'
import MyButton from '../button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../context'

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
      <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
    </div>
  )
}

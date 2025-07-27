import { useState } from 'react'
import PostList from './components/PostList'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])

  return (
    <div>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

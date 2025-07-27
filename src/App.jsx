import { useState } from 'react'
import Post from './components/Post'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])

  return (
    <div>
      {posts.map((postItem) => (
        <Post key={postItem.id} post={postItem} />
      ))}
    </div>
  )
}

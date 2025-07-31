import { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div>
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList posts={posts} title="Posts list 1" remove={removePost} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts!</h1>
      )}
    </div>
  )
}

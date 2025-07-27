import { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])
  const [post, setPost] = useState({ title: '', descr: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', descr: '' })
  }

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.descr}
          onChange={(e) => setPost({ ...post, descr: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton type="submit" onClick={addNewPost}>
          Добавить пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

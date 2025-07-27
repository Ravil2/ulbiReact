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
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      descr,
    }
    setPosts([...posts, newPost])
    setTitle('')
    setDescr('')
    console.log('Название: ', title)
    console.log('Описание: ', descr)
  }

  return (
    <div>
      <form>
        <MyInput
          placeholder="Название"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <MyInput
          placeholder="Описание"
          type="text"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />

        <MyButton type="submit" onClick={addNewPost}>
          Добавить пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

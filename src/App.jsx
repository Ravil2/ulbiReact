import { useState } from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import { useRef } from 'react'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])
  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    setTitle('')
    console.log(title)
    console.log(bodyInputRef.current.value)
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

        <MyInput ref={bodyInputRef} placeholder="Описание" type="text" />

        <MyButton type="submit" onClick={addNewPost}>
          Добавить пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Posts list 1" />
    </div>
  )
}

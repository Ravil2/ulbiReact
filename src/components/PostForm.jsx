import { useState } from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', descr: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', descr: '' })
  }

  return (
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
  )
}

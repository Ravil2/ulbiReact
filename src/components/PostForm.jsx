import { useState } from "react"

export default function PostForm() {
  const [post, setPost] = useState({ title: '', descr: '' })

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

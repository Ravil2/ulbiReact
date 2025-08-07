import { useEffect } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import { useState } from 'react'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await PostService.getById(params.id)
      setPost(response.data)
    }
    fetchPost()
  }, [params.id])

  console.log('post', post)

  return (
    <div>
      <h1>Вы открыли пост с ID = {params.id}</h1>
      {post ? (
        <div>
          {post.id}: {post.title}
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  )
}

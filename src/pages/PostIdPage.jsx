import { useEffect } from 'react'
import { useParams } from 'react-router'
import PostService from '../API/PostService'
import { useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'

export default function PostIdPage() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  const [fetchingPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  console.log(comments)

  const [fetchingComments, isCommentLoading, commentError] = useFetching(
    async (id) => {
      const response = await PostService.getByComment(id)
      setComments(response.data.comments)
    },
  )

  useEffect(() => {
    fetchingPost(params.id)
    fetchingComments(params.id)
  }, [params.id])

  console.log('post', post)

  return (
    <div style={{ marginTop: '10px' }}>
      <h1 style={{ paddingBottom: '50px' }}>
        Вы открыли пост с ID = {params.id}
      </h1>
      {isLoading ? <Loader /> : ''}
      {post ? (
        <div className="post-card">
          <div className="post-meta">
            Post #{post.id} by User {post.userId}
          </div>

          <h2 className="post-title">{post.title}</h2>

          <p className="post-body">{post.body}</p>

          <div className="post-tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="post-tag">
                #{tag}
              </span>
            ))}
          </div>

          <div className="post-footer">
            <div className="reactions">
              <span>👍 {post.reactions.likes}</span>
              <span>👎 {post.reactions.dislikes}</span>
            </div>
            <div className="views">👁️ {post.views} views</div>
          </div>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
      <h1>Комментарии</h1>
      {comments?.map((com) => (
        <h3 key={com.id}>{com.body}</h3>
      ))}
    </div>
  )
}

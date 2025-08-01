import Post from './Post'

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>No posts!</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((postItem, index) => (
        <Post
          number={index + 1}
          post={postItem}
          key={postItem.id}
          remove={remove}
        />
      ))}
    </div>
  )
}

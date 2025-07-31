import { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import { useMemo } from 'react'
import PostFilter from './components/PostFilter'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JS - Programming language' },
    { id: 2, title: 'JavaScript2', body: 'JS - Programming language' },
    { id: 3, title: 'JavaScript3', body: 'JS - Programming language' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ getSortedPosts')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort]?.localeCompare(b[filter.sort]),
      )
    }
    return posts
  }, [posts, filter.sort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    )
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0px' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {sortedAndSearchedPosts.length ? (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Posts list 1"
          remove={removePost}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts!</h1>
      )}
    </div>
  )
}

import { useState } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { usePost } from '../hooks/usePosts'
import { useEffect } from 'react'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../components/utils/pages'
import { usePagination } from '../hooks/usePaginatio'
import Pagination from '../components/UI/Pagination/Pagination'
import { useRef } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePost(posts, filter.sort, filter.query)
  const lastElement = useRef()
  const observer = useRef()
  const pages = usePagination(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, skip)
    setPosts([...posts, ...response.data.posts])
    const totalCount = response.data.total
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    if (isPostsLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && page < totalPages) {
        setPage((prev) => prev + 1)
      }
    })

    if (lastElement.current) {
      observer.current.observe(lastElement.current)
    }
  }, [isPostsLoading, totalPages, page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  useEffect(() => {
    setSkip((page - 1) * limit)
  }, [page, limit])

  useEffect(() => {
    fetchPosts(limit, skip)
  }, [skip])

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0px' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка: {postError.message}</h1>}
      <PostList
        posts={sortedAndSearchedPosts}
        title="Posts list 1"
        remove={removePost}
      />
      <div
        ref={lastElement}
        style={{ height: '20px', backgroundColor: 'red' }}
      ></div>
      {isPostsLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}

      <Pagination
        pages={pages}
        page={page}
        setPage={setPage}
        setSkip={setSkip}
        limit={limit}
      />
    </div>
  )
}

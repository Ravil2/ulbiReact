import { useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Post from './Post'
import React from 'react'

export default function PostList({ posts, title, remove }) {
  const nodeRefs = useRef([])

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>No posts!</h1>
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((postItem, index) => {
          if (!nodeRefs.current[index]) {
            nodeRefs.current[index] = React.createRef()
          }
          return (
            <CSSTransition
              key={postItem.id}
              timeout={500}
              classNames="post"
              nodeRef={nodeRefs.current[index]}
            >
              <div ref={nodeRefs.current[index]}>
                <Post number={index + 1} post={postItem} remove={remove} />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

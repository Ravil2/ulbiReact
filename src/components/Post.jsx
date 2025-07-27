export default function Post(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.descr}</div>
      </div>
      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  )
}

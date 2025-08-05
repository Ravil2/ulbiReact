import MyButton from "../button/MyButton"

export default function Pagination({ pages, page, setPage, setSkip, limit }) {
  return (
    <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
      {pages.map((p) => (
        <MyButton
          key={p}
          onClick={() => {
            setPage(p)
            setSkip((p - 1) * limit)
          }}
          style={{
            backgroundColor: page === p ? 'lightblue' : 'white',
          }}
        >
          {p}
        </MyButton>
      ))}
    </div>
  )
}

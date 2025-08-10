import Loader from './UI/Loader/Loader'

export default function Comments({ comments, isCommentLoading, commentError }) {
  if (commentError) {
    <h1>Ошибка: ${commentError.message}</h1>
  }

  return (
    <>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3
            style={{
              fontSize: '24px',
              color: '#333',
              borderBottom: '2px solid #eee',
              paddingBottom: '10px',
              marginBottom: '20px',
            }}
          >
            Комментарии
          </h3>

          {comments?.map((com) => (
            <div
              key={com.id}
              style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    color: '#555',
                    fontWeight: 'bold',
                  }}
                >
                  {com.user.fullName.charAt(0)}
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    {com.user.fullName}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '12px',
                      color: '#999',
                    }}
                  >
                    @{com.user.username}
                  </p>
                </div>
              </div>
              <p
                style={{
                  margin: '0 0 10px 0',
                  color: '#444',
                  lineHeight: '1.5',
                }}
              >
                {com.body}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    color: '#666',
                    fontSize: '14px',
                  }}
                >
                  {com.likes} likes
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

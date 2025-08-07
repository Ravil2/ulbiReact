export default function About() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
        color: '#2d3748',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(90deg, #4361ee, #3a0ca3)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        About Our Company
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#3a0ca3',
              marginBottom: '20px',
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              lineHeight: '1.6',
              color: '#4a5568',
            }}
          >
            We strive to create innovative digital solutions that empower
            businesses and individuals to achieve their goals through
            cutting-edge technology and user-centered design.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#3a0ca3',
              marginBottom: '20px',
            }}
          >
            Our Team
          </h2>
          <p
            style={{
              lineHeight: '1.6',
              color: '#4a5568',
            }}
          >
            A diverse group of passionate professionals including developers,
            designers and strategists working together to deliver exceptional
            results for our clients worldwide.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(67, 97, 238, 0.05)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px dashed rgba(67, 97, 238, 0.3)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#3a0ca3',
          }}
        >
          Our Values
        </h2>

        <ul
          style={{
            listStyle: 'none',
            padding: '0',
            display: 'grid',
            gap: '15px',
          }}
        >
          {['Innovation', 'Integrity', 'Excellence', 'Collaboration'].map(
            (value, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#4361ee',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#2d3748',
                  }}
                >
                  {value}
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}

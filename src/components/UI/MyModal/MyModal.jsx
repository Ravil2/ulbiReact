import cl from './MyModal.module.css'

export default function MyModal({ children, visible, setVisible }) {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <span
          style={{ fontWeight: 'bold', fontSize: '24px', color: '#373737ff' }}
        >
          Модальное окно
        </span>
        {children}
      </div>
    </div>
  )
}

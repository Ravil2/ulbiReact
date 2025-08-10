import { useRef, useEffect } from 'react'

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef()

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && canLoad) {
        callback()
      }
    })

    if (ref.current) {
      observer.current.observe(ref.current)
    }
  }, [isLoading, canLoad, callback])
}

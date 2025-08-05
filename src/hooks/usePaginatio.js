import { useMemo } from 'react'

export const usePagination = (totalPages) => {
  const memoizedPage = useMemo(() => {
    let pageArray = []
    for (let i = 0; i < totalPages; i++) {
      pageArray.push(i + 1)
    }
    return pageArray
  }, [totalPages])

  return memoizedPage
}

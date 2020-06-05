import { useState } from "react"

export type UsePromiseResponse<T> = {
  loading: boolean
  data: T | undefined
  error: Error | undefined
}

export const usePromise = <T>(promise: PromiseLike<T>): UsePromiseResponse<T> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  promise.then(
    (data) => {
      setData(data)
      setLoading(false)
    },
    (err: Error) => {
      setError(err)
      setLoading(false)
    },
  )

  return { loading, data, error }
}

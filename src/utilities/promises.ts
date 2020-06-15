import { useEffect, useState } from "react"

export type UsePromiseResponse<T> = {
  loading: boolean
  data?: T
  error?: Error
}

export const usePromise = <T>(task: () => PromiseLike<T>): UsePromiseResponse<T> => {
  const [state, setState] = useState<UsePromiseResponse<T>>({
    loading: false,
  })
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (!initialized) {
      task().then(
        (data: T) => {
          !cancelled &&
            setState({
              data,
              loading: false,
            })
        },
        (error: Error) => {
          !cancelled &&
            setState({
              error,
              loading: false,
            })
        },
      )
      setInitialized(true)
    }
    return (): void => {
      cancelled = true
    }
  }, [task, setState, initialized, setInitialized])

  return state
}

import { useEffect } from "react"

export const useScrollPosition = handler => {
  useEffect(() => {
    window.addEventListener("scroll", _ => watchCurrentPosition(), true)
  }, [])

  const watchCurrentPosition = () => handler(scrollTop())

  const scrollTop = () => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
  }
}

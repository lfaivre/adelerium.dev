import { useState, useEffect } from "react"

export function useWindowWidth() {
  function isClient() {
    return typeof window !== "undefined"
  }

  function getWindowWidth() {
    return isClient() ? window.innerWidth : undefined
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }
    function handleResize() {
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowWidth
}

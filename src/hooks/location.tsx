import { useState, useEffect } from "react"
import { useLocation } from "@reach/router"
import { SitePaths } from "../data/paths"
import { TPathname, TPathData, INDEX, PathDataHook } from "../types/paths"

export const usePathData = (): PathDataHook => {
  const location = useLocation()
  const [pathname, setPathname] = useState<TPathname>(INDEX)
  const [isIndex, setIsIndex] = useState<boolean>(true)
  const [pathData, setPathData] = useState<TPathData>(SitePaths[INDEX])
  const [isValidPath, setIsValidPath] = useState<boolean>(true)

  useEffect(() => {
    if (location === undefined || !(location.pathname in SitePaths)) {
      setIsValidPath(false)
      setIsIndex(false)
      return
    }
    const newPathname = location.pathname as TPathname
    setIsValidPath(true)
    setPathname(newPathname)
    setPathData(SitePaths[newPathname])
    newPathname === INDEX ? setIsIndex(true) : setIsIndex(false)
  }, [location.pathname])

  return { pathname, isIndex, pathData, isValidPath }
}

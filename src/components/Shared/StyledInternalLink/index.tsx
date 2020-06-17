import React, { useState, useEffect } from "react"

import { SitePaths, DefaultPath, errorPath } from "../../../data/paths"
import { TPathname } from "../../../types/paths"
import { InternalLinkDirection as ILD } from "../../../types/presentation"

import {
  InternalLink,
  Placeholder,
  InternalLinkWrapper,
  TitleTextWrapper,
  TitleText,
  PathInfoWrapper,
  PathText,
  Arrow,
} from "./styles"

interface Props {
  pathname: string
  direction: ILD
}

const StyledInternalLink = ({ pathname, direction }: Props) => {
  const [isUsingValidPathname, setIsUsingValidPathname] = useState(true)
  const [currentPath, setCurrentPath] = useState({ ...DefaultPath })

  useEffect(() => {
    if (!(pathname in SitePaths)) {
      setIsUsingValidPathname(false)
      return
    }
    const updatedPathname = pathname as TPathname
    setCurrentPath({
      pathname: updatedPathname,
      text: SitePaths[updatedPathname].text,
      previous: SitePaths[updatedPathname].previous,
      next: SitePaths[updatedPathname].next,
    })
  }, [pathname])

  const linkData = (direction: ILD) => {
    const pathnameFromProps =
      direction === ILD.Previous ? currentPath.previous : currentPath.next
    const text = SitePaths[pathnameFromProps].text
    return { pathnameFromProps, text }
  }

  return isUsingValidPathname &&
    linkData(direction).pathnameFromProps !== currentPath.pathname ? (
    <InternalLink to={linkData(direction).pathnameFromProps}>
      <InternalLinkWrapper _direction={direction}>
        <TitleTextWrapper _direction={direction}>
          <TitleText _direction={direction}>
            {direction === ILD.Previous ? "Previous" : "Next"}
          </TitleText>
        </TitleTextWrapper>
        <PathInfoWrapper>
          {direction === ILD.Previous ? <Arrow _direction={direction} /> : null}
          <PathText _direction={direction}>{linkData(direction).text}</PathText>
          {direction === ILD.Next ? <Arrow _direction={direction} /> : null}
        </PathInfoWrapper>
      </InternalLinkWrapper>
    </InternalLink>
  ) : (
    <Placeholder></Placeholder>
  )
}

export default StyledInternalLink

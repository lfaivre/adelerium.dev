import React, { useState, useEffect } from "react"
import { LocationContext } from "reach__router"

import { SitePaths, DefaultPath } from "../../../data/paths"
import { TPathname, INDEX } from "../../../types/paths"
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

interface Props extends LocationContext {
  direction: ILD
}

const StyledInternalLink = ({ location, direction }: Props) => {
  const [currentPath, setCurrentPath] = useState({
    ...DefaultPath,
  })

  useEffect(() => {
    const pathname =
      (location.pathname as TPathname) || SitePaths[INDEX].pathname
    setCurrentPath({
      pathname,
      text: SitePaths[pathname].text,
      previous: SitePaths[pathname].previous,
      next: SitePaths[pathname].next,
    })
  }, [location.pathname])

  const linkData = (direction: ILD) => {
    const pathname =
      direction === ILD.Previous ? currentPath.previous : currentPath.next
    const text = SitePaths[pathname].text
    return { pathname, text }
  }

  return linkData(direction).pathname !== currentPath.pathname ? (
    <InternalLink to={linkData(direction).pathname}>
      <InternalLinkWrapper _direction={direction}>
        <TitleTextWrapper _direction={direction}>
          <TitleText _direction={direction}>
            {direction === ILD.Previous ? "Previous." : "Next."}
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

import React, { useState, useEffect } from "react"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { SitePaths, DefaultPath } from "../../data/paths"
import { TPathname } from "../../types/paths"
import { InternalLinkDirection as ILD } from "../../types/presentation"

import StyledInternalLink from "../Shared/StyledInternalLink"

import { HeaderWrapper, TitleWrapper, Title } from "./styles"

interface Props {
  pathname: string
}

const Header = ({ pathname }: Props) => {
  const [title, setTitle] = useState(DefaultPath.text)

  useEffect(() => {
    const updatedTitle =
      SitePaths[pathname as TPathname].text || DefaultPath.text
    setTitle(updatedTitle)
  })

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>{`${title}.`}</Title>
      </TitleWrapper>
      <StyledInternalLink pathname={pathname} direction={ILD.Next} />
    </HeaderWrapper>
  )
}

export default Header

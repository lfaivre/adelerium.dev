import React from "react"
import { LocationContext } from "reach__router"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { SitePaths } from "../../data/paths"
import { TPathname } from "../../types/paths"
import { InternalLinkDirection } from "../../types/presentation"

import StyledInternalLink from "../Shared/StyledInternalLink"

import { HeaderWrapper, TitleWrapper, Title } from "./styles"

interface Props extends LocationContext {}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>{`${
          SitePaths[props.location.pathname as TPathname].text
        }.`}</Title>
      </TitleWrapper>
      <StyledInternalLink {...props} direction={InternalLinkDirection.Next} />
    </HeaderWrapper>
  )
}

export default Header

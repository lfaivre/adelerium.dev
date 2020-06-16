import React from "react"
import { LocationContext } from "reach__router"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { pathData, InternalLinkDirection } from "../../data/routes-temp"

import StyledInternalLink from "../StyledInternalLink"

import { HeaderWrapper, TitleWrapper, Title } from "./styles"

interface Props extends LocationContext {}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>{`${pathData[props.location.pathname].text}.`}</Title>
      </TitleWrapper>
      <StyledInternalLink {...props} direction={InternalLinkDirection.Next} />
    </HeaderWrapper>
  )
}

export default Header

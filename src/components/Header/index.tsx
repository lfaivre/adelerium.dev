import React from "react"
import StyledInternalLink from "../Shared/StyledInternalLink"

import { INDEX } from "../../types/paths"
import { PathDataHook } from "../../types/paths"
import { InternalLinkDirection as ILD } from "../../types/presentation"

import { HeaderWrapper, InternalLink, TitleWrapper, Title } from "./styles"

interface Props extends PathDataHook {}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <InternalLink to={INDEX}>
        <TitleWrapper>
          <Title>{`${props.pathData.text}.`}</Title>
        </TitleWrapper>
      </InternalLink>
      <StyledInternalLink {...props} direction={ILD.Next} />
    </HeaderWrapper>
  )
}

export default Header

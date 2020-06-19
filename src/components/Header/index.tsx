import React from "react"
import StyledInternalLink from "../Shared/StyledInternalLink"

import { PathDataHook } from "../../types/paths"
import { InternalLinkDirection as ILD } from "../../types/presentation"

import { HeaderWrapper, TitleWrapper, Title } from "./styles"

interface Props extends PathDataHook {}

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <Title>{`${props.pathData.text}.`}</Title>
      </TitleWrapper>
      <StyledInternalLink {...props} direction={ILD.Next} />
    </HeaderWrapper>
  )
}

export default Header

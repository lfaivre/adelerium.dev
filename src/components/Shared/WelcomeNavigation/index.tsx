import React from "react"

import StyledInternalLink from "../StyledInternalLink"

import { ABOUT } from "../../../types/paths"
import { InternalLinkDirection as ILD } from "../../../types/presentation"

import { WelcomeNavigationWrapper, TitleWrapper, Title } from "./styles"

const WelcomeNavigation = () => {
  return (
    <WelcomeNavigationWrapper>
      <TitleWrapper>
        <Title>{`Welcome.`}</Title>
      </TitleWrapper>
      <StyledInternalLink pathname={ABOUT} direction={ILD.Next} />
    </WelcomeNavigationWrapper>
  )
}

export default WelcomeNavigation

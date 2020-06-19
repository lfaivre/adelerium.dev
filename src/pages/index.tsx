import React from "react"
import { PageProps } from "gatsby"
import { BackgroundImage as BI } from "../types/presentation"

import SEO from "../components/Shared/SEO"
import SideBar from "../components/SideBar"
import BackgroundImage from "../components/Shared/BackgroundImage"

import { IndexPageContentWrapper, NavigatorWrapper } from "../styles/pages"

const IndexPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Home" />
      <NavigatorWrapper>
        <SideBar />
      </NavigatorWrapper>
      <IndexPageContentWrapper>
        <BackgroundImage
          screenSize={BI.Desktop}
          opacity={true}
        ></BackgroundImage>
      </IndexPageContentWrapper>
    </>
  )
}

export default IndexPage

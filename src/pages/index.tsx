import React from "react"
import { PageProps } from "gatsby"
import { BackgroundImage as BI } from "../types/presentation"

import SEO from "../components/Shared/SEO"
import SideBar from "../components/SideBar"

import {
  NavigatorWrapper,
  IndexPageContentWrapper,
  IndexPageBackgroundImage,
} from "../styles/pages"

const IndexPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Home" />
      <NavigatorWrapper>
        <SideBar />
      </NavigatorWrapper>
      <IndexPageContentWrapper>
        {/* <IndexPageBackgroundImage
          screenSize={BI.Desktop}
          opacity={true}
        ></IndexPageBackgroundImage> */}
      </IndexPageContentWrapper>
    </>
  )
}

export default IndexPage

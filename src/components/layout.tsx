import React, { useRef } from "react"
import { Location } from "@reach/router"
import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"

import {
  LayoutWrapper,
  SideBarWrapper,
  ContentWrapper,
  HeaderWrapper,
  PageWrapperStatic,
  PageWrapperVerticalScroll,
  MainWrapper,
  ReturnButtonWrapper,
  ReturnButton,
  ReturnButtonIndicator,
} from "./Layout/styles"

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const scrollSectionRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (scrollSectionRef.current) {
      scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  return (
    <Location>
      {locationProps => (
        <LayoutWrapper>
          <SideBarWrapper>
            <SideBar />
          </SideBarWrapper>
          <ContentWrapper>
            <HeaderWrapper>
              <Header {...locationProps} />
            </HeaderWrapper>
            <PageWrapperStatic>
              <PageWrapperVerticalScroll ref={scrollSectionRef}>
                <MainWrapper>{children}</MainWrapper>
                <ReturnButtonWrapper>
                  <ReturnButton onClick={handleScroll}>
                    <ReturnButtonIndicator isIndicator></ReturnButtonIndicator>
                    <ReturnButtonIndicator></ReturnButtonIndicator>
                  </ReturnButton>
                </ReturnButtonWrapper>
                <Footer {...locationProps} />
              </PageWrapperVerticalScroll>
            </PageWrapperStatic>
          </ContentWrapper>
        </LayoutWrapper>
      )}
    </Location>
  )
}

export default Layout

import React, { useEffect, useRef } from "react"
import { PageProps } from "gatsby"

import { useAppState } from "../../state/app-context"
import { usePathData } from "../../hooks/location"

import SideBar from "../SideBar"
import Header from "../Header"
import Footer from "../Footer"

import {
  SCREEN_SIZE,
  pathsWithImgBgsDesktop,
  pathsWithImgBgsMobile,
} from "../../data/presentation"
import { TPathname } from "../../types/paths"

import "../../styles/font-awesome"
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
  StyledBackgroundImage,
} from "./styles"

interface ConditionalWrapperProps {
  windowWidth: number
  pathname: TPathname
  children: React.ReactNode
}

const ConditionalWrapper = ({
  windowWidth,
  pathname,
  children,
}: ConditionalWrapperProps) => {
  return windowWidth < SCREEN_SIZE.MD ? (
    pathname in pathsWithImgBgsMobile ? (
      <StyledBackgroundImage>{children}</StyledBackgroundImage>
    ) : (
      <>{children}</>
    )
  ) : pathname in pathsWithImgBgsDesktop ? (
    <StyledBackgroundImage>{children}</StyledBackgroundImage>
  ) : (
    <>{children}</>
  )
}

const Layout = ({ children }: PageProps) => {
  const pathData = usePathData()
  const { windowWidth } = useAppState()
  const scrollSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    handleScroll()
  }, [pathData.pathname])

  const handleScroll = () => {
    if (scrollSectionRef.current) {
      scrollSectionRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }

  return (
    <LayoutWrapper>
      {!(windowWidth < SCREEN_SIZE.XL) && (
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
      )}
      <ContentWrapper>
        {!pathData.isIndex && (
          <HeaderWrapper>
            <Header {...pathData} />
          </HeaderWrapper>
        )}
        <PageWrapperStatic>
          <ConditionalWrapper
            windowWidth={windowWidth}
            pathname={pathData.pathname}
          >
            <>
              <PageWrapperVerticalScroll ref={scrollSectionRef}>
                <MainWrapper>{children}</MainWrapper>
                {!pathData.isIndex && (
                  <ReturnButtonWrapper>
                    <ReturnButton onClick={handleScroll}>
                      <ReturnButtonIndicator></ReturnButtonIndicator>
                      <ReturnButtonIndicator></ReturnButtonIndicator>
                    </ReturnButton>
                  </ReturnButtonWrapper>
                )}
                {!pathData.isIndex && <Footer {...pathData} />}
              </PageWrapperVerticalScroll>
            </>
          </ConditionalWrapper>
        </PageWrapperStatic>
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout

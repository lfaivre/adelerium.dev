import React, { useEffect, useRef } from "react"
import { PageProps } from "gatsby"

import { useAppState, useAppDispatch } from "../../state/app-context"
import { usePathData } from "../../hooks/location"

import SideBar from "../SideBar"
import Header from "../Header"
import Footer from "../Footer"
import BackgroundImage from "../../components/Shared/BackgroundImage"

import {
  SCREEN_SIZE,
  pathsWithImgBgsDesktop,
  pathsWithImgBgsMobile,
} from "../../data/presentation"

import "../../styles/font-awesome"
import {
  LayoutWrapper,
  SideBarWrapper,
  ContentWrapper,
  HeaderWrapper,
  MainWrapper,
  ReturnButtonWrapper,
  ReturnButton,
  ReturnButtonIndicator,
  FooterWrapper,
} from "./styles"

const Layout = ({ children }: PageProps) => {
  const pathData = usePathData()
  const { windowWidth, headerHeight } = useAppState()
  const dispatch = useAppDispatch()
  const headerRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)
  const returnRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    headerRef.current &&
      dispatch({
        type: "SET_HEADER_HEIGHT",
        headerHeight: headerRef.current.clientHeight,
      })
    footerRef.current &&
      dispatch({
        type: "SET_FOOTER_HEIGHT",
        footerHeight: footerRef.current.clientHeight,
      })
    returnRef.current &&
      dispatch({
        type: "SET_RETURN_HEIGHT",
        returnHeight: returnRef.current.clientHeight,
      })
  }, [pathData.pathname, windowWidth])

  useEffect(() => {
    handleScroll()
  }, [pathData.pathname])

  const handleScroll = () => {
    window && window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <LayoutWrapper>
      {windowWidth >= SCREEN_SIZE.XL && (
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
      )}
      <ContentWrapper>
        {!pathData.isIndex && (
          <HeaderWrapper ref={headerRef}>
            <Header {...pathData} />
          </HeaderWrapper>
        )}
        {((windowWidth < SCREEN_SIZE.MD &&
          pathData.pathname in pathsWithImgBgsMobile) ||
          (windowWidth >= SCREEN_SIZE.MD &&
            pathData.pathname in pathsWithImgBgsDesktop)) && (
          <BackgroundImage
            headerHeight={headerHeight}
            isIndex={pathData.isIndex}
          />
        )}
        <MainWrapper headerHeight={headerHeight} isIndex={pathData.isIndex}>
          {children}
        </MainWrapper>
        {!pathData.isIndex && (
          <ReturnButtonWrapper ref={returnRef}>
            <ReturnButton onClick={handleScroll}>
              <ReturnButtonIndicator></ReturnButtonIndicator>
              <ReturnButtonIndicator></ReturnButtonIndicator>
            </ReturnButton>
          </ReturnButtonWrapper>
        )}
        {!pathData.isIndex && (
          <FooterWrapper ref={footerRef}>
            <Footer {...pathData} />
          </FooterWrapper>
        )}
      </ContentWrapper>
    </LayoutWrapper>
  )
}

export default Layout

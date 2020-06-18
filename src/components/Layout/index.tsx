import React, { useState, useEffect, useRef } from "react"
import { Location } from "@reach/router"
import { PageProps } from "gatsby"

import SideBar from "../SideBar"
import Header from "../Header"
import Footer from "../Footer"

import { INDEX } from "../../types/paths"

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
} from "./styles"

const Layout = ({ location, children }: PageProps) => {
  const [pathnameIsIndex, setPathnameIsIndex] = useState(true)
  const scrollSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    location.pathname === INDEX
      ? setPathnameIsIndex(false)
      : setPathnameIsIndex(true)
    handleScroll()
  }, [location.pathname])

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
            {pathnameIsIndex ? (
              <HeaderWrapper>
                <Header pathname={locationProps.location.pathname} />
              </HeaderWrapper>
            ) : null}
            <PageWrapperStatic>
              <PageWrapperVerticalScroll ref={scrollSectionRef}>
                <MainWrapper>{children}</MainWrapper>
                {pathnameIsIndex ? (
                  <ReturnButtonWrapper>
                    <ReturnButton onClick={handleScroll}>
                      <ReturnButtonIndicator
                        isIndicator
                      ></ReturnButtonIndicator>
                      <ReturnButtonIndicator></ReturnButtonIndicator>
                    </ReturnButton>
                  </ReturnButtonWrapper>
                ) : null}
                {pathnameIsIndex ? (
                  <Footer pathname={locationProps.location.pathname} />
                ) : null}
              </PageWrapperVerticalScroll>
            </PageWrapperStatic>
          </ContentWrapper>
        </LayoutWrapper>
      )}
    </Location>
  )
}

export default Layout

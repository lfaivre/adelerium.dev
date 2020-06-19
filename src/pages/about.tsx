import React, { useEffect, useState } from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import AboutSection from "../components/AboutPage/AboutSection"
import BackgroundImage from "../components/Shared/BackgroundImage"

import { ScreenSize } from "../types/presentation"
import { SCREEN_SIZE } from "../data/presentation"
import { AboutSectionData } from "../data/about"
import {
  AboutPageContentWrapperDesktop,
  AboutPageContentWrapperMobile,
} from "../styles/pages"
import { useWindowWidth } from "../hooks/screen-size"
import { BackgroundImage as BI } from "../types/presentation"

const AboutPage = (props: PageProps) => {
  const windowWidth = useWindowWidth()
  console.log("WINDOW WIDTH FROM HOOK:", windowWidth)

  return (
    <>
      <SEO title="About" />
      {windowWidth !== undefined ? (
        windowWidth < SCREEN_SIZE.XL ? (
          <AboutPageContentWrapperMobile></AboutPageContentWrapperMobile>
        ) : (
          <AboutPageContentWrapperDesktop>
            {AboutSectionData.sections.map(sectionData => {
              return (
                <AboutSection
                  sectionData={sectionData}
                  count={AboutSectionData.count()}
                  key={sectionData.order}
                />
              )
            })}
          </AboutPageContentWrapperDesktop>
        )
      ) : (
        <></>
      )}
    </>
  )
}

export default AboutPage

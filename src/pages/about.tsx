import React from "react"

import SEO from "../components/Shared/SEO"
import AboutSection from "../components/AboutPage/AboutSection"

import { useAppState } from "../state/app-context"

import { SCREEN_SIZE } from "../data/presentation"
import { AboutSectionData } from "../data/about"

import {
  AboutPageContentWrapperDesktop,
  AboutPageContentWrapperMobile,
} from "../styles/pages"

const AboutPage = () => {
  const { windowWidth } = useAppState()

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

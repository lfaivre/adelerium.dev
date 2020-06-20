import React from "react"

import SEO from "../components/Shared/SEO"
import AboutSection from "../components/AboutPage/AboutSection"

import { AboutSectionData } from "../data/about"

import { AboutPageContentWrapper } from "../styles/pages"

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <AboutPageContentWrapper>
        {AboutSectionData.sections.map(sectionData => {
          return (
            <AboutSection
              sectionData={sectionData}
              count={AboutSectionData.count()}
              key={sectionData.order}
            />
          )
        })}
      </AboutPageContentWrapper>
    </>
  )
}

export default AboutPage

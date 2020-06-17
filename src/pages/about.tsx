import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import AboutSection from "../components/AboutPage/AboutSection"

import { AboutSectionData } from "../data/about"
import { PageContentWrapper } from "../styles/pages"

const AboutPage = (props: PageProps) => {
  return (
    <>
      <SEO title="About" />
      <PageContentWrapper>
        {AboutSectionData.sections.map(sectionData => {
          return (
            <AboutSection
              sectionData={sectionData}
              count={AboutSectionData.count()}
              key={sectionData.order}
            />
          )
        })}
      </PageContentWrapper>
    </>
  )
}

export default AboutPage

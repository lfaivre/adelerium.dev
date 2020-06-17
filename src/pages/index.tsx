import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import AboutSection from "../components/AboutPage/AboutSection"

import { AboutSectionData } from "../data/about"
import { PageContentWrapper } from "../styles/pages"

const IndexPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Home" />
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

export default IndexPage

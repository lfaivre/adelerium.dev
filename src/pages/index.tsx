import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import SideBar from "../components/SideBar"
import AboutSection from "../components/AboutPage/AboutSection"

import { AboutSectionData } from "../data/about"
import { IndexPageContentWrapper } from "../styles/pages"
import { ResponsiveUpToXL, ResponsiveXLAbove } from "../styles/responsive"

const IndexPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Home" />
      <IndexPageContentWrapper>
        <ResponsiveUpToXL>
          <SideBar />
        </ResponsiveUpToXL>
        <ResponsiveXLAbove>
          {AboutSectionData.sections.map(sectionData => {
            return (
              <AboutSection
                sectionData={sectionData}
                count={AboutSectionData.count()}
                key={sectionData.order}
              />
            )
          })}
        </ResponsiveXLAbove>
      </IndexPageContentWrapper>
    </>
  )
}

export default IndexPage

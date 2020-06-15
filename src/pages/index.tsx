import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import AboutSection from "../components/about/AboutSection"

import { AboutSectionData } from "../data/about-temp"

const IndexPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Home" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {AboutSectionData.sections.map(sectionData => {
          return (
            <AboutSection
              sectionData={sectionData}
              count={AboutSectionData.count()}
              key={sectionData.order}
            />
          )
        })}
      </div>
    </>
  )
}

export default IndexPage

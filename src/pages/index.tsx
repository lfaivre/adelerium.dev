import React, { useEffect } from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import AboutSection from "../components/AboutSection"

import { AboutSectionData } from "../data/temp"

const IndexPage = (props: PageProps) => {
  useEffect(() => {
    console.log("ABOUT SECTION DATA: ", AboutSectionData)
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div className="test w-full px-8 py-16 bg-charcoal">
        {AboutSectionData.map(sectionData => {
          return (
            <AboutSection sectionData={sectionData} key={sectionData.order} />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

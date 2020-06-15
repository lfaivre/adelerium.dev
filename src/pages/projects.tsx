import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const ProjectsPage = (props: PageProps) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="w-full px-8 py-16 bg-charcoal"></div>
    </Layout>
  )
}

export default ProjectsPage

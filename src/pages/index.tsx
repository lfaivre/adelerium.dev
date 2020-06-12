import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
    <div className="test"></div>
  </Layout>
)

export default IndexPage

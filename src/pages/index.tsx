import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: PageProps) => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage

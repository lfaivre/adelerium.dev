import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = (props: PageProps) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Hey, the party is in the back.</h1>
    <Link to="/">Return</Link>
  </Layout>
)

export default NotFoundPage

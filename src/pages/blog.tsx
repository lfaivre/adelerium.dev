import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"

const BlogPage = (props: PageProps) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="test w-full px-8 py-16 bg-charcoal"></div>
    </Layout>
  )
}

export default BlogPage

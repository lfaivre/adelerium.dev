import React from "react"
import { PageProps, Link } from "gatsby"

import SEO from "../components/Shared/SEO"

const NotFoundPage = (props: PageProps) => (
  <>
    <SEO title="404: Not found" />
    <h1>Hey, the party is in the back.</h1>
    <Link to="/">Return</Link>
  </>
)

export default NotFoundPage

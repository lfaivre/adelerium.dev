import React from "react"
import { PageProps, Link } from "gatsby"

import SEO from "../components/Shared/SEO"
import Message from "../components/404Page/Message"

import { PageContentWrapper } from "../styles/pages"

const NotFoundPage = (props: PageProps) => {
  return (
    <>
      <SEO title="404: Not found" />
      <PageContentWrapper>
        <Message />
      </PageContentWrapper>
    </>
  )
}

export default NotFoundPage

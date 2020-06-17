import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import Post from "../components/BlogPage/Post"

import { ContentfulBlogData } from "../data/blog"
import { PageContentWrapper } from "../styles/pages"

const BlogPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Blogs" />
      <PageContentWrapper>
        {ContentfulBlogData.posts.map(blogPost => {
          return <Post blogPost={blogPost} key={blogPost.id} />
        })}
      </PageContentWrapper>
    </>
  )
}

export default BlogPage

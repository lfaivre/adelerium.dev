import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import Post from "../components/BlogPage/Post"

import { ContentfulBlogData } from "../data/blog"
import { BlogPageContentWrapper } from "../styles/pages"

const BlogPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Blogs" />
      <BlogPageContentWrapper>
        {ContentfulBlogData.posts.map(blogPost => {
          return <Post blogPost={blogPost} key={blogPost.id} />
        })}
      </BlogPageContentWrapper>
    </>
  )
}

export default BlogPage

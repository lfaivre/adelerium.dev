import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import Post from "../components/BlogPage/Post"

import { ContentfulBlogData } from "../data/blog"

const BlogPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Blogs" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {ContentfulBlogData.posts.map(blogPost => {
          return <Post blogPost={blogPost} key={blogPost.id} />
        })}
      </div>
    </>
  )
}

export default BlogPage

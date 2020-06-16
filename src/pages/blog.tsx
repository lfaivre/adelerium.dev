import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/Shared/SEO"
import BlogPost from "../components/blog/BlogPost"

import { BlogPostsData } from "../data/blog-temp"

const BlogPage = (props: PageProps) => {
  return (
    <>
      <SEO title="Blogs" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {BlogPostsData.posts.map(postData => {
          return <BlogPost postData={postData} key={postData.id} />
        })}
      </div>
    </>
  )
}

export default BlogPage

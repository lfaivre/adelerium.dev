import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import BlogPost from "../components/blog/BlogPost"

import { BlogPostsData } from "../data/blog-temp"

const BlogPage = (props: PageProps) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {BlogPostsData.posts.map(postData => {
          return <BlogPost postData={postData} key={postData.id} />
        })}
      </div>
    </Layout>
  )
}

export default BlogPage

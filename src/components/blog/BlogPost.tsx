import React from "react"

import { BlogPostAttributes } from "../../data/blog-temp"

interface Props {
  postData: BlogPostAttributes
}

const BlogPost = ({ postData }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-row justify-center items-center">
        <p className="text-offwhite text-5xl playfair-display font-bold">
          {postData.title}
        </p>
      </div>
      {postData.subtitle ? (
        <div className="mt-4 w-full flex flex-row justify-center items-center">
          <p className="text-offpink text-2xl playfair-display font-bold">
            {postData.subtitle}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default BlogPost

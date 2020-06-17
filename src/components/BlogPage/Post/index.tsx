import React from "react"

import { BlogPost } from "../../../types/blog"

import {
  BlogPostWrapper,
  TitleWrapper,
  Title,
  SubtitleWrapper,
  Subtitle,
} from "./styles"

interface Props {
  blogPost: BlogPost
}

const Post = ({ blogPost }: Props) => {
  return (
    <BlogPostWrapper>
      <TitleWrapper>
        <Title>{blogPost.title}</Title>
      </TitleWrapper>
      {blogPost.subtitle ? (
        <SubtitleWrapper>
          <Subtitle>{blogPost.subtitle}</Subtitle>
        </SubtitleWrapper>
      ) : null}
    </BlogPostWrapper>
  )
}

export default Post

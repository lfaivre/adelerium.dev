import React from "react"

import { DefaultPath } from "../../../data/paths"

import {
  MessageWrapper,
  TitleWrapper,
  Title,
  LinkWrapper,
  InternalLink,
} from "./styles"

interface Props {}

const Post = () => {
  return (
    <MessageWrapper>
      <TitleWrapper>
        <Title>Page not found.</Title>
      </TitleWrapper>
      <LinkWrapper>
        {/* <InternalLink to={DefaultPath.pathname}>Return Home</InternalLink> */}
      </LinkWrapper>
    </MessageWrapper>
  )
}

export default Post

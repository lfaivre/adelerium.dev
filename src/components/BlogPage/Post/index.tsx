import React from 'react';

import { PostProps } from './types';
import {
  BlogPostWrapper,
  TitleWrapper,
  Title,
  SubtitleWrapper,
  Subtitle,
} from './styles';

export const Post = ({ blogPost }: PostProps): JSX.Element => {
  return (
    <BlogPostWrapper>
      <TitleWrapper>
        <Title>{blogPost.title}</Title>
      </TitleWrapper>
      {blogPost.subtitle.length !== 0 ? (
        <SubtitleWrapper>
          <Subtitle>{blogPost.subtitle}</Subtitle>
        </SubtitleWrapper>
      ) : (
        <></>
      )}
    </BlogPostWrapper>
  );
};

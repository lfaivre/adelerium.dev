import React from 'react';

import { useAppState } from '../state/app-context';

import SEO from '../components/Shared/SEO';
import Post from '../components/BlogPage/Post';

import { ContentfulBlogData } from '../data/blog';
import { BlogPageContentWrapper } from '../styles/pages';

const BlogPage = () => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  return (
    <>
      <SEO title="Blog" />
      <BlogPageContentWrapper staticsHeight={staticsHeight}>
        {ContentfulBlogData.posts.map((blogPost) => (
          <Post blogPost={blogPost} key={blogPost.id} />
        ))}
      </BlogPageContentWrapper>
    </>
  );
};

export default BlogPage;

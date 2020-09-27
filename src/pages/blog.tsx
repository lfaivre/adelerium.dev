import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { useAppState } from '../state/app-context';

import { SEO } from '../components/Shared/SEO';
import { Post } from '../components/BlogPage/Post';

import { PageQueryData } from '../types/blog';
import { ContentfulBlogData } from '../data/blog';
import { BlogPageContentWrapper } from '../shared/styles/pages';

const BlogPage = ({ data, location }: PageProps): JSX.Element => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="Blog" pathname={location.pathname} image={metaImage} />
      <BlogPageContentWrapper staticsHeight={staticsHeight}>
        {ContentfulBlogData.posts.map((blogPost) => (
          <Post blogPost={blogPost} key={blogPost.id} />
        ))}
      </BlogPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default BlogPage;

export const pageQuery = graphql`
  query BlogPageQuery {
    contentfulAsset(title: { eq: "Blog Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;

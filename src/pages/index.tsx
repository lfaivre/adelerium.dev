import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import Img from 'gatsby-image';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { Header } from '../components/Global/Layout/DefaultView/Header';

import { PageQueryData } from '../shared/types/pages/home';

import { FlexRowWrapper } from '../shared/styles/wrappers';

const IndexPage = ({ data, location }: PageProps): ReactElement => {
  const metaImage = (data as PageQueryData).metaImage.fixed;
  const backgroundImage = (data as PageQueryData).backgroundImage.childImageSharp.fluid;

  return (
    <FlexRowWrapper
      alignItems="items-center"
      justifyContent="justify-center"
      backgroundColor="bg-offwhite"
      tw="relative w-full h-screen"
    >
      <SEO title="Home" pathname={location.pathname} image={metaImage} />
      <Img
        fluid={backgroundImage}
        draggable={false}
        tw="absolute top-0 left-0 opacity-75 z-0 w-full h-full object-cover object-center select-none"
      />
      <FlexRowWrapper
        alignItems="items-start"
        justifyContent="justify-center"
        backgroundColor="bg-offwhite"
        tw="absolute z-10 w-full"
      >
        <FlexRowWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          tw="w-full max-w-screen-md"
        >
          <Header />
        </FlexRowWrapper>
      </FlexRowWrapper>
    </FlexRowWrapper>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    metaImage: contentfulAsset(title: { eq: "Home Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
    backgroundImage: file(relativePath: { eq: "waves-1680.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1680, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

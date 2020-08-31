import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { BackgroundImageProps, GraphQLStaticQuery } from './types';
import { StyledBackgroundImage } from './styles';

// @todo Use regular Gatsby Image component

export const BackgroundImage = ({
  headerHeight,
  isIndex,
}: BackgroundImageProps): JSX.Element => {
  const backgroundImageQuery: GraphQLStaticQuery = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "waves-1680.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1680, grayscale: true, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <StyledBackgroundImage
      fluid={backgroundImageQuery.backgroundImage.childImageSharp.fluid}
      preserveStackingContext
      headerHeight={headerHeight}
      isIndex={isIndex}
    />
  );
};

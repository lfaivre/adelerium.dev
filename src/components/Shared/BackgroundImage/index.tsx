import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledBackgroundImage } from './styles';

interface Props {
  headerHeight: number;
  isIndex: boolean;
}

const BackgroundImage = ({ headerHeight, isIndex }: Props) => {
  const imageQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "waves-1680.jpg" }) {
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
      fluid={imageQuery.background.childImageSharp.fluid}
      preserveStackingContext={true}
      headerHeight={headerHeight}
      isIndex={isIndex}
    />
  );
};

export default BackgroundImage;

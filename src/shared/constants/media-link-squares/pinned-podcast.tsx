import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';

import { MediaLink } from '../../../components/AboutPage/MediaLinkSquare/types';

type Fluid = { fluid: FluidObject };
type ChildImageSharp = { childImageSharp: Fluid };
type ImageQueryType = { backgroundImage: ChildImageSharp };

const ImageQuery = (): FluidObject => {
  const data: ImageQueryType = useStaticQuery(
    graphql`
      query ImageQuery {
        backgroundImage: file(relativePath: { eq: "media-link-squares/pinned-podcast.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 540, quality: 100, grayscale: false) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data.backgroundImage.childImageSharp.fluid;
};

export const MediaLinkData: MediaLink = {
  description: `Pinned Podcast`,
  date: `October 2, 2020`,
  title: `History Hyenas`,
  subTitle: `Yannis Pappas & Chris Distefano`,
  externalLink: `https://www.youtube.com/c/HistoryHyenas`,
  Icon: <FontAwesomeIcon icon={faYoutube} size="2x" />,
  backgroundImageQuery: ImageQuery,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    backgroundColor: `var(--color-Charcoal)`,
  },
};

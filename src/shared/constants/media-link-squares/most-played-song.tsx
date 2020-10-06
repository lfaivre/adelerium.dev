import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';

import { MediaLink } from '../../../components/AboutPage/MediaLinkSquare/types';

type Fluid = { fluid: FluidObject };
type ChildImageSharp = { childImageSharp: Fluid };
type ImageQueryType = { backgroundImage: ChildImageSharp };

const ImageQuery = (): FluidObject => {
  const data: ImageQueryType = useStaticQuery(
    graphql`
      query MostPlayedSongBackgroundImage {
        backgroundImage: file(relativePath: { eq: "media-link-squares/most-played-song.jpeg" }) {
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
  description: `Most Played Song`,
  date: `This Week`,
  title: `Ew`,
  subTitle: `Joji`,
  externalLink: `https://music.apple.com/us/album/ew/1506574436?i=1506574437`,
  Icon: <FontAwesomeIcon icon={faApple} size="2x" />,
  backgroundImageQuery: ImageQuery,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    backgroundColor: `var(--color-Charcoal)`,
  },
};

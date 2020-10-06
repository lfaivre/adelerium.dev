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
      query PinnedPlaylistBackgroundImage {
        backgroundImage: file(relativePath: { eq: "media-link-squares/pinned-playlist.jpeg" }) {
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
  description: `Pinned Playlist`,
  date: `October 2, 2020`,
  title: `that good`,
  subTitle: `@lorenzofaivre`,
  externalLink: `https://music.apple.com/us/playlist/that-good/pl.u-55D662lU8dzeb9B`,
  Icon: <FontAwesomeIcon icon={faApple} size="2x" />,
  backgroundImageQuery: ImageQuery,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    backgroundColor: `var(--color-Charcoal)`,
  },
};

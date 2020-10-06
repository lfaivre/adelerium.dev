import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';

import { MediaLink } from '../../../components/AboutPage/MediaLinkSquare/types';

type Fluid = { fluid: FluidObject };
type ChildImageSharp = { childImageSharp: Fluid };
type ImageQueryType = { backgroundImage: ChildImageSharp };

const ImageQuery = (): FluidObject => {
  const data: ImageQueryType = useStaticQuery(
    graphql`
      query PinnedSongBackgroundImage {
        backgroundImage: file(relativePath: { eq: "media-link-squares/pinned-song.jpg" }) {
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
  description: `Pinned Song`,
  date: `October 2, 2020`,
  title: `Luv Scars - Lil Uzi Vert (Luv Is Rage 2)`,
  subTitle: `4K WorldWide!`,
  externalLink: `https://soundcloud.com/4kworldwide/luv-scars-lil-uzi-vert-luv-is-rage-2`,
  Icon: <FontAwesomeIcon icon={faSoundcloud} size="2x" />,
  backgroundImageQuery: ImageQuery,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    backgroundColor: `var(--color-Charcoal)`,
  },
};

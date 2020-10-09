/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';
import { MediaLinkSquare } from '../components/AboutPage/MediaLinkSquare';

import { useAppState } from '../shared/hooks/global-state';

import { MinHeightScreenWrapper, FlexColumnWrapper } from '../shared/styles/wrappers';

import { PageQueryData } from '../shared/types/pages/about';

import { StaticIntroduction } from '../components/AboutPage/StaticIntroduction';
import { StaticLocation } from '../components/AboutPage/StaticLocation';
import { StaticResume } from '../components/AboutPage/StaticResume';

import {
  GITHUB_SOCIALLINK_DATA,
  FIGMA_SOCIALLINK_DATA,
  LINKEDIN_SOCIALLINK_DATA,
  GOOGLE_SOCIALLINK_DATA,
} from '../shared/constants/social-link-squares';
import {
  PINNED_PODCAST_MEDIALINK_DATA,
  PINNED_SONG_MEDIALINK_DATA,
  MOST_PLAYED_SONG_MEDIALINK_DATA,
  PINNED_PLAYLIST_MEDIALINK_DATA,
} from '../shared/constants/media-link-squares';

const AboutPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="About" pathname={pathname} image={metaImage} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          <div tw="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full">
            <StaticIntroduction />
            <SocialLinkSquare {...GITHUB_SOCIALLINK_DATA} />
          </div>
          <div tw="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full">
            <SocialLinkSquare {...FIGMA_SOCIALLINK_DATA} />
            <MediaLinkSquare {...PINNED_PLAYLIST_MEDIALINK_DATA} />
            <SocialLinkSquare {...FIGMA_SOCIALLINK_DATA} />
          </div>
          <div tw="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full">
            <MediaLinkSquare {...MOST_PLAYED_SONG_MEDIALINK_DATA} />
            <SocialLinkSquare {...FIGMA_SOCIALLINK_DATA} />
            <MediaLinkSquare {...PINNED_SONG_MEDIALINK_DATA} />
          </div>
          <div tw="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full">
            <StaticResume />
            <SocialLinkSquare {...LINKEDIN_SOCIALLINK_DATA} />
          </div>
          <div tw="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full">
            <SocialLinkSquare {...GOOGLE_SOCIALLINK_DATA} />
            <StaticLocation />
            <MediaLinkSquare {...PINNED_PODCAST_MEDIALINK_DATA} />
          </div>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    contentfulAsset(title: { eq: "About Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;

/* eslint-enable react/jsx-props-no-spreading */

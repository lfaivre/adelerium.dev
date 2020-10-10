import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import tw from 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';
import { MediaLinkSquare } from '../components/AboutPage/MediaLinkSquare';

import { useAppState } from '../shared/hooks/global-state';
import { useAllTileDimensions } from '../shared/hooks/useAllTileDimensions';

import { MinHeightScreenWrapper, FlexColumnWrapper } from '../shared/styles/wrappers';

import { PageQueryData } from '../shared/types/pages/about';

import { StaticIntroduction } from '../components/AboutPage/StaticIntroduction';
import { StaticLocation } from '../components/AboutPage/StaticLocation';
import { StaticResume } from '../components/AboutPage/StaticResume';

import { SCREEN_SIZE } from '../shared/constants/presentation';
import {
  socialLinks,
  GITHUB,
  FIGMA,
  LINKEDIN,
  GOOGLE,
} from '../shared/constants/social-link-squares';
import {
  mediaLinks,
  PINNED_PODCAST,
  PINNED_SONG,
  MOST_PLAYED_SONG,
  PINNED_PLAYLIST,
} from '../shared/constants/media-link-squares';

const TileRowWrapper = tw.div`flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full`;

const AboutPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const { 1: size1, 2: size2 } = useAllTileDimensions({ breakpoint: SCREEN_SIZE.MD });

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="About" pathname={pathname} image={metaImage} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          <TileRowWrapper>
            <StaticIntroduction dimensions={size2} />
            <SocialLinkSquare data={socialLinks[GITHUB]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <SocialLinkSquare data={socialLinks[FIGMA]} dimensions={size1} />
            <MediaLinkSquare data={mediaLinks[PINNED_PLAYLIST]} dimensions={size1} />
            <SocialLinkSquare data={socialLinks[FIGMA]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <MediaLinkSquare data={mediaLinks[MOST_PLAYED_SONG]} dimensions={size1} />
            <SocialLinkSquare data={socialLinks[FIGMA]} dimensions={size1} />
            <MediaLinkSquare data={mediaLinks[PINNED_SONG]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <StaticResume dimensions={size2} />
            <SocialLinkSquare data={socialLinks[LINKEDIN]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <SocialLinkSquare data={socialLinks[GOOGLE]} dimensions={size1} />
            <StaticLocation dimensions={size1} />
            <MediaLinkSquare data={mediaLinks[PINNED_PODCAST]} dimensions={size1} />
          </TileRowWrapper>
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

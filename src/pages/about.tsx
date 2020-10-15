import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import { MediaLinkSquare } from '../components/AboutPage/MediaLinkSquare';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';
import { StaticIntroduction } from '../components/AboutPage/StaticIntroduction';
import { StaticLocation } from '../components/AboutPage/StaticLocation';
import { StaticResume } from '../components/AboutPage/StaticResume';
import { SEO } from '../components/Global/SEO';
import { useAboutPageQueryData } from '../graphql/queries/useAboutPageQueryData';
import {
  mediaLinks,
  MOST_PLAYED_SONG,
  PINNED_PLAYLIST,
  PINNED_PODCAST,
  PINNED_SONG,
} from '../shared/constants/media-link-squares';
import { SCREEN_SIZE } from '../shared/constants/presentation';
import { FIGMA, GITHUB, GOOGLE, LINKEDIN, socialLinks } from '../shared/constants/social-link-squares';
import { useAppState } from '../shared/hooks/app-state';
import { useAllTileDimensions } from '../shared/hooks/useAllTileDimensions';
import { FlexColumnWrapper, MinHeightScreenWrapper } from '../shared/styles/wrappers';

const TileRowWrapper = tw.div`flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full`;

const AboutPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage } = useAboutPageQueryData();

  const {
    dimensions: {
      header: { height: headerHeight },
      footer: { height: footerHeight },
      returnButton: { height: returnButtonHeight },
    },
  } = useAppState();

  // @todo Convert this to component state
  const staticsHeight = headerHeight + footerHeight + returnButtonHeight;

  const { 1: size1, 2: size2 } = useAllTileDimensions({ breakpoint: SCREEN_SIZE.MD });

  return (
    <>
      <SEO title="About" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          <TileRowWrapper>
            <StaticIntroduction dimensions={size2} />
            <SocialLinkSquare data={socialLinks[GITHUB]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <SocialLinkSquare data={socialLinks[FIGMA]} dimensions={size1} />
            <MediaLinkSquare data={mediaLinks[PINNED_PLAYLIST]} dimensions={size1} />
            <SocialLinkSquare data={socialLinks[GOOGLE]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <StaticResume dimensions={size2} />
            <SocialLinkSquare data={socialLinks[LINKEDIN]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <MediaLinkSquare data={mediaLinks[MOST_PLAYED_SONG]} dimensions={size1} />
            <StaticLocation dimensions={size1} />
            <MediaLinkSquare data={mediaLinks[PINNED_SONG]} dimensions={size1} />
          </TileRowWrapper>
          <TileRowWrapper>
            <MediaLinkSquare data={mediaLinks[PINNED_PODCAST]} dimensions={size1} />
          </TileRowWrapper>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

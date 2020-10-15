import { MediaLinkSquare } from '@adelerium/components/AboutPage/MediaLinkSquare';
import { SocialLinkSquare } from '@adelerium/components/AboutPage/SocialLinkSquare';
import { StaticIntroduction } from '@adelerium/components/AboutPage/StaticIntroduction';
import { StaticLocation } from '@adelerium/components/AboutPage/StaticLocation';
import { StaticResume } from '@adelerium/components/AboutPage/StaticResume';
import { SEO } from '@adelerium/components/Global/SEO';
import { useAboutPageQueryData } from '@adelerium/graphql/queries/useAboutPageQueryData';
import { windowDimensionBreakpoints } from '@adelerium/shared/constants/dimensions';
import {
  mediaLinks,
  MOST_PLAYED_SONG,
  PINNED_PLAYLIST,
  PINNED_PODCAST,
  PINNED_SONG,
} from '@adelerium/shared/constants/media-link-squares';
import { FIGMA, GITHUB, GOOGLE, LINKEDIN, socialLinks } from '@adelerium/shared/constants/social-link-squares';
import { useAppState } from '@adelerium/shared/hooks/app-state';
import { useAllTileDimensions } from '@adelerium/shared/hooks/useAllTileDimensions';
import { FlexColumnWrapper, MinHeightScreenWrapper } from '@adelerium/shared/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';

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

  const { 1: size1, 2: size2 } = useAllTileDimensions({ breakpoint: windowDimensionBreakpoints.width.md });

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

import { MemoizedBrandingSection } from '@adelerium/components/AboutPage/BrandingSection';
import { MemoizedIntroductionSection } from '@adelerium/components/AboutPage/IntroductionSection';
import { MediaLinkSquare } from '@adelerium/components/AboutPage/MediaLinkSquare';
import { useMediaLinkQueryData } from '@adelerium/components/AboutPage/MediaLinkSquare/useMediaLinkQueryData';
import { SocialLinkSquare } from '@adelerium/components/AboutPage/SocialLinkSquare';
import { useSocialLinkQueryData } from '@adelerium/components/AboutPage/SocialLinkSquare/useSocialLinkQueryData';
import { MemoizedStaticBranding } from '@adelerium/components/AboutPage/StaticBranding';
import { MemoizedStaticLocation } from '@adelerium/components/AboutPage/StaticLocation';
import { MemoizedStaticResume } from '@adelerium/components/AboutPage/StaticResume';
import { SEO } from '@adelerium/components/Global/SEO';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { useAboutPageQueryData } from '@adelerium/graphql/useAboutPageQueryData';
import { useAppState } from '@adelerium/hooks/app-state';
import { useAllTileDimensions } from '@adelerium/hooks/useAllTileDimensions';
import { FlexColumnWrapper, MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import tw from 'twin.macro';

const TileRowWrapper = tw.div`flex flex-col xl:flex-row items-center xl:items-start justify-start xl:justify-between xl:mb-4 w-full`;

const AboutPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage } = useAboutPageQueryData();
  const { pinnedSong, pinnedPodcast, pinnedPlaylist, mostPlayedSongThisWeek } = useMediaLinkQueryData();
  const { email, linkedin, github, figma } = useSocialLinkQueryData();

  const {
    dimensions: {
      header: { height: headerHeight },
      footer: { height: footerHeight },
      returnButton: { height: returnButtonHeight },
    },
  } = useAppState();

  /** @todo Source this value from global state */
  const staticsHeight = headerHeight + footerHeight + returnButtonHeight;

  const { 1: size1, 2: size2 } = useAllTileDimensions({ breakpoint: windowDimensionBreakpoints.width.xl });

  return (
    <>
      <SEO title="About" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper minHeight={staticsHeight} tw="p-2 xl:p-4 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          <TileRowWrapper>
            <MemoizedIntroductionSection dimensions={size2} />
            {email && <SocialLinkSquare data={email} dimensions={size1} />}
          </TileRowWrapper>
          <TileRowWrapper>
            {pinnedPlaylist && <MediaLinkSquare data={pinnedPlaylist} dimensions={size1} />}
            {figma && <SocialLinkSquare data={figma} dimensions={size1} />}
            {github && <SocialLinkSquare data={github} dimensions={size1} />}
          </TileRowWrapper>
          <TileRowWrapper>
            <MemoizedStaticBranding dimensions={size1} />
            <MemoizedBrandingSection dimensions={size2} />
          </TileRowWrapper>
          <TileRowWrapper>
            <MemoizedStaticResume dimensions={size2} />
            {linkedin && <SocialLinkSquare data={linkedin} dimensions={size1} />}
          </TileRowWrapper>
          <TileRowWrapper>
            {mostPlayedSongThisWeek && <MediaLinkSquare data={mostPlayedSongThisWeek} dimensions={size1} />}
            <MemoizedStaticLocation dimensions={size1} />
            {pinnedSong && <MediaLinkSquare data={pinnedSong} dimensions={size1} />}
          </TileRowWrapper>
          <TileRowWrapper>
            {pinnedPodcast && <MediaLinkSquare data={pinnedPodcast} dimensions={size1} />}
          </TileRowWrapper>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

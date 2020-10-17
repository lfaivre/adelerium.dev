import { MediaLinkSquare } from '@adelerium/components/AboutPage/MediaLinkSquare';
import { useMediaLinkQueryData } from '@adelerium/components/AboutPage/MediaLinkSquare/useMediaLinkQueryData';
import { SocialLinkSquare } from '@adelerium/components/AboutPage/SocialLinkSquare';
import { useSocialLinkQueryData } from '@adelerium/components/AboutPage/SocialLinkSquare/useSocialLinkQueryData';
import { StaticIntroduction } from '@adelerium/components/AboutPage/StaticIntroduction';
import { StaticLocation } from '@adelerium/components/AboutPage/StaticLocation';
import { StaticResume } from '@adelerium/components/AboutPage/StaticResume';
import { SEO } from '@adelerium/components/Global/SEO';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { useAboutPageQueryData } from '@adelerium/graphql/useAboutPageQueryData';
import { useAppState } from '@adelerium/hooks/app-state';
import { useAllTileDimensions } from '@adelerium/hooks/useAllTileDimensions';
import { FlexColumnWrapper, MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement, useEffect, useState } from 'react';
import tw from 'twin.macro';

const TileRowWrapper = tw.div`flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between md:mb-4 w-full`;

const AboutPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage } = useAboutPageQueryData();
  const {
    mediaLinks: { nodes: mediaLinks },
  } = useMediaLinkQueryData();
  const {
    socialLinks: { nodes: socialLinks },
  } = useSocialLinkQueryData();

  const [sizesReady, setSizesReady] = useState(false);

  /** @note @temp Extract Media Link Data */

  const mostPlayedSongThisWeek = mediaLinks.find((link) => link.description === `Most Played Song`);
  const pinnedPlaylist = mediaLinks.find((link) => link.description === `Pinned Playlist`);
  const pinnedPodcast = mediaLinks.find((link) => link.description === `Pinned Podcast`);
  const pinnedSong = mediaLinks.find((link) => link.description === `Pinned Song`);

  /** @note @temp Extract Social Link Data */

  const figma = socialLinks.find((link) => link.title === `Figma`);
  const github = socialLinks.find((link) => link.title === `GitHub`);
  const email = socialLinks.find((link) => link.title === `Email`);
  const linkedin = socialLinks.find((link) => link.title === `LinkedIn`);

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

  useEffect(() => {
    if (sizesReady) return;
    if (size1.width === -1 || size2.width === -1) return;
    setSizesReady(true);
  }, [size1, size2, sizesReady]);

  return (
    <>
      <SEO title="About" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        {sizesReady && (
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
            <TileRowWrapper>
              <StaticIntroduction dimensions={size2} />
              {github && <SocialLinkSquare data={github} dimensions={size1} />}
            </TileRowWrapper>
            <TileRowWrapper>
              {figma && <SocialLinkSquare data={figma} dimensions={size1} />}
              {pinnedPlaylist && <MediaLinkSquare data={pinnedPlaylist} dimensions={size1} />}
              {email && <SocialLinkSquare data={email} dimensions={size1} />}
            </TileRowWrapper>
            <TileRowWrapper>
              <StaticResume dimensions={size2} />
              {linkedin && <SocialLinkSquare data={linkedin} dimensions={size1} />}
            </TileRowWrapper>
            <TileRowWrapper>
              {mostPlayedSongThisWeek && <MediaLinkSquare data={mostPlayedSongThisWeek} dimensions={size1} />}
              <StaticLocation dimensions={size1} />
              {pinnedSong && <MediaLinkSquare data={pinnedSong} dimensions={size1} />}
            </TileRowWrapper>
            <TileRowWrapper>
              {pinnedPodcast && <MediaLinkSquare data={pinnedPodcast} dimensions={size1} />}
            </TileRowWrapper>
          </FlexColumnWrapper>
        )}
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

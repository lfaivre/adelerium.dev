import { Line } from '@adelerium/components/ProjectsPage/Preview/styles';
import {
  ExternalLinkKey,
  ExternalLinks,
  PreviewContent,
  PreviewContentKey,
  PreviewProps,
} from '@adelerium/components/ProjectsPage/Preview/types';
import { Left, Right } from '@adelerium/constants/presentation';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { AccentType, BoldParagraphType, BoldType, NormalParagraphType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import tw, { css } from 'twin.macro';

export const Preview = ({ project, order }: PreviewProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();

  const [componentLoaded, setComponentLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(Left);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  useEffect(() => {
    const newDirection = order % 2 === 0 ? Right : Left;
    setDirection(newDirection);
  }, [order]);

  const getDateString = (): string => {
    if (!(project.dateRangeBeginning && project.dateRangeEnd)) return `No Date`;
    if (project.dateRangeBeginning === project.dateRangeEnd) {
      return `${project.dateRangeBeginning as string}`;
    }
    return `${project.dateRangeBeginning as string} / ${project.dateRangeEnd as string}`;
  };

  const shouldDisplayContent = (): boolean => componentLoaded && imageLoaded;

  const isLeftOriented = (): boolean => direction === Left;

  const previewContent: PreviewContent = {
    description: {
      title: `Description`,
      content: project.previewDescription?.previewDescription || `No Description`,
    },
    technology: {
      title: `Technology`,
      content: project.technologyTags?.join(`, `) || `No Tags`,
    },
  };

  const externalLinks: ExternalLinks = {
    hosted: {
      title: `Hosted`,
      url: project.hostedUrl,
      TextElement: (
        <>
          see&nbsp;it&nbsp;<span tw="font-bold">hosted.</span>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faFirefox} size="2x" />,
    },
    github: {
      title: `GitHub`,
      url: project.gitHubUrl,
      TextElement: (
        <>
          view&nbsp;on&nbsp;<span tw="font-bold">github.</span>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    },
    figma: {
      title: `Figma`,
      url: project.figmaUrl,
      TextElement: (
        <>
          view&nbsp;on&nbsp;<span tw="font-bold">figma.</span>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faFigma} size="2x" />,
    },
  };

  return (
    <div
      css={[
        isLeftOriented() ? tw`lg:flex-row` : tw`lg:flex-row-reverse`,
        tw`flex flex-col mb-2 lg:mb-4 last:mb-0 p-4 lg:p-8 w-full`,
      ]}
    >
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        css={[
          isLeftOriented() ? tw`lg:items-start lg:mr-8` : tw`lg:items-end lg:ml-8`,
          tw`mb-8 lg:mb-0 w-full lg:w-1/2`,
        ]}
      >
        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-start"
          reverse={!isLeftOriented()}
          css={[isLeftOriented() ? tw`justify-start` : tw`justify-end`, tw`w-full mb-2`]}
        >
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-start"
            reverse={!isLeftOriented()}
            css={[isLeftOriented() ? tw`justify-start mr-4 lg:mr-8` : tw`justify-end ml-4 lg:ml-8`]}
          >
            <AccentType
              color="transparent"
              strokeColor={colors.secondary.default}
              css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`w-full text-5xl md:text-7xl font-bold`]}
            >
              {shouldDisplayContent() ? `${order.toString().padStart(2, `0`)}.` : <Skeleton width={120} />}
            </AccentType>
          </FlexRowWrapper>
          <FlexColumnWrapper
            alignItems="items-start"
            justifyContent="justify-start"
            css={[isLeftOriented() ? tw`items-start` : tw`items-end`, tw`flex-grow overflow-hidden`]}
          >
            <BoldParagraphType
              color={colors.secondary.default}
              wordBreak="break-normal"
              css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`mb-2 w-full text-xl md:text-3xl`]}
            >
              {shouldDisplayContent() ? project.title : <Skeleton />}
            </BoldParagraphType>
            <BoldType
              color={colors.secondary.default}
              wordBreak="break-normal"
              css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`w-full uppercase text-xs`]}
            >
              {shouldDisplayContent() ? `${project.type || `Other`} - ${getDateString()}` : <Skeleton />}
            </BoldType>
          </FlexColumnWrapper>
        </FlexRowWrapper>
        <div
          css={[
            css`
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              background-color: ${colors.secondary.default};
            `,
            tw`p-2 md:p-4 w-full`,
          ]}
        >
          <Img
            fluid={project.previewPicture?.fluid as FluidObject | FluidObject[]}
            onLoad={() => setImageLoaded(true)}
            alt={`Preview Image for ${project.title || `Untitled`}`}
            draggable={false}
            backgroundColor={colors.secondary.default}
            css={[
              css`
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              `,
              tw`w-full select-none`,
            ]}
          />
        </div>
      </FlexColumnWrapper>
      <FlexColumnWrapper
        alignItems="items-start"
        justifyContent="justify-center"
        css={[isLeftOriented() ? tw`items-start` : tw`items-end`, tw`flex-1 lg:px-8 w-full lg:w-1/2`]}
      >
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          css={[isLeftOriented() ? tw`items-start` : tw`items-end`, tw`mb-8 w-full`]}
        >
          {Object.keys(previewContent).map((key) => (
            <FlexColumnWrapper
              alignItems="items-start"
              justifyContent="justify-center"
              css={[isLeftOriented() ? tw`items-start` : tw`items-end`, tw`mb-8 last:mb-0 w-full`]}
              key={previewContent[key as PreviewContentKey].title}
            >
              <BoldType
                color={colors.secondary.default}
                defaultFontSize
                css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`w-full uppercase`]}
              >
                {shouldDisplayContent() ? `${previewContent[key as PreviewContentKey].title}` : <Skeleton />}
              </BoldType>
              <NormalParagraphType
                color={colors.secondary.default}
                defaultFontSize
                css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`w-full`]}
              >
                {shouldDisplayContent() ? previewContent[key as PreviewContentKey].content : <Skeleton />}
              </NormalParagraphType>
            </FlexColumnWrapper>
          ))}
        </FlexColumnWrapper>
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          css={[isLeftOriented() ? tw`items-start` : tw`items-end`, tw`mb-8 w-full`]}
        >
          <Line borderColor={colors.secondary.default} />
          <Line borderColor={colors.secondary.default} />
        </FlexColumnWrapper>
        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          css={[isLeftOriented() ? tw`justify-center lg:justify-start` : tw`justify-center lg:justify-end`, tw`w-full`]}
        >
          {Object.keys(externalLinks).map(
            (key) =>
              externalLinks[key as ExternalLinkKey].url && (
                <OutboundLink
                  href={externalLinks[key as ExternalLinkKey].url || websiteFullPath}
                  label={externalLinks[key as ExternalLinkKey].url || websiteFullPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={externalLinks[key as ExternalLinkKey].title}
                  tw="mr-8 last:mr-0"
                >
                  <NormalParagraphType
                    color={colors.secondary.default}
                    defaultFontSize
                    css={[isLeftOriented() ? tw`text-left` : tw`text-right`, tw`lowercase`]}
                  >
                    <span tw="hidden lg:block">
                      {shouldDisplayContent() ? (
                        externalLinks[key as ExternalLinkKey].TextElement
                      ) : (
                        <Skeleton width={120} />
                      )}
                    </span>
                    <span tw="block lg:hidden">
                      {shouldDisplayContent() ? (
                        externalLinks[key as ExternalLinkKey].Icon
                      ) : (
                        <Skeleton width={48} height={48} />
                      )}
                    </span>
                  </NormalParagraphType>
                </OutboundLink>
              )
          )}
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </div>
  );
};

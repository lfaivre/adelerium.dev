import React, { useState, useEffect, ReactElement } from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { useSpring, animated } from 'react-spring';
import Skeleton from 'react-loading-skeleton';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';

import { PreviewListQuery_projectPreviews_edges_node as Project } from '../../../graphql/types/PreviewListQuery';
import { ProjectDirection } from '../../../shared/types/presentation';

import { FlexColumnWrapper, FlexRowWrapper } from '../../../shared/styles/wrappers';
import {
  NormalParagraphType,
  NormalParagraphTypeAsAnchor,
  BoldParagraphType,
  BoldType,
  BoldSpan,
} from '../../../shared/styles/text';

import { OrderNumber, BoxShadowStyles, Divider } from './styles';

type PreviewContentTitle = `Description` | `Technology`;
type PreviewContentItem = { title: PreviewContentTitle; content: string };
type PreviewContentKey = `description` | `technology`;
type PreviewContent = { [key in PreviewContentKey]: PreviewContentItem };

type ExternalLinkTitle = `Hosted` | `GitHub` | `Figma`;
type ExternalLinkItem = {
  title: ExternalLinkTitle;
  url: string | null;
  TextElement: ReactElement;
  Icon: ReactElement;
};
type ExternalLinkKey = `hosted` | `github` | `figma`;
type ExternalLinks = { [key in ExternalLinkKey]: ExternalLinkItem };

type PreviewProps = { project: Project; order: number };

const linkDestinationOnError = `https://github.com/lfaivre`;

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 40,
  -(x - window.innerWidth / 2) / 40,
  1.1,
];

const translate = (x: number, y: number, s: number): string =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Preview = ({ project, order }: PreviewProps): ReactElement => {
  const [componentLoaded, setComponentLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(ProjectDirection.Left);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 60 },
  }));

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  useEffect(() => {
    const newDirection = order % 2 === 0 ? ProjectDirection.Right : ProjectDirection.Left;
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

  const isLeftOriented = (): boolean => direction === ProjectDirection.Left;

  const previewContent: PreviewContent = {
    description: {
      title: `Description`,
      content: project.previewDescription?.previewDescription || `No Description`,
    },
    technology: {
      title: `Technology`,
      content: project.technologyTags?.join(', ') || `No Tags`,
    },
  };

  const externalLinks: ExternalLinks = {
    hosted: {
      title: `Hosted`,
      url: project.hostedUrl,
      TextElement: (
        <>
          see&nbsp;it&nbsp;<BoldSpan>hosted.</BoldSpan>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faFirefox} size="2x" />,
    },
    github: {
      title: `GitHub`,
      url: project.gitHubUrl,
      TextElement: (
        <>
          view&nbsp;on&nbsp;<BoldSpan>github.</BoldSpan>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    },
    figma: {
      title: `Figma`,
      url: project.figmaUrl,
      TextElement: (
        <>
          view&nbsp;on&nbsp;<BoldSpan>figma.</BoldSpan>
        </>
      ),
      Icon: <FontAwesomeIcon icon={faFigma} size="2x" />,
    },
  };

  return (
    <div
      css={[
        tw`flex mb-2 lg:mb-4 last:mb-0 p-4 lg:p-8 w-full`,
        isLeftOriented() ? tw`flex-col lg:flex-row` : tw`flex-col lg:flex-row-reverse`,
      ]}
    >
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        css={[
          tw`mb-8 lg:mb-0 w-full lg:w-1/2`,
          isLeftOriented() ? tw`lg:items-start lg:mr-8` : tw`lg:items-end lg:ml-8`,
        ]}
      >
        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-start"
          reverse={!isLeftOriented()}
          css={[tw`w-full mb-2`, isLeftOriented() ? tw`justify-start` : tw`justify-end`]}
        >
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-start"
            reverse={!isLeftOriented()}
            css={[isLeftOriented() ? tw`justify-start mr-4 lg:mr-8` : tw`justify-end ml-4 lg:ml-8`]}
          >
            <OrderNumber css={[tw`w-full`, isLeftOriented() ? tw`text-left` : tw`text-right`]}>
              {shouldDisplayContent() ? (
                `${order.toString().padStart(2, `0`)}.`
              ) : (
                <Skeleton width={120} />
              )}
            </OrderNumber>
          </FlexRowWrapper>
          <FlexColumnWrapper
            alignItems="items-start"
            justifyContent="justify-start"
            css={[
              tw`flex-grow overflow-hidden`,
              isLeftOriented() ? tw`items-start` : tw`items-end`,
            ]}
          >
            <BoldParagraphType
              color="text-offwhite"
              wordBreak="break-normal"
              css={[
                tw`mb-2 w-full text-xl md:text-3xl`,
                isLeftOriented() ? tw`text-left` : tw`text-right`,
              ]}
            >
              {shouldDisplayContent() ? project.title : <Skeleton />}
            </BoldParagraphType>
            <BoldType
              color="text-offwhite"
              wordBreak="break-normal"
              css={[
                tw`w-full uppercase text-xs md:text-xs`,
                isLeftOriented() ? tw`text-left` : tw`text-right`,
              ]}
            >
              {shouldDisplayContent() ? (
                `${project.type || `Other`} - ${getDateString()}`
              ) : (
                <Skeleton />
              )}
            </BoldType>
          </FlexColumnWrapper>
        </FlexRowWrapper>
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          // eslint-disable-next-line react/prop-types
          style={{ transform: props.xys.interpolate(translate as () => string) }}
          css={[tw`bg-offwhite p-4 w-full`, BoxShadowStyles]}
        >
          <Img
            fluid={project.previewPicture?.fluid as FluidObject | FluidObject[]}
            onLoad={() => setImageLoaded(true)}
            alt={`Preview Image for ${project.title || `Untitled`}`}
            draggable={false}
            backgroundColor="var(--color-OffWhite)"
            css={[tw`w-full select-none`, BoxShadowStyles]}
          />
        </animated.div>
      </FlexColumnWrapper>
      <FlexColumnWrapper
        alignItems="items-start"
        justifyContent="justify-center"
        css={[
          tw`flex-1 lg:px-8 w-full lg:w-1/2`,
          isLeftOriented() ? tw`items-start` : tw`items-end`,
        ]}
      >
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          css={[tw`mb-8 w-full`, isLeftOriented() ? tw`items-start` : tw`items-end`]}
        >
          {Object.keys(previewContent).map((key) => (
            <FlexColumnWrapper
              alignItems="items-start"
              justifyContent="justify-center"
              css={[tw`mb-8 last:mb-0 w-full`, isLeftOriented() ? tw`items-start` : tw`items-end`]}
              key={previewContent[key as PreviewContentKey].title}
            >
              <BoldType
                color="text-offwhite"
                css={[tw`w-full uppercase`, isLeftOriented() ? tw`text-left` : tw`text-right`]}
              >
                {shouldDisplayContent() ? (
                  `${previewContent[key as PreviewContentKey].title}`
                ) : (
                  <Skeleton />
                )}
              </BoldType>
              <NormalParagraphType
                color="text-offwhite"
                css={[tw`w-full`, isLeftOriented() ? tw`text-left` : tw`text-right`]}
              >
                {shouldDisplayContent() ? (
                  previewContent[key as PreviewContentKey].content
                ) : (
                  <Skeleton />
                )}
              </NormalParagraphType>
            </FlexColumnWrapper>
          ))}
        </FlexColumnWrapper>
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          css={[tw`mb-8 w-full`, isLeftOriented() ? tw`items-start` : tw`items-end`]}
        >
          <Divider />
          <Divider />
        </FlexColumnWrapper>
        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          css={[
            tw`w-full`,
            isLeftOriented()
              ? tw`justify-center lg:justify-start`
              : tw`justify-center lg:justify-end`,
          ]}
        >
          {Object.keys(externalLinks).map(
            (key) =>
              externalLinks[key as ExternalLinkKey].url && (
                <NormalParagraphTypeAsAnchor
                  href={externalLinks[key as ExternalLinkKey].url || linkDestinationOnError}
                  label={externalLinks[key as ExternalLinkKey].url || linkDestinationOnError}
                  color="text-offwhite"
                  css={[
                    tw`mr-8 last:mr-0 lowercase`,
                    isLeftOriented() ? tw`text-left` : tw`text-right`,
                  ]}
                  key={externalLinks[key as ExternalLinkKey].title}
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
                </NormalParagraphTypeAsAnchor>
              )
          )}
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </div>
  );
};

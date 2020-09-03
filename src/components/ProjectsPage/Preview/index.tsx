import React, { useState, useEffect } from 'react';

// @todo: Move icons to separate file
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faFirefox } from '@fortawesome/free-brands-svg-icons/faFirefox';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';

import { ProjectDirection } from '../../../types/presentation';

import { PreviewProps } from './types';
import {
  PreviewWrapper,
  ThumbnailWrapper,
  ThumbnailInfoWrapper,
  OrderNumberWrapper,
  OrderNumber,
  TitleAndTypeWrapper,
  Title,
  Type,
  Bold,
  ImageWrapper,
  Image,
  ContentWrapper,
  DescAndTechWrapper,
  DescriptionWrapper,
  DescriptionTitle,
  Description,
  TechnologyWrapper,
  TechnologyTitle,
  Technology,
  DividerWrapper,
  Divider,
  LinksWrapper,
  ExternalLink,
  LinkIcon,
  LinkText,
  ArrowIcon,
} from './styles';

// @temp Need to figure out how to enable a default value for external links

const TEMP_URL_PLACEHOLDER = 'https://github.com/lfaivre';

export const Preview = ({ project, order }: PreviewProps): JSX.Element => {
  // @todo Add loading graphic while image is being fetched from Contentful
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(ProjectDirection.Left);

  useEffect(() => {
    const newDirection =
      order % 2 === 0 ? ProjectDirection.Right : ProjectDirection.Left;
    setDirection(newDirection);
  }, [order]);

  const getDateString = (): string => {
    if (project.dateRangeBeginning !== project.dateRangeEnd) {
      return `${project.dateRangeBeginning} - ${project.dateRangeEnd}`;
    }
    return `${project.dateRangeBeginning}`;
  };

  return (
    <PreviewWrapper _direction={direction}>
      <ThumbnailWrapper _direction={direction}>
        <ThumbnailInfoWrapper _direction={direction}>
          <OrderNumberWrapper _direction={direction}>
            <OrderNumber _direction={direction}>{`0${order}.`}</OrderNumber>
          </OrderNumberWrapper>
          <TitleAndTypeWrapper _direction={direction}>
            <Title _direction={direction}>{project.title}</Title>
            <Type _direction={direction}>
              {project.type}&nbsp;<Bold>&#47;&#47;</Bold>&nbsp;
              {getDateString()}
            </Type>
          </TitleAndTypeWrapper>
        </ThumbnailInfoWrapper>
        <ImageWrapper>
          <Image
            fluid={project.previewPicture.fluid}
            onLoad={() => setImageLoaded(true)}
            alt={`Preview Image for ${project.title}`}
            backgroundColor="var(--offwhite)"
            draggable={false}
          />
        </ImageWrapper>
      </ThumbnailWrapper>
      <ContentWrapper _direction={direction}>
        <DescAndTechWrapper _direction={direction}>
          <DescriptionWrapper _direction={direction}>
            <DescriptionTitle _direction={direction}>desc.</DescriptionTitle>
            <Description _direction={direction}>
              {project.previewDescription.previewDescription}
            </Description>
          </DescriptionWrapper>
          <TechnologyWrapper _direction={direction}>
            <TechnologyTitle _direction={direction}>tech.</TechnologyTitle>
            <Technology _direction={direction}>
              {project.technologyTags.join(', ')}
            </Technology>
          </TechnologyWrapper>
        </DescAndTechWrapper>
        <DividerWrapper _direction={direction}>
          <Divider />
          <Divider />
        </DividerWrapper>
        <LinksWrapper _direction={direction}>
          {project.hostedUrl !== TEMP_URL_PLACEHOLDER ? (
            <ExternalLink
              href={project.hostedUrl}
              label={project.hostedUrl}
              _direction={direction}
            >
              <LinkIcon icon={faFirefox} />
              <LinkText _direction={direction}>
                see&nbsp;it&nbsp;<Bold>hosted.</Bold>
              </LinkText>
            </ExternalLink>
          ) : (
            <></>
          )}
          {project.gitHubUrl !== TEMP_URL_PLACEHOLDER ? (
            <ExternalLink
              href={project.gitHubUrl}
              label={project.gitHubUrl}
              _direction={direction}
            >
              <LinkIcon icon={faGithub} />
              <LinkText _direction={direction}>
                view&nbsp;on&nbsp;<Bold>github.</Bold>
              </LinkText>
            </ExternalLink>
          ) : (
            <></>
          )}
          {project.figmaUrl !== TEMP_URL_PLACEHOLDER ? (
            <ExternalLink
              href={project.figmaUrl}
              label={project.figmaUrl}
              _direction={direction}
            >
              <LinkIcon icon={faFigma} />
              <LinkText _direction={direction}>
                view&nbsp;on&nbsp;<Bold>figma.</Bold>
              </LinkText>
            </ExternalLink>
          ) : (
            <></>
          )}
        </LinksWrapper>
      </ContentWrapper>
      <ArrowIcon
        icon={faArrowUp}
        transform={{ rotate: direction === ProjectDirection.Left ? -45 : 45 }}
        _direction={direction}
      />
    </PreviewWrapper>
  );
};

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
  OrderNumberSkeleton,
  TitleAndTypeWrapper,
  Title,
  TitleSkeleton,
  Type,
  TypeSkeleton,
  Bold,
  ImageWrapper,
  Image,
  ContentWrapper,
  DescAndTechWrapper,
  DescriptionWrapper,
  DescriptionTitle,
  DescriptionTitleSkeleton,
  Description,
  DescriptionSkeleton,
  TechnologyWrapper,
  TechnologyTitle,
  TechnologyTitleSkeleton,
  Technology,
  TechnologySkeleton,
  DividerWrapper,
  Divider,
  LinksWrapper,
  ExternalLink,
  LinkIcon,
  LinkIconSkeleton,
  LinkText,
  LinkTextSkeleton,
  ArrowIcon,
} from './styles';

// @temp Need to figure out how to enable a default value for external links
const TEMP_URL_PLACEHOLDER = 'https://github.com/lfaivre';

export const Preview = ({ project, order }: PreviewProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(ProjectDirection.Left);

  useEffect(() => {
    const newDirection = order % 2 === 0 ? ProjectDirection.Right : ProjectDirection.Left;
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
            {imageLoaded && <OrderNumber _direction={direction}>{`0${order}.`}</OrderNumber>}
            {!imageLoaded && <OrderNumberSkeleton _direction={direction} width={100} />}
          </OrderNumberWrapper>
          <TitleAndTypeWrapper _direction={direction}>
            {imageLoaded && <Title _direction={direction}>{project.title}</Title>}
            {!imageLoaded && <TitleSkeleton _direction={direction} />}
            {imageLoaded && (
              <Type _direction={direction}>
                {project.type}&nbsp;<Bold>&#47;&#47;</Bold>&nbsp;
                {getDateString()}
              </Type>
            )}
            {!imageLoaded && <TypeSkeleton _direction={direction} />}
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
            {imageLoaded && <DescriptionTitle _direction={direction}>desc.</DescriptionTitle>}
            {!imageLoaded && <DescriptionTitleSkeleton _direction={direction} />}
            {imageLoaded && (
              <Description _direction={direction}>
                {project.previewDescription.previewDescription}
              </Description>
            )}
            {!imageLoaded && <DescriptionSkeleton _direction={direction} count={2} />}
          </DescriptionWrapper>
          <TechnologyWrapper _direction={direction}>
            {imageLoaded && <TechnologyTitle _direction={direction}>tech.</TechnologyTitle>}
            {!imageLoaded && <TechnologyTitleSkeleton _direction={direction} />}
            {imageLoaded && (
              <Technology _direction={direction}>{project.technologyTags.join(', ')}</Technology>
            )}
            {!imageLoaded && <TechnologySkeleton _direction={direction} count={2} />}
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
              target="_blank"
              rel="noopener noreferrer"
              label={project.hostedUrl}
              _direction={direction}
            >
              {imageLoaded && <LinkIcon icon={faFirefox} />}
              {!imageLoaded && <LinkIconSkeleton icon={faFirefox} width={32} height={32} />}
              {imageLoaded && (
                <LinkText _direction={direction}>
                  see&nbsp;it&nbsp;<Bold>hosted.</Bold>
                </LinkText>
              )}
              {!imageLoaded && <LinkTextSkeleton _direction={direction} width={115} />}
            </ExternalLink>
          ) : (
            <></>
          )}
          {project.gitHubUrl !== TEMP_URL_PLACEHOLDER ? (
            <ExternalLink
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              label={project.gitHubUrl}
              _direction={direction}
            >
              {imageLoaded && <LinkIcon icon={faGithub} />}
              {!imageLoaded && <LinkIconSkeleton icon={faGithub} width={32} height={32} />}
              {imageLoaded && (
                <LinkText _direction={direction}>
                  view&nbsp;on&nbsp;<Bold>github.</Bold>
                </LinkText>
              )}
              {!imageLoaded && <LinkTextSkeleton _direction={direction} width={115} />}
            </ExternalLink>
          ) : (
            <></>
          )}
          {project.figmaUrl !== TEMP_URL_PLACEHOLDER ? (
            <ExternalLink
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              label={project.figmaUrl}
              _direction={direction}
            >
              {imageLoaded && <LinkIcon icon={faFigma} />}
              {!imageLoaded && <LinkIconSkeleton icon={faFigma} width={32} height={32} />}
              {imageLoaded && (
                <LinkText _direction={direction}>
                  view&nbsp;on&nbsp;<Bold>figma.</Bold>
                </LinkText>
              )}
              {!imageLoaded && <LinkTextSkeleton _direction={direction} width={115} />}
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

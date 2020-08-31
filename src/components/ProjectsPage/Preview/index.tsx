import React, { useState, useEffect } from 'react';

// TODO: MOVE ICON DEFS TO SEPARATE FILE (USE LIB)
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

// @todo Will fix preview component once Contentful is integrated

export const Preview = ({ project }: PreviewProps): JSX.Element => {
  const [direction, setDirection] = useState(ProjectDirection.Left);

  useEffect(() => {
    const newDirection =
      project.order % 2 === 0 ? ProjectDirection.Right : ProjectDirection.Left;
    setDirection(newDirection);
  }, [project.order]);

  return (
    <PreviewWrapper _direction={direction}>
      <ThumbnailWrapper _direction={direction}>
        <ThumbnailInfoWrapper _direction={direction}>
          <OrderNumberWrapper _direction={direction}>
            <OrderNumber
              _direction={direction}
            >{`0${project.order}.`}</OrderNumber>
          </OrderNumberWrapper>
          <TitleAndTypeWrapper _direction={direction}>
            <Title _direction={direction}>{project.preview.title}</Title>
            <Type _direction={direction}>
              {project.preview.type}&nbsp;<Bold>&#47;&#47;</Bold>&nbsp;
              {project.preview.date}
            </Type>
          </TitleAndTypeWrapper>
        </ThumbnailInfoWrapper>
        <ImageWrapper>
          <Image fluid={project.preview.tempQuery.childImageSharp.fluid} />
        </ImageWrapper>
      </ThumbnailWrapper>
      <ContentWrapper _direction={direction}>
        <DescAndTechWrapper _direction={direction}>
          <DescriptionWrapper _direction={direction}>
            <DescriptionTitle _direction={direction}>desc.</DescriptionTitle>
            <Description _direction={direction}>
              {project.preview.description}
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
          {project.externalLinks.hostedURL !== '' ? (
            <ExternalLink
              href={project.externalLinks.hostedURL}
              label={project.externalLinks.hostedURL}
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
          {project.externalLinks.githubURL !== '' ? (
            <ExternalLink
              href={project.externalLinks.githubURL}
              label={project.externalLinks.githubURL}
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
          {project.externalLinks.figmaURL !== '' ? (
            <ExternalLink
              href={project.externalLinks.figmaURL}
              label={project.externalLinks.figmaURL}
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

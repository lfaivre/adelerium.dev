import React, { useState, useEffect } from 'react';

import { useAppState } from '../../../state/app-context';

import { SCREEN_SIZE } from '../../../data/presentation';
import { AboutSectionDirection } from '../../../types/presentation';
import { getStrippedInternalLink } from '../../../utils/strings';

import { AboutSectionProps } from './types';
import {
  AboutSectionWrapper,
  ImageWrapper,
  FloatingImage,
  ContentWrapper,
  TitleWrapper,
  FloatingTitle,
  BodyWrapper,
  BodyText,
  InternalLink,
  Bold,
  ExternalLink,
  CounterText,
} from './styles';

export const AboutSection = ({
  sectionData,
  count,
  order,
}: AboutSectionProps): JSX.Element => {
  const { windowWidth } = useAppState();
  // @todo Add loading graphic while image is being fetched from Contentful
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageLoaded, setImageLoaded] = useState(false);
  const [direction, setDirection] = useState(AboutSectionDirection.Left);

  useEffect(() => {
    const newDirection =
      order % 2 === 0
        ? AboutSectionDirection.Right
        : AboutSectionDirection.Left;
    setDirection(newDirection);
  }, [order]);

  return sectionData !== undefined ? (
    <AboutSectionWrapper _direction={direction}>
      {sectionData.accentImage && windowWidth >= SCREEN_SIZE.MD && (
        <ImageWrapper>
          <FloatingImage
            fluid={sectionData.accentImage.fluid}
            onLoad={() => setImageLoaded(true)}
            alt={`Accent image for ${sectionData.title} section.`}
            backgroundColor="var(--charcoal)"
            draggable={false}
          />
        </ImageWrapper>
      )}
      <ContentWrapper _direction={direction}>
        <TitleWrapper>
          <FloatingTitle _direction={direction}>
            {sectionData.title}
          </FloatingTitle>
        </TitleWrapper>
        <BodyWrapper _direction={direction}>
          <BodyText _direction={direction}>{sectionData.body.body}</BodyText>
          {sectionData.link &&
            (sectionData.link.type === 'internal' ? (
              <InternalLink
                to={getStrippedInternalLink(sectionData.link.destination)}
                _direction={direction}
              >
                {sectionData.firstLinkTextFragment}&nbsp;
                <Bold>{sectionData.secondLinkTextFragment}</Bold>
              </InternalLink>
            ) : (
              <ExternalLink
                href={sectionData.link.destination}
                target="_blank"
                rel="noopener noreferrer"
                label={sectionData.link.destination}
                _direction={direction}
              >
                {sectionData.firstLinkTextFragment}&nbsp;
                <Bold>{sectionData.secondLinkTextFragment}</Bold>
              </ExternalLink>
            ))}
          <CounterText _direction={direction}>
            {`${sectionData.order}`}&nbsp;/&nbsp;{`${count}`}
          </CounterText>
        </BodyWrapper>
      </ContentWrapper>
    </AboutSectionWrapper>
  ) : (
    <></>
  );
};

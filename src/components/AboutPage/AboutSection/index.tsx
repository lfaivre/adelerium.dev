import React, { useState, useEffect } from 'react';

import { useAppState } from '../../../state/app-context';

import { SCREEN_SIZE } from '../../../data/presentation';
import { AboutSectionDirection as ASD } from '../../../types/presentation';

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

// @todo Will fix about section when contentful integration is complete

export const AboutSection = ({
  sectionData,
  count,
}: AboutSectionProps): JSX.Element => {
  const { windowWidth } = useAppState();
  const [direction, setDirection] = useState(ASD.Left);

  useEffect(() => {
    const direction = sectionData.order % 2 === 0 ? ASD.Right : ASD.Left;
    setDirection(direction);
  }, [sectionData.order]);

  return (
    <AboutSectionWrapper _direction={direction}>
      {!(windowWidth < SCREEN_SIZE.MD) && (
        <ImageWrapper>
          <FloatingImage fluid={sectionData.tempQuery.childImageSharp.fluid} />
        </ImageWrapper>
      )}
      <ContentWrapper _direction={direction}>
        <TitleWrapper>
          <FloatingTitle _direction={direction}>
            {sectionData.title}
          </FloatingTitle>
        </TitleWrapper>
        <BodyWrapper _direction={direction}>
          <BodyText _direction={direction}>{sectionData.body}</BodyText>
          {sectionData.link.isInternal ? (
            <InternalLink
              to={sectionData.link.internalURL}
              _direction={direction}
            >
              {sectionData.link.firstTextFragment}&nbsp;
              <Bold>{sectionData.link.secondTextFragment}</Bold>
            </InternalLink>
          ) : (
            <ExternalLink
              href={sectionData.link.externalURL}
              label={sectionData.link.externalURL}
              _direction={direction}
            >
              {sectionData.link.firstTextFragment}&nbsp;
              <Bold>{sectionData.link.secondTextFragment}</Bold>
            </ExternalLink>
          )}
          <CounterText _direction={direction}>
            {`${sectionData.order}`}&nbsp;/&nbsp;{`${count}`}
          </CounterText>
        </BodyWrapper>
      </ContentWrapper>
    </AboutSectionWrapper>
  );
};

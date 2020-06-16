import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { AboutSectionAttributes } from "../../../types/about"
import { AboutSectionDirection as ASD } from "../../../types/presentation"

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
} from "./styles"

interface Props {
  sectionData: AboutSectionAttributes
  count: number
}

const AboutSection = ({ sectionData, count }: Props) => {
  const [direction, setDirection] = useState(ASD.Left)

  const aboutSectionQuery = useStaticQuery(graphql`
    query {
      floatingImage: file(relativePath: { eq: "waves-placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, grayscale: true, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  useEffect(() => {
    const direction = sectionData.order % 2 === 0 ? ASD.Right : ASD.Left
    setDirection(direction)
  }, [sectionData.order])

  return (
    <AboutSectionWrapper _direction={direction}>
      <ImageWrapper>
        <FloatingImage
          fluid={aboutSectionQuery.floatingImage.childImageSharp.fluid}
        />
      </ImageWrapper>
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
  )
}

export default AboutSection

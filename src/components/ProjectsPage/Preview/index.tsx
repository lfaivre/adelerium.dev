import React, { useState, useEffect } from "react"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import { ProjectAttrs } from "../../../types/projects"
import { ProjectDirection } from "../../../types/presentation"
import {
  PreviewWrapper,
  PreviewWrapperWithFX,
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
  Icon,
} from "./styles"

interface Props {
  project: ProjectAttrs
}

const Preview = ({ project }: Props) => {
  const [direction, setDirection] = useState(ProjectDirection.Left)

  useEffect(() => {
    const direction =
      project.order % 2 === 0 ? ProjectDirection.Right : ProjectDirection.Left
    setDirection(direction)
  }, [project.order])

  return (
    <PreviewWrapperWithFX _direction={direction}>
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
              {project.preview.type}&nbsp;<Bold>//</Bold>&nbsp;
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
              {project.technologyTags.join(", ")}
            </Technology>
          </TechnologyWrapper>
        </DescAndTechWrapper>
        <DividerWrapper _direction={direction}>
          <Divider />
          <Divider />
        </DividerWrapper>
        <LinksWrapper _direction={direction}>
          {project.externalLinks.hostedURL !== "" ? (
            <ExternalLink
              href={project.externalLinks.hostedURL}
              _direction={direction}
            >
              see&nbsp;it&nbsp;<Bold>hosted.</Bold>
            </ExternalLink>
          ) : null}
          {project.externalLinks.githubURL !== "" ? (
            <ExternalLink
              href={project.externalLinks.githubURL}
              _direction={direction}
            >
              view&nbsp;on&nbsp;<Bold>github.</Bold>
            </ExternalLink>
          ) : null}
          {project.externalLinks.figmaURL !== "" ? (
            <ExternalLink
              href={project.externalLinks.figmaURL}
              _direction={direction}
            >
              view&nbsp;on&nbsp;<Bold>figma.</Bold>
            </ExternalLink>
          ) : null}
        </LinksWrapper>
      </ContentWrapper>
      <Icon
        icon={faArrowUp}
        transform={{ rotate: direction === ProjectDirection.Left ? -45 : 45 }}
        _direction={direction}
      />
    </PreviewWrapperWithFX>
  )
}

export default Preview

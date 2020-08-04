import React from "react"
import { PageProps, graphql } from "gatsby"

import SEO from "../components/Shared/SEO"
import Preview from "../components/ProjectsPage/Preview"

import { projectData } from "../data/projects"
import { ProjectsPageContentWrapper } from "../styles/pages"

const ProjectsPage = ({ data }: PageProps) => {
  return (
    <>
      <SEO title="Projects" />
      <ProjectsPageContentWrapper>
        {projectData.projects.map(project => {
          // TODO: TEMPORARY IMPLEMENTATION, REPLACING WITH CONTENTFUL GRAPHQL QUERIES
          project.preview.tempQuery = (data as any)[project.preview.pictureURL]
          return <Preview project={project} key={project.order} />
        })}
      </ProjectsPageContentWrapper>
    </>
  )
}

export default ProjectsPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1024, grayscale: true, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "projects/portofmars-1024.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "projects/psychetap-1024.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "projects/mamsprototype-1024.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "projects/mams-1024.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "projects/portfolio2019-1024.png" }) {
      ...fluidImage
    }
    imageSix: file(
      relativePath: { eq: "projects/portfolioprototype-1024.png" }
    ) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "projects/kevaladesign-1024.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "projects/funnyforagirl-1024.png" }) {
      ...fluidImage
    }
  }
`

import React from "react"
import { PageProps, graphql } from "gatsby"

import SEO from "../components/Shared/SEO"
import Preview from "../components/ProjectsPage/Preview"

import { projectData } from "../data/projects"
import { IndexPageContentWrapper } from "../styles/pages"

const ProjectsPage = ({ data }: PageProps) => {
  return (
    <>
      <SEO title="Projects" />
      <IndexPageContentWrapper>
        {projectData.projects.map(project => {
          // TODO: TEMPORARY IMPLEMENTATION, REPLACING WITH CONTENTFUL GRAPHQL QUERIES
          project.preview.tempQuery = data[project.preview.pictureURL]
          return <Preview project={project} key={project.order} />
        })}
      </IndexPageContentWrapper>
    </>
  )
}

export default ProjectsPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700, grayscale: true, quality: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "portofmars-gamescreen1.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "psychetap-gamescreen1.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "mamsprototype-splash.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "mams-splash.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "portfolio2019-splash.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "portfolioprototype-splash.png" }) {
      ...fluidImage
    }
    imageSeven: file(relativePath: { eq: "kevaladesign-splash.png" }) {
      ...fluidImage
    }
    imageEight: file(relativePath: { eq: "funnyforagirl-splash.png" }) {
      ...fluidImage
    }
  }
`

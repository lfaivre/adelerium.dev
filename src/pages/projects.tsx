import React from "react"
import { PageProps, graphql } from "gatsby"

import SEO from "../components/Shared/SEO"
import ProjectPreview from "../components/ProjectsPage/ProjectPreview"

import { ProjectData } from "../data/projects-temp"

const ProjectsPage = ({ data }: PageProps) => {
  return (
    <>
      <SEO title="Projects" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {ProjectData.projects.map(projectData => {
          // TODO: TEMPORARY IMPLEMENTATION, REPLACING WITH CONTENTFUL GRAPHQL QUERIES
          projectData.preview.tempQuery = data[projectData.preview.pictureURL]
          return (
            <ProjectPreview projectData={projectData} key={projectData.order} />
          )
        })}
      </div>
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

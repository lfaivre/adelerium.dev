import React from "react"
import { PageProps } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import ProjectPreview from "../components/projects/ProjectPreview"

import { ProjectData } from "../data/projects-temp"

const ProjectsPage = (props: PageProps) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="w-full px-8 py-16 bg-charcoal">
        {ProjectData.projects.map(projectData => {
          return (
            <ProjectPreview projectData={projectData} key={projectData.order} />
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage

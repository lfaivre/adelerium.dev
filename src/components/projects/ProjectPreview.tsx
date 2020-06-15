import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import { ProjectAttributes, ProjectDirection } from "../../data/projects-temp"

interface Props {
  projectData: ProjectAttributes
}

const ProjectPreview = ({ projectData }: Props) => {
  const [direction, setDirection] = useState(ProjectDirection.Left)

  useEffect(() => {
    const direction =
      projectData.order % 2 === 0
        ? ProjectDirection.Right
        : ProjectDirection.Left
    setDirection(direction)
  }, [projectData.order])

  return (
    <div
      className={`relative w-full p-8 mb-8 last:mb-0 flex bg-offpink ${
        direction === ProjectDirection.Left ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* <div
      className={`relative w-full p-8 mb-8 last:mb-0 flex bg-offpink transition-transform duration-700 ease-in-out cursor-pointer transform hover:scale-105 ${
        direction === ProjectDirection.Left ? "flex-row" : "flex-row-reverse"
      }`}
    > */}
      <div
        className={`w-1/2 flex flex-col justify-start ${
          direction === ProjectDirection.Left
            ? "mr-8 items-start"
            : "ml-8 items-end"
        }`}
      >
        <div
          className={`mb-2 flex items-center ${
            direction === ProjectDirection.Left
              ? "flex-row justify-start"
              : "flex-row-reverse justify-end"
          }`}
        >
          <div
            className={`items-center ${
              direction === ProjectDirection.Left
                ? "mr-8 flex flex-row justify-start"
                : "ml-8 flex-row-reverse justify-end"
            }`}
          >
            <p
              className={`text-outline text-7xl lobster-two font-bold ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >{`0${projectData.order}.`}</p>
          </div>
          <div
            className={`flex flex-col justify-center ${
              direction === ProjectDirection.Left ? "items-start" : "items-end"
            }`}
          >
            <p
              className={`mb-2 text-3.5xl playfair-display font-bold text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              {projectData.preview.title}
            </p>
            <p
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              {`${projectData.preview.type}`}&nbsp;
              <span className="font-bold">//</span>&nbsp;
              {`${projectData.preview.date}`}
            </p>
          </div>
        </div>
        <div
          className="w-full p-4 bg-offwhite"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          <Img
            fluid={projectData.preview.tempQuery.childImageSharp.fluid}
            style={{
              opacity: "80%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </div>
      <div
        className={`flex-1 px-8 flex flex-col justify-center ${
          direction === ProjectDirection.Left ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`mb-8 flex flex-col justify-center ${
            direction === ProjectDirection.Left ? "items-start" : "items-end"
          }`}
        >
          <div
            className={`mb-8 flex flex-col justify-center ${
              direction === ProjectDirection.Left ? "items-start" : "items-end"
            }`}
          >
            <p
              className={`mb-2 text-2xl playfair-display font-bold text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              desc.
            </p>
            <p
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              {projectData.preview.description}
            </p>
          </div>
          <div
            className={`flex flex-col justify-center ${
              direction === ProjectDirection.Left ? "items-start" : "items-end"
            }`}
          >
            <p
              className={`mb-2 text-2xl playfair-display font-bold text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              tech.
            </p>
            <p
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left ? "text-left" : "text-right"
              }`}
            >
              {projectData.technologyTags.join(", ")}
            </p>
          </div>
        </div>
        <div
          className={`w-full mb-8 flex flex-col justify-center ${
            direction === ProjectDirection.Left
              ? "pr-24 items-start"
              : "pl-24 items-end"
          }`}
        >
          <hr className="w-full h-0 mb-2 border border-charcoal" />
          <hr className="w-full h-0 border border-charcoal" />
        </div>
        <div
          className={`flex flex-row items-center ${
            direction === ProjectDirection.Left
              ? "justify-start"
              : "justify-end"
          }`}
        >
          {projectData.externalLinks.hostedURL !== "" ? (
            <a
              href={projectData.externalLinks.hostedURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left
                  ? "mr-8 text-left"
                  : "ml-8 text-right"
              }`}
            >
              see it <span className="font-bold">hosted.</span>
            </a>
          ) : null}
          {projectData.externalLinks.githubURL !== "" ? (
            <a
              href={projectData.externalLinks.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left
                  ? "mr-8 text-left"
                  : "ml-8 text-right"
              }`}
            >
              view on <span className="font-bold">github.</span>
            </a>
          ) : null}
          {projectData.externalLinks.figmaURL !== "" ? (
            <a
              href={projectData.externalLinks.figmaURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base playfair-display font-normal text-charcoal ${
                direction === ProjectDirection.Left
                  ? "mr-8 text-left"
                  : "ml-8 text-right"
              }`}
            >
              view on <span className="font-bold">figma.</span>
            </a>
          ) : null}
        </div>
      </div>
      {direction === ProjectDirection.Left ? (
        <FontAwesomeIcon
          icon={faArrowUp}
          transform={{ rotate: -45 }}
          className="absolute right-project-arrow bottom-project-arrow project-arrow-outline text-project-arrow"
        />
      ) : (
        <FontAwesomeIcon
          icon={faArrowUp}
          transform={{ rotate: 45 }}
          className="absolute left-project-arrow bottom-project-arrow project-arrow-outline text-project-arrow"
        />
      )}
    </div>
  )
}

export default ProjectPreview

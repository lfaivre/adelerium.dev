import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import { AboutSectionAttributes } from "../../../types/about"
import { AboutSectionDirection } from "../../../types/presentation"

interface Props {
  sectionData: AboutSectionAttributes
  count: number
}

const AboutSection = ({ sectionData, count }: Props) => {
  const [direction, setDirection] = useState(AboutSectionDirection.Left)

  const pageQuery = useStaticQuery(graphql`
    query {
      floatingImage: file(relativePath: { eq: "waves-placeholder.jpg" }) {
        ...fluidImageTwo
      }
    }
  `)

  useEffect(() => {
    const direction =
      sectionData.order % 2 === 0
        ? AboutSectionDirection.Right
        : AboutSectionDirection.Left
    setDirection(direction)
  }, [sectionData.order])

  return (
    <div
      className={`w-full mb-8 last:mb-0 flex ${
        direction === AboutSectionDirection.Left
          ? "flex-row"
          : "flex-row-reverse"
      }`}
    >
      <div className="z-0 placeholder-image w-1/3 h-full bg-offpink">
        <Img
          fluid={pageQuery.floatingImage.childImageSharp.fluid}
          style={{ opacity: "80%" }}
        />
      </div>
      <div
        className={`z-10 w-2/3 h-full p-8 flex flex-col justify-start ${
          direction === AboutSectionDirection.Left ? "items-start" : "items-end"
        }`}
      >
        <div className="mb-8 flex flex-row justify-center items-center">
          <h1
            className={`text-7xl text-left playfair-display font-bold text-offpink ${
              direction === AboutSectionDirection.Left
                ? "ml-about-title-left"
                : "mr-about-title-right"
            }`}
          >
            {sectionData.title}
          </h1>
        </div>
        <div
          className={`flex flex-col justify-start ${
            direction === AboutSectionDirection.Left
              ? "items-start"
              : "items-end"
          }`}
        >
          <p
            className={`mb-8 w-3/5 text-2xl playfair-display font-normal text-offwhite ${
              direction === AboutSectionDirection.Left
                ? "text-left"
                : "text-right"
            }`}
          >
            {sectionData.body}
          </p>
          {sectionData.link.isInternal ? (
            <Link
              to={sectionData.link.internalURL}
              className={`mb-8 text-base playfair-display font-normal text-offwhite underline ${
                direction === AboutSectionDirection.Left
                  ? "text-left"
                  : "text-right"
              }`}
            >
              {sectionData.link.firstTextFragment}&nbsp;
              <span className="font-bold">
                {sectionData.link.secondTextFragment}
              </span>
            </Link>
          ) : (
            <a
              href={sectionData.link.externalURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-8 text-base playfair-display font-normal text-offwhite underline ${
                direction === AboutSectionDirection.Left
                  ? "text-left"
                  : "text-right"
              }`}
            >
              {sectionData.link.firstTextFragment}&nbsp;
              <span className="font-bold">
                {sectionData.link.secondTextFragment}
              </span>
            </a>
          )}
          <p
            className={`text-3.5xl playfair-display font-bold text-offwhite ${
              direction === AboutSectionDirection.Left
                ? "text-left"
                : "text-right"
            }`}
          >
            {`${sectionData.order}`}&nbsp;/&nbsp;{`${count}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection

export const fluidImageTwo = graphql`
  fragment fluidImageTwo on File {
    childImageSharp {
      fluid(maxWidth: 500, grayscale: true, quality: 75) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

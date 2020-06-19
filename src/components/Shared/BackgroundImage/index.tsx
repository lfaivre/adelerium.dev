import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BImage from "gatsby-background-image"

interface Props {
  className?: string
}

const BackgroundImage = ({ className, children }: Props) => {
  const imageQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "waves-placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, grayscale: true, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <BImage
      fluid={imageQuery.background.childImageSharp.fluid}
      className={className}
      preserveStackingContext={true}
    >
      {children}
    </BImage>
  )
}

export default BackgroundImage

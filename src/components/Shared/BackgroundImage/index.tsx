import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BImage from "gatsby-background-image"

interface Props {
  children: React.ReactNode
  className?: string
}

const BackgroundImage = ({ className, children }: Props) => {
  const imageQuery = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "waves-1680.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1680, grayscale: true, quality: 75) {
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

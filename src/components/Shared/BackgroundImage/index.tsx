import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import tw, { styled } from "twin.macro"
import BImage from "gatsby-background-image"
import { BackgroundImage as BI } from "../../../types/presentation"

interface StyledProps {
  screenSize: BI
  opacity: boolean
}

interface Props extends StyledProps {
  className?: string
}

const BackgroundImage = ({ className, screenSize }: Props) => {
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
      className={className}
      fluid={imageQuery.background.childImageSharp.fluid}
    />
  )
}

const StyledBackgroundImage = styled(BackgroundImage)<StyledProps>`
  ${({ screenSize }) =>
    screenSize === BI.Mobile ? tw`block xl:hidden` : tw`hidden xl:flex`}
  ${({ opacity }) => opacity && tw`opacity-80!`}
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export default StyledBackgroundImage

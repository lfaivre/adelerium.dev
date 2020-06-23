import tw, { styled } from "twin.macro"
import BackgroundImage from "gatsby-background-image"

interface BackgroundImageProps {
  headerHeight: number
  isIndex: boolean
}

export const StyledBackgroundImage = styled(BackgroundImage)<
  BackgroundImageProps
>`
  ${tw`w-full fixed! left-0`}
  top: ${({ headerHeight, isIndex }) => (isIndex ? `0;` : `${headerHeight}px;`)}
  @media (min-width: 1280px) {
    left: 20%;
  }
  height: ${({ headerHeight, isIndex }) =>
    isIndex ? `100vh;` : `calc(100vh - ${headerHeight}px);`}
  &:before {
    opacity: 80% !important;
  }
`

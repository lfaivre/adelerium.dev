import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { AboutSectionDirection as ASD } from "../../../types/presentation"

interface DirectionProps {
  readonly _direction: ASD
}

interface StyledExternalLinkProps
  extends React.HTMLProps<HTMLAnchorElement>,
    DirectionProps {}

const StyledExternalLink = ({
  className,
  children,
  ...rest
}: StyledExternalLinkProps) => (
  <a {...rest} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
)

export const AboutSectionWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`flex-row` : tw`flex-row-reverse`}
  ${tw`w-full mb-8 last:mb-0 flex`}
`
export const ImageWrapper = tw.div`z-0 w-1/3 h-full bg-offpink`
export const FloatingImage = styled(Img)`
  ${tw`opacity-80`}
`
export const ContentWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`items-start` : tw`items-end`}
  ${tw`z-10 w-2/3 h-full p-8 flex flex-col justify-start`}
`
export const TitleWrapper = tw.div`mb-8 flex flex-row justify-center items-center`
export const FloatingTitle = styled.h1<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left
      ? tw`ml-about-title-left`
      : tw`mr-about-title-right`}
  ${tw`text-offpink text-7xl text-left font-playfair-display font-bold`}
`
export const BodyWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`items-start` : tw`items-end`}
  ${tw`flex flex-col justify-start`}
`
export const BodyText = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-right`}
  ${tw`w-3/5 mb-8 text-offwhite text-2xl font-playfair-display font-normal`}
`
export const InternalLink = styled(Link)<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-right`}
  ${tw`mb-8 text-offwhite text-base font-playfair-display font-normal underline`}
`
export const Bold = tw.span`font-bold`
export const ExternalLink = styled(StyledExternalLink)`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-right`}
  ${tw`mb-8 text-offwhite text-base font-playfair-display font-normal underline`}
`
export const CounterText = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-right`}
  ${tw`text-offwhite text-3.5xl font-playfair-display font-bold`}
`

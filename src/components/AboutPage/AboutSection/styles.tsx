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
  ${tw`w-full mb-2 md:mb-8 xl:mb-4 last:mb-0 flex bg-charcoal md:bg-transparent`}
`
export const ImageWrapper = tw.div`z-0 p-4 md:w-2/5 xl:w-1/3 h-full bg-charcoal`
export const FloatingImage = styled(Img)`
  ${tw`opacity-80`}
`
export const ContentWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`items-start` : tw`items-end`}
  ${tw`z-10 w-full md:w-3/5 xl:w-2/3 h-full px-8 py-16 md:py-4 xl:p-8 flex flex-col justify-start`}
`
export const TitleWrapper = tw.div`w-full md:w-auto mb-8 md:mb-4 xl:mb-8 flex flex-row justify-start md:justify-center items-center`
export const FloatingTitle = styled.h1<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left
      ? tw`md:ml-about-title-left text-center md:text-left`
      : tw`md:mr-about-title-right text-center md:text-right`}
  ${tw`text-offpink text-4xl md:text-7xl font-playfair-display font-bold`}
`
export const BodyWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`items-start` : tw`items-start md:items-end`}
  ${tw`w-full flex flex-col justify-start`}
`
export const BodyText = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-left md:text-right`}
  ${tw`xl:w-3/5 mb-8 md:mb-4 xl:mb-8 text-offwhite text-base md:text-2xl font-playfair-display font-normal`}
`
export const InternalLink = styled(Link)<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-left md:text-right`}
  ${tw`mb-8 md:mb-4 xl:mb-8 text-offwhite text-base font-playfair-display font-normal underline`}
`
export const Bold = tw.span`font-bold`
export const ExternalLink = styled(StyledExternalLink)`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-left md:text-right`}
  ${tw`mb-8 md:mb-4 xl:mb-8 text-offwhite text-base font-playfair-display font-normal underline`}
`
export const CounterText = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === ASD.Left ? tw`text-left` : tw`text-left md:text-right`}
  ${tw`text-offwhite text-2xl md:text-3.5xl font-playfair-display font-bold`}
`

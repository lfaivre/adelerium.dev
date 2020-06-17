import tw, { styled } from "twin.macro"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProjectDirection as PD } from "../../../types/presentation"

interface DirectionProps {
  readonly _direction: PD
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

export const PreviewWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`flex-row` : tw`flex-row-reverse`}
  ${tw`relative w-full p-8 mb-8 last:mb-0 flex bg-offpink`}
`
export const PreviewWrapperWithFX = styled(PreviewWrapper)`
  ${tw`transition-transform duration-700 ease-in-out cursor-pointer transform hover:scale-105`}
`
export const ThumbnailWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`mr-8 items-start` : tw`ml-8 items-end`}
  ${tw`w-1/2 flex flex-col justify-start`}
`
export const ThumbnailInfoWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`flex-row justify-start`
      : tw`flex-row-reverse justify-end`}
  ${tw`mb-2 flex items-center`}
`
export const OrderNumberWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`mr-8 flex-row justify-start`
      : tw`ml-8 flex-row-reverse justify-end`}
  ${tw`flex items-center`}
`
export const OrderNumber = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`text-charcoal text-7xl font-lobster-two font-bold`}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--charcoal);
`
export const TitleAndTypeWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`items-start` : tw`items-end`}
  ${tw`flex flex-col justify-center`}
`
export const Title = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`mb-2 text-charcoal text-3.5xl font-playfair-display font-bold`}
`
export const Type = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`text-charcoal text-base font-playfair-display font-normal`}
`
export const Bold = tw.span`font-bold`
export const ImageWrapper = styled.div`
  ${tw`w-full p-4 bg-offwhite`}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`
export const Image = styled(Img)`
  ${tw`opacity-80`}
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
`
export const ContentWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`items-start` : tw`items-end`}
  ${tw`flex-1 px-8 flex flex-col justify-center`}
`
export const DescAndTechWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`items-start` : tw`items-end`}
  ${tw`mb-8 flex flex-col justify-center`}
`
export const DescriptionWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`items-start` : tw`items-end`}
  ${tw`mb-8 flex flex-col justify-center`}
`
export const DescriptionTitle = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`mb-2 text-charcoal text-2xl font-playfair-display font-bold`}
`
export const Description = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`text-charcoal text-base font-playfair-display font-normal`}
`
export const TechnologyWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`items-start` : tw`items-end`}
  ${tw`flex flex-col justify-center`}
`
export const TechnologyTitle = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`mb-2 text-charcoal text-2xl font-playfair-display font-bold`}
`
export const Technology = styled.p<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`text-left` : tw`text-right`}
  ${tw`text-charcoal text-base font-playfair-display font-normal`}
`
export const DividerWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`pr-24 items-start` : tw`pl-24 items-end`}
  ${tw`w-full mb-8 flex flex-col justify-center`}
`
export const Divider = tw.hr`w-full h-0 mb-2 last:mb-0 border border-charcoal`
export const LinksWrapper = styled.div<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left ? tw`justify-start` : tw`justify-end`}
  ${tw`flex flex-row items-center`}
`
export const ExternalLink = styled(StyledExternalLink)`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`mr-8 last:mr-0 text-left`
      : tw`ml-8 last:ml-0 text-right`}
  ${tw`text-charcoal text-base font-playfair-display font-normal`}
`
export const Icon = styled(FontAwesomeIcon)<DirectionProps>`
  ${({ _direction }) =>
    _direction === PD.Left
      ? tw`absolute right-project-arrow`
      : tw`absolute left-project-arrow`}
  ${tw`bottom-project-arrow text-project-arrow`}
  color: transparent;
  & > g g path {
    stroke: var(--charcoal);
    stroke-width: 4;
  }
`

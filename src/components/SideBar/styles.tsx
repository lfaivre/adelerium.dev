import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Img from "gatsby-image"

interface SelectedProps {
  selected: boolean
}

interface StyledExternalLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

const StyledExternalLink = ({
  className,
  children,
  ...rest
}: StyledExternalLinkProps) => (
  <a {...rest} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
)

export const SideBarWrapper = tw.div`w-full min-h-screen xl:h-full p-8 flex flex-col justify-start items-center bg-charcoal`
export const ProfileWrapper = tw.div`w-full mb-8 mobile:mb-16 xl:mb-8 flex flex-row justify-center items-center xl:flex-col xl:justify-start xl:items-center`
export const ProfileImageWrapper = tw.div`hidden mobile:block mobile:w-2/5 xl:w-9/12 mobile:p-4 xl:mb-4 bg-offwhite`
export const ProfileImage = styled(Img)`
  ${tw`w-full opacity-80`}
`
export const ProfileTextWrapper = tw.div`w-full mobile:w-3/5 mobile:pl-4 xl:pl-0 xl:w-full flex flex-col justify-center items-center`
export const ProfileName = tw.p`w-full mb-2 text-2xl text-center mobile:text-left xl:text-center font-playfair-display font-bold text-offwhite`
export const ProfileTag = tw.p`w-full text-base text-center mobile:text-left xl:text-center font-playfair-display font-normal text-offwhite lowercase`
//
export const LinkSectionWrapper = tw.div`w-full px-4 mb-8 flex-1 flex flex-col justify-center items-center`
export const ExternalLink = styled(StyledExternalLink)`
  ${tw`w-full mb-4 last:mb-0 text-2xl text-left font-playfair-display font-normal text-offwhite`}
`
export const InternaLink = styled(Link)`
  ${tw`w-full mb-4 last:mb-0 text-2xl text-left font-playfair-display font-normal text-offwhite`}
`
export const BrandingWrapper = tw.div`w-full flex flex-row justify-center items-center`
export const Branding = styled(StyledExternalLink)`
  ${tw`w-full text-2xl text-center font-mrs-sheppards font-normal text-offwhite lowercase`}
`
export const ViewButtonsWrapper = tw.div`w-full mb-8 flex flex-col justify-center items-center`
export const LineWrapper = tw.div`w-full mb-8 flex flex-col`
export const Line = tw.hr`w-full h-0 mb-4 last:mb-0 border border-offwhite`
export const ButtonsWrapper = tw.div`w-full flex flex-row justify-center items-center`
export const ViewButton = styled.button<SelectedProps>`
  ${tw`w-16 h-16 rounded-full mr-8 last:mr-0 text-4xl font-lobster-two focus:outline-none`}
  ${({ selected }) =>
    selected
      ? tw`bg-offwhite text-charcoal`
      : tw`bg-transparent text-transparent`};
  ${({ selected }) =>
    selected
      ? ``
      : `-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: var(--offwhite);`};
`

import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Img from "gatsby-image"

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

export const SideBarWrapper = tw.div`w-full h-full pt-8 pb-4 px-8 flex flex-col justify-between items-center bg-charcoal`
export const ProfileWrapper = tw.div`w-full pb-8 flex flex-col justify-start items-center`
export const ProfileImageWrapper = tw.div`w-9/12 p-4 mb-4 bg-offwhite`
export const ProfileImage = styled(Img)`
  ${tw`opacity-80`}
`
export const ProfileTextWrapper = tw.div`w-full flex flex-col justify-start items-center`
export const ProfileName = tw.p`w-full mb-2 text-2xl text-center font-playfair-display font-bold text-offwhite lowercase`
export const ProfileTag = tw.p`w-full text-base text-center font-playfair-display font-normal text-offwhite lowercase`

export const LinkSectionWrapper = tw.div`w-full pb-4 flex flex-col justify-start items-center`
export const LinkSectionSeparator = tw.hr`w-full h-0 mb-4 border border-offwhite`
export const LinkSectionTitle = tw.p`w-full mb-4 text-base text-left font-playfair-display font-bold text-offwhite lowercase`
export const ExternalLink = styled(StyledExternalLink)`
  ${tw`w-full mb-4 last:mb-0 text-base text-left font-playfair-display font-normal text-offwhite`}
`
export const InternaLink = styled(Link)`
  ${tw`w-full mb-4 last:mb-0 text-base text-left font-playfair-display font-normal text-offwhite`}
`

export const BrandingWrapper = tw.div`w-full flex flex-row justify-center items-center`
export const Branding = styled(StyledExternalLink)`
  ${tw`w-full text-2xl text-center font-mrs-sheppards font-normal text-offwhite lowercase`}
`

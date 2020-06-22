import tw, { styled } from "twin.macro"

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

export const FooterWrapper = tw.footer`w-full px-4 py-8 mobile:p-8 bg-offwhite`
export const FirstFooterRow = tw.div`hidden md:flex w-full mb-8 flex-row justify-between items-start`
export const BusinessWrapper = tw.div`w-2/6 flex flex-col justify-start items-start`
export const BusinessTitle = tw.p`text-charcoal text-base font-playfair-display font-bold text-left`
export const BusinessLink = styled(StyledExternalLink)`
  ${tw`text-charcoal text-base font-playfair-display font-normal text-left`}
`
export const FactWrapper = tw.div`w-2/6 flex flex-col justify-center items-center`
export const FactTitle = tw.p`text-charcoal text-base font-playfair-display font-bold text-center`
export const FactText = tw.p`text-charcoal text-base font-playfair-display font-normal text-center`
export const LinkWrapper = tw.div`w-2/6 flex flex-row justify-end items-center`
export const ExternalLink = styled(StyledExternalLink)`
  ${tw`text-charcoal mr-4 last:mr-0 text-base font-playfair-display font-bold text-right`}
`
export const SecondFooterRow = tw.div`w-full mb-8 flex flex-row justify-between items-start`
export const BrandingWrapper = tw.div`hidden md:flex w-2/6 flex-row justify-center items-center`
export const Branding = tw.p`text-charcoal text-4xl font-mrs-sheppards font-normal text-center`
export const Divider = tw.hr`block md:hidden w-full h-0 mb-2 border-t border-charcoal`
export const ThirdFooterRow = tw.div`w-full flex flex-row justify-between md:justify-center items-start`
export const ResponsiveSpan = tw.span`hidden md:inline`
export const CopyrightText = tw.p`text-charcoal text-xs font-playfair-display-sc font-normal text-left md:text-center uppercase`
export const BrandingTwo = tw.div`block md:hidden text-charcoal text-xl font-mrs-sheppards font-normal text-right`

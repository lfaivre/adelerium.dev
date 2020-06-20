import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

export const MessageWrapper = tw.div`w-full flex flex-col justify-center items-center`
export const TitleWrapper = tw.div`w-full flex flex-row justify-center items-center`
export const Title = tw.p`text-offwhite text-5xl font-playfair-display font-bold`
export const LinkWrapper = tw.div`w-full mt-4 flex flex-row justify-center items-center`
export const InternalLink = styled(Link)`
  ${tw`text-offpink text-2xl font-playfair-display font-bold`}
`
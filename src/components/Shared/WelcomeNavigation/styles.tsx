import tw, { styled } from "twin.macro"

export const WelcomeNavigationWrapper = styled.div`
  ${tw`px-8 py-4 -ml-8 mb-8 flex flex-row justify-between items-center bg-offwhite`}
  width: calc(100% + 4rem)
`
export const TitleWrapper = tw.div`flex justify-start items-center`
export const Title = tw.h1`text-2xl mobile:text-4xl font-playfair-display font-bold text-charcoal`

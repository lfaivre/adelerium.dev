import tw, { styled } from "twin.macro"

// GENERAL
export const PageContentWrapper = tw.div`w-full p-2 md:p-8 bg-charcoal`

// INDEX PAGE
export const IndexPageNavigatorWrapper = styled.div`
  ${tw`w-full h-full bg-green-500`}
  @media (min-width: 768px) {
    min-height: calc(100vh - 2rem);
  }
  min-height: calc(100vh - 1rem);
`
export const IndexPageContentWrapper = tw.div`w-full bg-transparent`

// ABOUT PAGE
export const AboutPageContentWrapper = tw.div`w-full bg-transparent`

// ABOUT PAGE
export const BlogPageContentWrapper = tw.div`w-full bg-transparent`

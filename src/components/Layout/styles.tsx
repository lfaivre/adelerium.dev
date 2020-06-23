import tw, { styled } from "twin.macro"
import BackgroundImage from "../Shared/BackgroundImage"

interface PageWrapperStaticProps {
  headerHeight: number
  isIndex: boolean
}

interface ReturnButtonIndicatorProps {
  readonly isIndicator?: boolean
}

export const LayoutWrapper = tw.div`w-screen h-screen flex flex-row`
export const SideBarWrapper = tw.div`fixed hidden xl:block xl:w-1/5 h-full`
export const ContentWrapper = styled.div`
  ${tw`w-full xl:w-4/5 h-full flex flex-col`}
  @media (min-width: 1280px) {
    margin-left: 20%;
  }
`
export const HeaderWrapper = tw.div`fixed z-10 w-full`
export const PageWrapperStatic = styled.div<PageWrapperStaticProps>`
  ${tw`w-full`}
  margin-top: ${({ headerHeight, isIndex }) =>
    !isIndex ? `${headerHeight}px` : 0}
`
export const MainWrapper = tw.main`w-full`
export const ReturnButtonWrapper = tw.div`w-full p-8 flex flex-row justify-center md:justify-end items-center`
export const ReturnButton = styled.button`
  ${tw`w-16 h-16 border-2 border-solid border-offwhite rounded-full flex flex-col justify-center items-center bg-transparent overflow-hidden focus:outline-none`}
  &:hover > span:first-of-type {
    background-color: var(--offwhite);
  }
`
export const ReturnButtonIndicator = styled.span<ReturnButtonIndicatorProps>`
  ${tw`w-full h-8 bg-transparent transition-colors duration-300 ease-in-out`}
`

// TODO: MOVE
export const StyledBackgroundImage = styled(BackgroundImage)`
  ${tw`h-full w-full`}
  &:before {
    opacity: 80% !important;
  }
`

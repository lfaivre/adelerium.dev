import tw, { styled } from "twin.macro"
import BackgroundImage from "../components/Shared/BackgroundImage"
import { BackgroundImage as BI } from "../types/presentation"

interface StyledProps {
  screenSize: BI
  opacity: boolean
}

// GENERAL
export const PageContentWrapper = tw.div`w-full p-2 md:p-8 bg-charcoal`

// INDEX PAGE
export const IndexPageContentWrapper = tw.div`hidden xl:block w-full min-h-screen bg-transparent`
export const NavigatorWrapper = tw.div`block xl:hidden`
export const IndexPageBackgroundImage = styled(BackgroundImage)<StyledProps>`
  ${({ screenSize }) =>
    screenSize === BI.Mobile ? tw`block xl:hidden` : tw`hidden xl:flex`}
  ${({ opacity }) => opacity && tw`opacity-80!`}
  height: 100vh;
  align-items: center;
  justify-content: center;
`

// ABOUT PAGE
export const AboutPageContentWrapperDesktop = tw.div`w-full p-2 md:p-8 bg-transparent`
export const AboutPageContentWrapperMobile = tw.div`w-full h-full p-2 bg-purple-900`

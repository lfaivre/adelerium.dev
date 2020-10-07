import tw, { styled, TwStyle } from 'twin.macro';
import { animated } from 'react-spring';

type LayoutWidth = { layoutWidth: number };

type SideBarWrapperProps = { sideBarWidth: number };

export const SideBarWrapper = styled(animated.div)<SideBarWrapperProps>`
  ${tw`absolute top-0 h-full`}
  width: ${({ sideBarWidth }) => `${sideBarWidth || 0}px`};
`;

type ContentWrapperProps = LayoutWidth & { sideBarIsCollapsed: boolean; sideBarWidth: number };

export const ContentWrapper = styled(animated.div)<ContentWrapperProps>`
  ${tw`absolute top-0 flex flex-col items-start justify-start h-full`}
  left: ${({ sideBarIsCollapsed, sideBarWidth }) =>
    sideBarIsCollapsed ? 0 : `${sideBarWidth || 0}px`};
  width: ${({ layoutWidth }) => `${layoutWidth || 0}px`};
`;

type ScrollableWrapperProps = { headerHeight: number; pathIsIndex: boolean };

export const ScrollableWrapper = styled.div<ScrollableWrapperProps>`
  ${tw`flex flex-col items-start justify-start w-full overflow-x-hidden overflow-y-scroll`}
  height: ${({ headerHeight, pathIsIndex }) =>
    pathIsIndex ? `100vh` : `calc(100vh - ${headerHeight || 0}px)`}
`;

// @todo Move color map to shared utility

type ReturnButtonBorderColorValues = `border-offwhite` | `border-charcoal` | `border-offpink`;

const returnButtonBorderColorMap: { [key in ReturnButtonBorderColorValues]: TwStyle } = {
  'border-offwhite': tw`border-offwhite`,
  'border-charcoal': tw`border-charcoal`,
  'border-offpink': tw`border-offpink`,
};

type ReturnButtonBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink`;

const returnButtonBackgroundColorMap: { [key in ReturnButtonBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
};

type ReturnButtonProps = {
  borderColor: ReturnButtonBorderColorValues;
  backgroundColor: ReturnButtonBackgroundColorValues;
};

export const ReturnButton = styled.button<ReturnButtonProps>`
  ${tw`flex flex-col items-center justify-center focus:outline-none border-2 border-solid rounded-full bg-transparent w-16 h-16 overflow-hidden`}
  ${({ borderColor }) => returnButtonBorderColorMap[borderColor]}
  &:hover > span:first-of-type {
    ${({ backgroundColor }) => returnButtonBackgroundColorMap[backgroundColor]}
  }
`;

export const ReturnButtonIndicator = tw.span`transition-colors duration-300 ease-in-out w-full h-8`;

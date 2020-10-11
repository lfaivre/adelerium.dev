import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import tw, { css } from 'twin.macro';

import { useAppState, useAppDispatch } from '../../../../shared/hooks/global-state';
import { usePathData } from '../../../../shared/hooks/location';
import { useDimensions } from '../../../../shared/hooks/useDimensions';
import { SCREEN_SIZE } from '../../../../shared/constants/presentation';
import {
  SET_LOADING,
  SET_SIDEBAR_VISIBILITY,
  SET_HEADER_HEIGHT,
  SET_FOOTER_HEIGHT,
  SET_RETURN_HEIGHT,
} from '../../../../shared/types/state';

import { SideBar } from './SideBar';
import { Header } from './Header';
import { Footer } from './Footer';

import { FullWidthWrapper, FlexRowWrapper } from '../../../../shared/styles/wrappers';
import { ReturnButton, ReturnButtonIndicator } from './styles';

const DEFAULT_SIDEBAR_WIDTH = 0.25 * 1680;

const handleSmoothScrollToTop = (): void => {
  if (typeof window !== `undefined`) window.scrollTo({ top: 0, behavior: `smooth` });
};

type DefaultViewProps = { children: ReactElement };

export const DefaultView = ({ children }: DefaultViewProps): ReactElement => {
  const {
    isLoading,
    sideBarIsVisible,
    headerIsVisible,
    returnButtonIsVisible,
    footerIsVisible,
    windowWidth,
    layoutWidth,
    headerHeight,
  } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname } = usePathData();

  const handleOutOfBoundsToggle = (): void => {
    if (!sideBarIsVisible) return;
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
  };

  /**
   * Layout Effect(s): Initialize View
   *
   * - Set the width of the window gutters
   * - Set the width of the side bar navigator
   * - Hide the side bar navigator when the pathname changes
   * - Scroll to the top of the page
   */

  const [windowGutterWidth, setWindowGutterWidth] = useState<number | undefined>();

  useLayoutEffect(() => {
    if (windowWidth === 0 || layoutWidth === 0) return;
    const updatedWindowGutterWidth = (windowWidth - layoutWidth) / 2;
    setWindowGutterWidth(updatedWindowGutterWidth);
  }, [windowWidth, layoutWidth]);

  const [sideBarWidth, setSideBarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);

  useLayoutEffect(() => {
    if (layoutWidth === 0) return;
    const updatedSideBarWidth = layoutWidth < SCREEN_SIZE.SM ? layoutWidth : DEFAULT_SIDEBAR_WIDTH;
    setSideBarWidth(updatedSideBarWidth);
  }, [layoutWidth]);

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) window.scrollTo({ top: 0 });
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
  }, [pathname, dispatch]);

  /**
   * Layout Effect(s): Set Element Dimensions (Height)
   *
   * - Elements: header wrapper, footer wrapper, return button wrapper
   * - Utilize a ResizeObserver to keep track of changes to element dimensions
   * - Dispatch changes to the global store
   */

  const headerRef = useRef(null);
  const { height: observedHeaderHeight } = useDimensions({ ref: headerRef });

  useLayoutEffect(() => {
    if (observedHeaderHeight === 0) return;
    dispatch({ type: SET_HEADER_HEIGHT, headerHeight: observedHeaderHeight });
  }, [observedHeaderHeight, dispatch]);

  const footerRef = useRef(null);
  const { height: observedFooterHeight } = useDimensions({ ref: footerRef });

  useLayoutEffect(() => {
    if (observedFooterHeight === 0) return;
    dispatch({ type: SET_FOOTER_HEIGHT, footerHeight: observedFooterHeight });
  }, [observedFooterHeight, dispatch]);

  const returnRef = useRef(null);
  const { height: observedReturnHeight } = useDimensions({ ref: returnRef });

  useLayoutEffect(() => {
    if (observedReturnHeight === 0) return;
    dispatch({ type: SET_RETURN_HEIGHT, returnHeight: observedReturnHeight });
  }, [observedReturnHeight, dispatch]);

  /**
   * After Layout Effect(s)
   *
   * - Once the changes are painted by the browser, remove the loading screen
   */

  useEffect(() => {
    if (!isLoading) return;
    dispatch({ type: SET_LOADING, isLoading: false });
  }, [isLoading, dispatch]);

  /**
   * Initialize React Spring Element Configurations
   *
   * - Elements: header wrapper, side bar wrapper, content wrapper
   */

  const headerWrapperProps = useSpring({
    to: {
      display: headerIsVisible && windowGutterWidth ? `flex` : `none`,
      left: windowGutterWidth
        ? sideBarIsVisible
          ? windowGutterWidth + sideBarWidth
          : windowGutterWidth
        : 0,
    },
    config: { ...config.default, clamp: false },
  });

  const sideBarWrapperProps = useSpring({
    from: {
      display: `none`,
    },
    to: {
      display: sideBarIsVisible && windowGutterWidth ? `flex` : `none`,
      left: windowGutterWidth
        ? sideBarIsVisible
          ? windowGutterWidth
          : windowGutterWidth - sideBarWidth
        : 0,
    },
    config: { ...config.default, clamp: false },
  });

  const contentWrapperProps = useSpring({
    to: {
      paddingTop: headerIsVisible ? headerHeight : 0,
      marginLeft: windowGutterWidth ? (sideBarIsVisible ? sideBarWidth : 0) : 0,
    },
    config: { ...config.default, clamp: false },
  });

  return (
    <>
      <animated.div
        ref={headerRef}
        style={headerWrapperProps}
        css={[
          css`
            width: ${layoutWidth}px;
          `,
          tw`fixed top-0 z-30 flex-row items-start justify-center bg-offwhite p-4 md:px-8`,
        ]}
      >
        <Header />
      </animated.div>

      <animated.div
        style={sideBarWrapperProps}
        css={[
          css`
            width: ${sideBarWidth}px;
          `,
          tw`fixed top-0 z-30 border-r-2 border-charcoal h-screen max-h-global`,
        ]}
      >
        <SideBar />
      </animated.div>

      <animated.div
        onClick={handleOutOfBoundsToggle}
        style={contentWrapperProps}
        css={[
          css`
            width: ${layoutWidth}px;
          `,
          tw`z-0 flex flex-col items-start justify-start w-full`,
        ]}
      >
        <FullWidthWrapper>{children}</FullWidthWrapper>

        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          ref={returnRef}
          css={[
            returnButtonIsVisible ? tw`flex` : tw`hidden`,
            tw`flex-shrink-0 md:justify-end p-8 w-full`,
          ]}
        >
          <ReturnButton
            borderColor="border-offwhite"
            backgroundColor="bg-offwhite"
            aria-label="Return To Top"
            onClick={handleSmoothScrollToTop}
          >
            <ReturnButtonIndicator />
            <ReturnButtonIndicator />
          </ReturnButton>
        </FlexRowWrapper>

        <FullWidthWrapper
          ref={footerRef}
          css={[footerIsVisible ? tw`flex` : tw`hidden`, tw`flex-shrink-0`]}
        >
          <Footer />
        </FullWidthWrapper>
      </animated.div>

      <div
        css={[
          css`
            width: ${windowGutterWidth || 0}px;
          `,
          tw`fixed top-0 left-0 z-40 h-screen bg-charcoal`,
        ]}
      />
      <div
        css={[
          css`
            width: ${windowGutterWidth || 0}px;
          `,
          tw`fixed top-0 right-0 z-40 h-screen bg-charcoal`,
        ]}
      />
    </>
  );
};

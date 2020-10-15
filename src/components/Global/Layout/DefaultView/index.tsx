import { Footer } from '@adelerium/components/Global/Layout/DefaultView/Footer';
import { Header } from '@adelerium/components/Global/Layout/DefaultView/Header';
import { SideBar } from '@adelerium/components/Global/Layout/DefaultView/SideBar';
import { ReturnButton, ReturnButtonIndicator } from '@adelerium/components/Global/Layout/DefaultView/styles';
import { windowDimensionBreakpoints } from '@adelerium/shared/constants/dimensions';
import { useAppDispatch, useAppState } from '@adelerium/shared/hooks/app-state';
import { SET_DIMENSIONS, SET_VIEW } from '@adelerium/shared/hooks/app-state/constants';
import { useDimensions } from '@adelerium/shared/hooks/useDimensions';
import { usePathData } from '@adelerium/shared/hooks/usePathData';
import { FlexRowWrapper, FullWidthWrapper } from '@adelerium/shared/styles/wrappers';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const DEFAULT_SIDEBAR_WIDTH = 0.25 * windowDimensionBreakpoints.width.max;

const handleSmoothScrollToTop = (): void => {
  if (typeof window !== `undefined`) window.scrollTo({ top: 0, behavior: `smooth` });
};

type DefaultViewProps = { children: ReactElement };

export const DefaultView = ({ children }: DefaultViewProps): ReactElement => {
  const {
    view: {
      loadingScreen: { isVisible: loadingScreenIsVisible },
      sideBar: { isVisible: sideBarIsVisible },
      header: { isVisible: headerIsVisible },
      footer: { isVisible: footerIsVisible },
      returnButton: { isVisible: returnButtonIsVisible },
    },
    dimensions: {
      appWindow: { width: windowWidth },
      layout: { width: layoutWidth },
      header: { height: headerHeight },
    },
  } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname } = usePathData();

  const handleOutOfBoundsToggle = (): void => {
    if (!sideBarIsVisible) return;
    dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: false } } });
  };

  /**
   * @note Layout Effect(s): Initialize View
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
    const updatedSideBarWidth = layoutWidth < windowDimensionBreakpoints.width.sm ? layoutWidth : DEFAULT_SIDEBAR_WIDTH;
    setSideBarWidth(updatedSideBarWidth);
  }, [layoutWidth]);

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) window.scrollTo({ top: 0 });
    dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: false } } });
  }, [pathname, dispatch]);

  /**
   * @note Layout Effect(s): Set Element Dimensions (Height)
   *
   * - Elements: header wrapper, footer wrapper, return button wrapper
   * - Utilize a ResizeObserver to keep track of changes to element dimensions
   * - Dispatch changes to the global store
   */

  const headerRef = useRef(null);
  const headerDimensions = useDimensions({ ref: headerRef });

  useLayoutEffect(() => {
    const { width, height } = headerDimensions;
    dispatch({ type: SET_DIMENSIONS, payload: { header: { width, height } } });
  }, [headerDimensions, dispatch]);

  const footerRef = useRef(null);
  const footerDimensions = useDimensions({ ref: footerRef });

  useLayoutEffect(() => {
    const { width, height } = footerDimensions;
    dispatch({ type: SET_DIMENSIONS, payload: { footer: { width, height } } });
  }, [footerDimensions, dispatch]);

  const returnButtonRef = useRef(null);
  const returnButtonDimensions = useDimensions({ ref: returnButtonRef });

  useLayoutEffect(() => {
    const { width, height } = returnButtonDimensions;
    dispatch({ type: SET_DIMENSIONS, payload: { returnButton: { width, height } } });
  }, [returnButtonDimensions, dispatch]);

  /**
   * @note After Layout Effect(s)
   *
   * - Once the changes are painted by the browser, remove the loading screen
   */

  useEffect(() => {
    if (!loadingScreenIsVisible) return;
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: false } } });
  }, [loadingScreenIsVisible, dispatch]);

  /**
   * @note Initialize React Spring Element Configurations
   *
   * - Elements: header wrapper, side bar wrapper, content wrapper
   */

  const headerWrapperProps = useSpring({
    to: {
      display: headerIsVisible && windowGutterWidth !== undefined ? `flex` : `none`,
      left:
        windowGutterWidth !== undefined ? (sideBarIsVisible ? windowGutterWidth + sideBarWidth : windowGutterWidth) : 0,
    },
    config: { ...config.default, clamp: false },
  });

  const sideBarWrapperProps = useSpring({
    from: { display: `none` },
    to: {
      display: sideBarIsVisible && windowGutterWidth !== undefined ? `flex` : `none`,
      left:
        windowGutterWidth !== undefined ? (sideBarIsVisible ? windowGutterWidth : windowGutterWidth - sideBarWidth) : 0,
    },
    config: { ...config.default, clamp: false },
  });

  const contentWrapperProps = useSpring({
    to: {
      marginLeft: windowGutterWidth !== undefined ? (sideBarIsVisible ? sideBarWidth : 0) : 0,
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
            padding-top: ${headerIsVisible ? headerHeight : 0}px;
          `,
          tw`z-0 flex flex-col items-start justify-start w-full`,
        ]}
      >
        <FullWidthWrapper>{children}</FullWidthWrapper>

        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          ref={returnButtonRef}
          css={[returnButtonIsVisible ? tw`flex` : tw`hidden`, tw`flex-shrink-0 md:justify-end p-8 w-full`]}
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
          backgroundColor="bg-offwhite"
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

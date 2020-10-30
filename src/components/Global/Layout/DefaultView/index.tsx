import { Footer } from '@adelerium/components/Global/Footer';
import { Header } from '@adelerium/components/Global/Header';
import { DefaultViewProps } from '@adelerium/components/Global/Layout/DefaultView/types';
import { ReturnButton } from '@adelerium/components/Global/ReturnButton';
import { SideBar } from '@adelerium/components/Global/SideBar';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_DIMENSIONS, SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import { useKeyPress } from '@adelerium/hooks/useKeyPress';
import { usePathData } from '@adelerium/hooks/usePathData';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const defaultSidebarWidth = 0.25 * windowDimensionBreakpoints.width.max;

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);

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
    theme: { colors },
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

  const [sideBarWidth, setSideBarWidth] = useState(defaultSidebarWidth);

  useLayoutEffect(() => {
    if (layoutWidth === 0) return;
    const updatedSideBarWidth = layoutWidth < windowDimensionBreakpoints.width.sm ? layoutWidth : defaultSidebarWidth;
    setSideBarWidth(updatedSideBarWidth);
  }, [layoutWidth]);

  useLayoutEffect(() => {
    if (typeof window !== `undefined`) window.scrollTo({ top: 0, left: 0 });
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
   * @note Respond to Keypress Events
   *
   * - 't': Toggle side bar
   */

  const sideBarKeypressToggle = useKeyPress(`t`);

  useEffect(() => {
    if (sideBarKeypressToggle === false) return;
    dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideBarKeypressToggle, dispatch]);

  /**
   * @note Initialize React Spring Element Configurations
   *
   * - Elements: header wrapper, side bar wrapper, content wrapper
   */

  const headerWrapperProps = useSpring({
    from: {
      left: `auto`,
    },
    to: {
      left:
        windowGutterWidth !== undefined
          ? sideBarIsVisible
            ? windowGutterWidth + sideBarWidth
            : windowGutterWidth
          : `auto`,
    },
    config: { ...config.default, clamp: false },
  });

  const sideBarWrapperProps = useSpring({
    from: {
      visibility: `hidden`,
    },
    to: {
      visibility: sideBarIsVisible ? `visible` : `hidden`,
      left:
        windowGutterWidth !== undefined
          ? sideBarIsVisible
            ? windowGutterWidth
            : windowGutterWidth - sideBarWidth
          : -sideBarWidth,
    },
    config: { ...config.default, clamp: false },
  });

  const contentWrapperProps = useSpring({
    from: {
      marginLeft: 0,
    },
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
            background-color: ${colors.primary.default};
            width: ${layoutWidth}px;
          `,
          (!headerIsVisible || windowGutterWidth === undefined) && tw`hidden`,
          loadingScreenIsVisible ? tw`opacity-0` : tw`opacity-100`,
          tw`fixed top-0 z-30 p-4 md:px-8`,
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
          loadingScreenIsVisible ? tw`opacity-0` : tw`opacity-100`,
          tw`fixed top-0 z-30 h-screen max-h-global`,
        ]}
      >
        <SideBar />
      </animated.div>

      <AnimatedFlexColumnWrapper
        onClick={handleOutOfBoundsToggle}
        style={contentWrapperProps}
        alignItems="items-start"
        justifyContent="justify-start"
        css={[
          css`
            width: ${layoutWidth}px;
            padding-top: ${headerIsVisible ? headerHeight : 0}px;
          `,
          loadingScreenIsVisible ? tw`opacity-0` : tw`opacity-100`,
          tw`z-0 w-full`,
        ]}
      >
        <div tw="w-full">{children}</div>

        <FlexRowWrapper
          ref={returnButtonRef}
          alignItems="items-center"
          justifyContent="justify-center"
          css={[!returnButtonIsVisible && tw`hidden`, tw`flex-shrink-0 md:justify-end p-8 w-full`]}
        >
          <ReturnButton />
        </FlexRowWrapper>

        <div ref={footerRef} css={[!footerIsVisible && tw`hidden`, tw`flex-shrink-0 w-full`]}>
          <Footer />
        </div>
      </AnimatedFlexColumnWrapper>

      <div
        css={[
          css`
            background-color: ${colors.primary.default};
            width: ${windowGutterWidth || 0}px;
          `,
          tw`fixed top-0 left-0 z-40 h-screen`,
        ]}
      />
      <div
        css={[
          css`
            background-color: ${colors.primary.default};
            width: ${windowGutterWidth || 0}px;
          `,
          tw`fixed top-0 right-0 z-40 h-screen`,
        ]}
      />
    </>
  );
};

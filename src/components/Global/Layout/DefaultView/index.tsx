import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import tw, { css } from 'twin.macro';

import { useAppState, useAppDispatch } from '../../../../shared/hooks/global-state';
import { usePathData } from '../../../../shared/hooks/location';
import { SCREEN_SIZE } from '../../../../shared/constants/presentation';
import {
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

const handleReturn = (): void => {
  if (typeof window !== `undefined`) {
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
  }
};

type DefaultViewProps = { children: ReactElement };

export const DefaultView = ({ children }: DefaultViewProps): ReactElement => {
  const pathData = usePathData();
  const {
    sideBarIsVisible,
    headerIsVisible,
    returnButtonIsVisible,
    footerIsVisible,
    windowWidth,
    layoutWidth,
    headerHeight,
  } = useAppState();
  const dispatch = useAppDispatch();

  const [sideBarWidth, setSideBarWidth] = useState<number>(DEFAULT_SIDEBAR_WIDTH);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);

  // @todo Extract this to an external hook
  useLayoutEffect(() => {
    if (headerRef.current && headerRef.current.clientHeight) {
      const { clientHeight } = headerRef.current;
      dispatch({ type: SET_HEADER_HEIGHT, headerHeight: clientHeight });
    } else {
      dispatch({ type: SET_HEADER_HEIGHT, headerHeight: 0 });
    }

    if (footerRef.current && footerRef.current.clientHeight) {
      const { clientHeight } = footerRef.current;
      dispatch({ type: SET_FOOTER_HEIGHT, footerHeight: clientHeight });
    } else {
      dispatch({ type: SET_FOOTER_HEIGHT, footerHeight: 0 });
    }

    if (returnRef.current && returnRef.current.clientHeight) {
      const { clientHeight } = returnRef.current;
      dispatch({ type: SET_RETURN_HEIGHT, returnHeight: clientHeight });
    } else {
      dispatch({ type: SET_RETURN_HEIGHT, returnHeight: 0 });
    }
  }, [pathData.pathname, pathData.isIndex, windowWidth, dispatch]);

  useLayoutEffect(() => {
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
    if (typeof window !== `undefined`) {
      window.scrollTo({ top: 0 });
    }
  }, [dispatch, pathData.pathname]);

  useLayoutEffect(() => {
    const newSideBarWidth = layoutWidth < SCREEN_SIZE.SM ? layoutWidth : DEFAULT_SIDEBAR_WIDTH;
    setSideBarWidth(newSideBarWidth);
  }, [layoutWidth]);

  const handleOutOfBoundsToggle = (): void => {
    if (!sideBarIsVisible) return;
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
  };

  const sideBarWidthStyles = css`
    width: ${sideBarWidth}px;
  `;

  const layoutWidthStyles = css`
    width: ${layoutWidth}px;
  `;

  const headerPaddingStyles = css`
    padding-top: ${headerHeight}px;
  `;

  const gutterWidthStyles = css`
    width: ${(windowWidth - layoutWidth) / 2}px;
  `;

  const headerWrapperProps = useSpring({
    to: {
      left: sideBarIsVisible
        ? (windowWidth - layoutWidth) / 2 + sideBarWidth
        : (windowWidth - layoutWidth) / 2,
    },
    config: { ...config.default, clamp: false },
  });

  const sideBarWrapperProps = useSpring({
    to: {
      left: sideBarIsVisible
        ? (windowWidth - layoutWidth) / 2
        : (windowWidth - layoutWidth) / 2 - sideBarWidth,
    },
    config: { ...config.default, clamp: false },
  });

  const contentWrapperProps = useSpring({
    to: {
      marginLeft: sideBarIsVisible ? sideBarWidth : 0,
    },
    config: { ...config.default, clamp: false },
  });

  return (
    <>
      {headerIsVisible && (
        <animated.div
          ref={headerRef}
          style={headerWrapperProps}
          css={[
            tw`fixed top-0 z-30 flex flex-row items-start justify-center bg-offwhite p-4 md:px-8`,
            layoutWidthStyles,
          ]}
        >
          <Header />
        </animated.div>
      )}

      <animated.div
        style={sideBarWrapperProps}
        css={[
          tw`fixed top-0 z-30 border-r-2 border-charcoal h-screen max-h-global`,
          sideBarWidthStyles,
        ]}
      >
        <SideBar />
      </animated.div>

      <animated.div
        onClick={handleOutOfBoundsToggle}
        style={contentWrapperProps}
        css={[
          tw`z-0 flex flex-col items-start justify-start w-full`,
          layoutWidthStyles,
          headerIsVisible && headerPaddingStyles,
        ]}
      >
        <FullWidthWrapper>{children}</FullWidthWrapper>

        {returnButtonIsVisible && (
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            ref={returnRef}
            tw="flex-shrink-0 md:justify-end p-8 w-full"
          >
            <ReturnButton
              borderColor="border-offwhite"
              backgroundColor="bg-offwhite"
              aria-label="Return To Top"
              onClick={handleReturn}
            >
              <ReturnButtonIndicator />
              <ReturnButtonIndicator />
            </ReturnButton>
          </FlexRowWrapper>
        )}

        {footerIsVisible && (
          <FullWidthWrapper ref={footerRef} tw="flex-shrink-0">
            <Footer />
          </FullWidthWrapper>
        )}
      </animated.div>

      <div css={[tw`fixed top-0 left-0 z-40 w-32 h-screen bg-charcoal`, gutterWidthStyles]} />
      <div css={[tw`fixed top-0 right-0 z-40 w-32 h-screen bg-charcoal`, gutterWidthStyles]} />
    </>
  );
};

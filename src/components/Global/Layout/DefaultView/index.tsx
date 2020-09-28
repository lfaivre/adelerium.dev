import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import 'twin.macro';

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
import {
  SideBarWrapper,
  ContentWrapper,
  ScrollableWrapper,
  ReturnButton,
  ReturnButtonIndicator,
} from './styles';

const DEFAULT_SIDEBAR_WIDTH = 0.25 * 1680;

type DefaultViewProps = { children: ReactElement };

export const DefaultView = ({ children }: DefaultViewProps): ReactElement => {
  const pathData = usePathData();
  const { sideBarIsVisible, windowWidth, layoutWidth, headerHeight } = useAppState();
  const dispatch = useAppDispatch();

  const [sideBarWidth, setSideBarWidth] = useState<number>(DEFAULT_SIDEBAR_WIDTH);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

  // @todo Extract this to an external hook
  useEffect(() => {
    if (headerRef.current && headerRef.current.clientHeight) {
      const { clientHeight } = headerRef.current;
      dispatch({ type: SET_HEADER_HEIGHT, headerHeight: clientHeight });
    }
    if (footerRef.current && footerRef.current.clientHeight) {
      const { clientHeight } = footerRef.current;
      dispatch({ type: SET_FOOTER_HEIGHT, footerHeight: clientHeight });
    }
    if (returnRef.current && returnRef.current.clientHeight) {
      const { clientHeight } = returnRef.current;
      dispatch({ type: SET_RETURN_HEIGHT, returnHeight: clientHeight });
    }
  }, [pathData.pathname, pathData.isIndex, windowWidth, dispatch]);

  useLayoutEffect(() => {
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
    if (scrollableContainerRef && scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({ top: 0, left: 0 });
    }
  }, [dispatch, pathData.pathname]);

  useLayoutEffect(() => {
    const newSideBarWidth = layoutWidth < SCREEN_SIZE.SM ? layoutWidth : DEFAULT_SIDEBAR_WIDTH;
    setSideBarWidth(newSideBarWidth);
  }, [layoutWidth]);

  const handleReturn = (): void => {
    if (scrollableContainerRef && scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({ top: 0, left: 0, behavior: `smooth` });
    }
  };

  const handleOutOfBoundsToggle = (): void => {
    if (!sideBarIsVisible || pathData.isIndex === true) return;
    dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: false });
  };

  return (
    <FlexRowWrapper
      alignItems="items-start"
      justifyContent="justify-start"
      tw="relative z-0 w-full h-full"
    >
      <SideBarWrapper sideBarIsCollapsed={!sideBarIsVisible} sideBarWidth={sideBarWidth}>
        <SideBar />
      </SideBarWrapper>
      <ContentWrapper
        layoutWidth={layoutWidth}
        sideBarIsCollapsed={!sideBarIsVisible}
        sideBarWidth={sideBarWidth}
        onClick={handleOutOfBoundsToggle}
      >
        {!pathData.isIndex && (
          <FlexRowWrapper
            alignItems="items-start"
            justifyContent="justify-center"
            backgroundColor="bg-offwhite"
            tw="w-full"
            ref={headerRef}
          >
            <Header
              pathname={pathData.pathname}
              isIndex={pathData.isIndex}
              pathData={pathData.pathData}
              isValidPath={pathData.isValidPath}
            />
          </FlexRowWrapper>
        )}
        <ScrollableWrapper
          ref={scrollableContainerRef}
          headerHeight={headerHeight}
          pathIsIndex={pathData.isIndex}
        >
          <FullWidthWrapper>{children}</FullWidthWrapper>
          {!pathData.isIndex && (
            <>
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
              <FullWidthWrapper ref={footerRef}>
                <Footer
                  pathname={pathData.pathname}
                  isIndex={pathData.isIndex}
                  pathData={pathData.pathData}
                  isValidPath={pathData.isValidPath}
                />
              </FullWidthWrapper>
            </>
          )}
        </ScrollableWrapper>
      </ContentWrapper>
    </FlexRowWrapper>
  );
};

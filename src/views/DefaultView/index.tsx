import React from 'react';
import { DefaultViewContainer } from './styles';

interface DefaultViewProps {
  children: React.ReactNode;
}

export const DefaultView = ({ children }: DefaultViewProps): JSX.Element => {
  return (
    <DefaultViewContainer>
      <p>Default View</p>
      {children}
    </DefaultViewContainer>
  );
};

/* {windowWidth >= SCREEN_SIZE.XL && (
  <SideBarWrapper>
    <SideBar />
  </SideBarWrapper>
)}
<ContentWrapper>
  {pathData.isValidPath && !pathData.isIndex && (
    <HeaderWrapper
      ref={headerRef}
      onLoad={() => {
        console.log('LOADED HEADER WRAPPER');
      }}
    >
      <Header
        pathname={pathData.pathname}
        isIndex={pathData.isIndex}
        pathData={pathData.pathData}
        isValidPath={pathData.isValidPath}
      />
    </HeaderWrapper>
  )}
  {pathData.isValidPath &&
    ((windowWidth < SCREEN_SIZE.MD &&
      pathData.pathname in pathsWithImgBgsMobile) ||
      (windowWidth >= SCREEN_SIZE.MD &&
        pathData.pathname in pathsWithImgBgsDesktop)) && (
      <BackgroundImage
        headerHeight={headerHeight}
        isIndex={pathData.isIndex}
      />
    )}
  <MainWrapper headerHeight={headerHeight} isIndex={pathData.isIndex}>
    {children}
  </MainWrapper>
  {pathData.isValidPath && !pathData.isIndex && (
    <ReturnButtonWrapper ref={returnRef}>
      <ReturnButton onClick={handleScroll}>
        <ReturnButtonIndicator />
        <ReturnButtonIndicator />
      </ReturnButton>
    </ReturnButtonWrapper>
  )}
  {pathData.isValidPath && !pathData.isIndex && (
    <FooterWrapper ref={footerRef}>
      <Footer
        pathname={pathData.pathname}
        isIndex={pathData.isIndex}
        pathData={pathData.pathData}
        isValidPath={pathData.isValidPath}
      />
    </FooterWrapper>
  )}
</ContentWrapper> */

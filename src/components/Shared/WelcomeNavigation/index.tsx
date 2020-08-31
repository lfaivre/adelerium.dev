import React from 'react';

import { StyledInternalLink } from '../StyledInternalLink';

import { usePathData } from '../../../hooks/location';
import { InternalLinkDirection as ILD } from '../../../types/presentation';

import { WelcomeNavigationWrapper, TitleWrapper, Title } from './styles';

export const WelcomeNavigation = (): JSX.Element => {
  const pathData = usePathData();

  return (
    <WelcomeNavigationWrapper>
      <TitleWrapper>
        <Title>Welcome.</Title>
      </TitleWrapper>
      <StyledInternalLink
        pathname={pathData.pathname}
        isIndex={pathData.isIndex}
        pathData={pathData.pathData}
        isValidPath={pathData.isValidPath}
        direction={ILD.Next}
      />
    </WelcomeNavigationWrapper>
  );
};

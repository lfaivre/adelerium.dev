import React from 'react';

import { StyledInternalLink } from '../StyledInternalLink';

import { usePathData } from '../../../hooks/location';

import { InternalLinkDirection as ILD } from '../../../types/presentation';

import { WelcomeNavigationWrapper, TitleWrapper, Title } from './styles';

const WelcomeNavigation = () => {
  const pathData = usePathData();

  return (
    <WelcomeNavigationWrapper>
      <TitleWrapper>
        <Title>{`Welcome.`}</Title>
      </TitleWrapper>
      <StyledInternalLink {...pathData} direction={ILD.Next} />
    </WelcomeNavigationWrapper>
  );
};

export default WelcomeNavigation;

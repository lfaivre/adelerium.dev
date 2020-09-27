import React, { useState, useEffect } from 'react';
import { StyledInternalLink } from '../Shared/StyledInternalLink';

import { INDEX, PathDataHook } from '../../shared/types/paths';
import { InternalLinkDirection as ILD } from '../../shared/types/presentation';

import { HeaderWrapper, InternalLink, TitleWrapper, Title } from './styles';

export const Header = (props: PathDataHook): JSX.Element => {
  const [headerTitle, setHeaderTitle] = useState('Home');

  useEffect(() => {
    const newHeaderTitle = props.pathData && props.pathData.text ? props.pathData.text : 'Error';
    setHeaderTitle(newHeaderTitle);
  }, [props.pathData]);

  return (
    <HeaderWrapper>
      <InternalLink to={INDEX}>
        <TitleWrapper>
          <Title>{`${headerTitle}.`}</Title>
        </TitleWrapper>
      </InternalLink>
      <StyledInternalLink
        pathname={props.pathname}
        isIndex={props.isIndex}
        pathData={props.pathData}
        isValidPath={props.isValidPath}
        direction={ILD.Next}
      />
    </HeaderWrapper>
  );
};

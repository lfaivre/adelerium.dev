import React from 'react';

import { SitePaths } from '../../../data/paths';
import { PathDataHook } from '../../../types/paths';
import { InternalLinkDirection as ILD } from '../../../types/presentation';

import {
  InternalLink,
  Placeholder,
  InternalLinkWrapper,
  TitleTextWrapper,
  TitleText,
  PathInfoWrapper,
  PathText,
  Arrow,
} from './styles';

interface Props extends PathDataHook {
  direction: ILD;
}

const StyledInternalLink = ({ pathData, isValidPath, direction }: Props) => {
  const linkDataFromProps = (direction: ILD) => {
    const pathname =
      direction === ILD.Previous ? pathData.previous : pathData.next;
    const text = SitePaths[pathname].text;
    return { pathname, text };
  };

  return isValidPath &&
    linkDataFromProps(direction).pathname !== pathData.pathname ? (
    <InternalLink to={linkDataFromProps(direction).pathname}>
      <InternalLinkWrapper _direction={direction}>
        <TitleTextWrapper _direction={direction}>
          <TitleText _direction={direction}>
            {direction === ILD.Previous ? 'Previous' : 'Next'}
          </TitleText>
        </TitleTextWrapper>
        <PathInfoWrapper>
          {direction === ILD.Previous ? <Arrow _direction={direction} /> : null}
          <PathText _direction={direction}>
            {linkDataFromProps(direction).text}
          </PathText>
          {direction === ILD.Next ? <Arrow _direction={direction} /> : null}
        </PathInfoWrapper>
      </InternalLinkWrapper>
    </InternalLink>
  ) : (
    <Placeholder></Placeholder>
  );
};

export default StyledInternalLink;

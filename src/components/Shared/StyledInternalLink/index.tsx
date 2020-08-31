import React from 'react';

import { SitePaths } from '../../../data/paths';
import { INDEX, TPathname } from '../../../types/paths';
import { InternalLinkDirection as ILD } from '../../../types/presentation';

import { StyledInternalLinkProps } from './types';
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

export const StyledInternalLink = ({
  pathData,
  isValidPath,
  direction,
}: StyledInternalLinkProps): JSX.Element => {
  const linkDataFromProps = (): { pathname: TPathname; text: string } => {
    let pathname;

    if (pathData !== undefined) {
      pathname = direction === ILD.Previous ? pathData.previous : pathData.next;
    } else {
      pathname = INDEX;
    }

    const { text } = SitePaths[pathname];

    return { pathname, text };
  };

  return isValidPath &&
    pathData !== undefined &&
    linkDataFromProps().pathname !== pathData.pathname ? (
    <InternalLink to={linkDataFromProps().pathname}>
      <InternalLinkWrapper _direction={direction}>
        <TitleTextWrapper _direction={direction}>
          <TitleText _direction={direction}>
            {direction === ILD.Previous ? 'Previous' : 'Next'}
          </TitleText>
        </TitleTextWrapper>
        <PathInfoWrapper>
          {direction === ILD.Previous ? (
            <Arrow _direction={direction} />
          ) : (
            <></>
          )}
          <PathText _direction={direction}>{linkDataFromProps().text}</PathText>
          {direction === ILD.Next ? <Arrow _direction={direction} /> : <></>}
        </PathInfoWrapper>
      </InternalLinkWrapper>
    </InternalLink>
  ) : (
    <Placeholder />
  );
};

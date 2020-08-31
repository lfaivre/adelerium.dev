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
  pathname,
  pathData,
  direction,
}: StyledInternalLinkProps): JSX.Element => {
  const linkDataFromProps = (): { pathname: TPathname; text: string } => {
    let newPathname;

    if (pathData !== undefined) {
      newPathname =
        direction === ILD.Previous ? pathData.previous : pathData.next;
    } else {
      newPathname = INDEX;
    }

    const { text } = SitePaths[newPathname];

    return { pathname: newPathname, text };
  };

  return linkDataFromProps().pathname !== pathname ? (
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

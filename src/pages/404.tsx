import React, { useLayoutEffect, ReactElement } from 'react';
import { PageProps } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { useSpring, animated, config } from 'react-spring';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';

import { useNotFoundPageQueryData } from '../graphql/queries/useNotFoundPageQueryData';
import { useAppState, useAppDispatch } from '../shared/hooks/app-state';

import { SET_VIEW } from '../shared/types/state';

import { MinHeightScreenWrapper, FlexColumnWrapper } from '../shared/styles/wrappers';

const NotFoundPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage, accentImage } = useNotFoundPageQueryData();

  const {
    dimensions: {
      header: { height: headerHeight },
      footer: { height: footerHeight },
      returnButton: { height: returnButtonHeight },
    },
  } = useAppState();

  // @todo Convert this to component state
  const staticsHeight = headerHeight + footerHeight + returnButtonHeight;

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch({
      type: SET_VIEW,
      payload: { footer: { isVisible: false }, returnButton: { isVisible: false } },
    });
    return () => {
      dispatch({
        type: SET_VIEW,
        payload: { footer: { isVisible: true }, returnButton: { isVisible: true } },
      });
    };
  }, [dispatch]);

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <>
      <SEO title="404: Not Found" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper
        staticsHeight={staticsHeight}
        backgroundColor="bg-offwhite"
        tw="flex p-2 md:p-4 w-full h-full"
      >
        <FlexColumnWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          tw="flex-grow w-full"
        >
          <animated.div style={springProps} tw="flex flex-row justify-center p-8 w-full">
            <Img
              fluid={accentImage?.childImageSharp?.fluid as FluidObject | FluidObject[]}
              alt=""
              loading="eager"
              draggable={false}
              tw="mb-4 w-full md:w-1/2 max-w-md select-none"
            />
          </animated.div>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;

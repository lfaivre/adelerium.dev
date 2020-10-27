import { SEO } from '@adelerium/components/Global/SEO';
import { useNotFoundPageQueryData } from '@adelerium/graphql/useNotFoundPageQueryData';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { FlexColumnWrapper, FlexRowWrapper, MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React, { ReactElement, useLayoutEffect } from 'react';
import { animated, config, useSpring } from 'react-spring';
import 'twin.macro';

const AnimatedFlexRowWrapper = animated(FlexRowWrapper);

const NotFoundPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage, accentImage } = useNotFoundPageQueryData();

  const {
    dimensions: {
      navigationCollection: { height: navigationCollectionHeight },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch({ type: SET_VIEW, payload: { footer: { isVisible: false }, returnButton: { isVisible: false } } });
    return () => {
      dispatch({ type: SET_VIEW, payload: { footer: { isVisible: true }, returnButton: { isVisible: true } } });
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
        minHeight={navigationCollectionHeight}
        backgroundColor={colors.primary.default}
        tw="flex p-2 md:p-4 w-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-grow w-full">
          <AnimatedFlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            style={springProps}
            tw="p-8 w-full"
          >
            <Img
              fluid={accentImage?.childImageSharp?.fluid as FluidObject | FluidObject[]}
              alt=""
              loading="eager"
              fadeIn={false}
              draggable={false}
              tw="w-full md:w-1/2 max-w-md select-none"
            />
          </AnimatedFlexRowWrapper>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;

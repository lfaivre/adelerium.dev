import { SEO } from '@adelerium/components/Global/SEO';
import { DetailsProps, PropsAreEqualFunction } from '@adelerium/components/ProjectsPage/Details/types';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { A } from '@adelerium/styles/markdown/a';
import { Code } from '@adelerium/styles/markdown/code';
import { Em } from '@adelerium/styles/markdown/em';
import { H1, H2, H3, H4, H5, H6 } from '@adelerium/styles/markdown/headers';
import { InlineCode } from '@adelerium/styles/markdown/inlineCode';
import { Li } from '@adelerium/styles/markdown/li';
import { Ol } from '@adelerium/styles/markdown/ol';
import { Paragraph } from '@adelerium/styles/markdown/paragraph';
import { Pre } from '@adelerium/styles/markdown/pre';
import { Strong } from '@adelerium/styles/markdown/strong';
import { Ul } from '@adelerium/styles/markdown/ul';
import { BoldParagraphType, BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper, MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import { Link, navigate } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import isEqual from 'lodash.isequal';
import React, { MouseEvent, useLayoutEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const MDXProviderComponents: MDXProviderComponentsProp = {
  a: A,
  code: Code,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: InlineCode,
  li: Li,
  ol: Ol,
  p: Paragraph,
  pre: Pre,
  strong: Strong,
  ul: Ul,
};

const BoldParagraphTypeAsH1 = BoldParagraphType.withComponent(`h1`);
const AnimatedBoldType = animated(BoldType);

const propsAreEqual: PropsAreEqualFunction = (prevProps, nextProps) => {
  return isEqual(prevProps.data, nextProps.data);
};

export const Details: React.FC<DetailsProps> = ({ data }) => {
  const {
    dimensions: {
      navigationCollection: { height: navigationCollectionHeight },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  const [returnLinkHovered, setReturnLinkHovered] = useState(false);

  useLayoutEffect(() => {
    dispatch({
      type: SET_VIEW,
      payload: { header: { isVisible: false }, footer: { isVisible: false }, returnButton: { isVisible: true } },
    });
    return () => {
      dispatch({
        type: SET_VIEW,
        payload: { header: { isVisible: true }, footer: { isVisible: true }, returnButton: { isVisible: true } },
      });
    };
  }, [dispatch]);

  const handlePageTransition = async (event: MouseEvent): Promise<void> => {
    event.preventDefault();
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: true } } });
    await navigate(`/projects`);
  };

  const returnLinkSpringStyles = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: returnLinkHovered ? 1 : 0.25 },
    config: { ...config.molasses },
  });

  return (
    <>
      <SEO title={data.title || `Project Description`} pathname={`/projects/${data.slug || `error`}`} />;
      <MinHeightScreenWrapper
        minHeight={navigationCollectionHeight}
        tw="relative flex flex-col items-center justify-start p-2 xl:p-4 w-full overflow-x-hidden"
      >
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-start"
          css={[
            css`
              color: ${colors.secondary.default};
            `,
            tw`p-2 xl:p-4 w-full md:w-1/2`,
          ]}
        >
          <BoldParagraphTypeAsH1
            color={colors.secondary.default}
            textAlign="text-center"
            wordBreak="break-normal"
            enableSelect
            tw="block mb-2 w-full text-2xl md:text-3xl"
          >
            Port of Mars
          </BoldParagraphTypeAsH1>
          <BoldType
            color={colors.secondary.default}
            textAlign="text-center"
            wordBreak="break-normal"
            css={[tw`block mb-4 w-full uppercase text-xs`]}
          >
            Website - October 2020
          </BoldType>
          <hr
            css={[
              css`
                border-color: ${colors.tertiary.default};
              `,
              tw`mb-2 w-full`,
            ]}
          />
          <hr
            css={[
              css`
                border-color: ${colors.tertiary.default};
              `,
              tw`mb-4 w-full`,
            ]}
          />
          <MDXProvider components={MDXProviderComponents}>
            <MDXRenderer>{data.content?.childMdx?.body || `No Content`}</MDXRenderer>
          </MDXProvider>
          <Link to="/projects" onClick={handlePageTransition} tw="w-full">
            <AnimatedBoldType
              onMouseOver={() => setReturnLinkHovered(true)}
              onMouseOut={() => setReturnLinkHovered(false)}
              style={returnLinkSpringStyles}
              color={colors.secondary.default}
              textAlign="text-center"
              tw="w-full text-xs uppercase"
            >
              Return to Projects
            </AnimatedBoldType>
          </Link>
        </FlexColumnWrapper>
      </MinHeightScreenWrapper>
    </>
  );
};

export const MemoizedDetails = React.memo(Details, propsAreEqual);

import { IntroductionSectionProps } from '@adelerium/components/AboutPage/IntroductionSection/types';
import { useIntroductionSectionQueryData } from '@adelerium/components/AboutPage/IntroductionSection/useIntroductionSectionQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType, BoldType, NormalParagraphType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';

const windowWidthBreakpoint = windowDimensionBreakpoints.width.xl;

export const IntroductionSection = ({ dimensions: { width, height } }: IntroductionSectionProps): ReactElement => {
  const { introductionSection } = useIntroductionSectionQueryData();

  const {
    dimensions: {
      appWindow: { width: windowWidth },
    },
    theme: { colors },
  } = useAppState();

  return (
    <FlexRowWrapper
      alignItems="items-start"
      justifyContent="justify-start"
      css={[
        css`
          width: ${width !== -1 ? `${width}px` : `100%`};
          height: ${windowWidth >= windowWidthBreakpoint ? `${height}px` : `auto`};
        `,
        tw`mb-2 xl:mb-0 px-4 py-8 xl:px-16 xl:py-8`,
      ]}
    >
      <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full h-full">
        <BoldParagraphType
          color={colors.secondary.default}
          wordBreak="break-normal"
          tw="w-full mb-4 lg:mb-8 w-full text-2xl lg:text-3xl"
        >
          {introductionSection?.title}
        </BoldParagraphType>
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full overflow-y-scroll">
          {introductionSection?.content?.map((content) => {
            return (
              <FlexColumnWrapper
                alignItems="items-start"
                justifyContent="justify-start"
                tw="mb-2 lg:mb-4 last:mb-0 w-full"
                key={content?.title}
              >
                <BoldType color={colors.secondary.default} tw="w-full uppercase text-xs lg:text-base">
                  {content?.title}
                </BoldType>
                <NormalParagraphType color={colors.secondary.default} tw="w-full text-xs lg:text-base">
                  {content?.content?.content}
                </NormalParagraphType>
              </FlexColumnWrapper>
            );
          })}
        </FlexColumnWrapper>
      </FlexColumnWrapper>
    </FlexRowWrapper>
  );
};

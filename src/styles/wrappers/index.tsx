import { wrapperAlignItemsMap, wrapperJustifyContentMap } from '@adelerium/styles/tw-maps/wrappers';
import { FlexWrapperProps, MinHeightScreenWrapperProps } from '@adelerium/styles/wrappers/types';
import tw, { styled } from 'twin.macro';

export const FlexColumnWrapper = styled.div<FlexWrapperProps>`
  ${tw`flex`}
  ${({ reverse }) => (!reverse ? tw`flex-col` : tw`flex-col-reverse`)}
  ${({ alignItems }) => wrapperAlignItemsMap[alignItems]}
  ${({ justifyContent }) => wrapperJustifyContentMap[justifyContent]}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;

export const FlexRowWrapper = styled.div<FlexWrapperProps>`
  ${tw`flex`}
  ${({ reverse }) => (!reverse ? tw`flex-row` : tw`flex-row-reverse`)}
  ${({ alignItems }) => wrapperAlignItemsMap[alignItems]}
  ${({ justifyContent }) => wrapperJustifyContentMap[justifyContent]}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;

export const MinHeightScreenWrapper = styled.div<MinHeightScreenWrapperProps>`
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`};
  min-height: ${({ minHeight }) => `calc(100vh - ${minHeight}px);`};
`;

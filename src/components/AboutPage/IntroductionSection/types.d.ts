import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type IntroductionSectionProps = { dimensions: TileDimensions };

export type PropsAreEqualFunction = (
  prevProps: IntroductionSectionProps,
  nextProps: IntroductionSectionProps
) => boolean;

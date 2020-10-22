export type WrapperAlignItemsValues = `items-start` | `items-end` | `items-center` | `items-baseline` | `items-stretch`;

export type WrapperJustifyContentValues =
  | `justify-start`
  | `justify-end`
  | `justify-center`
  | `justify-between`
  | `justify-around`
  | `justify-evenly`;

export type WrapperBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink`;

export type DefaultWrapperProps = { backgroundColor?: WrapperBackgroundColorValues };

export type FullWidthWrapperProps = { backgroundColor?: WrapperBackgroundColorValues };

export type FlexWrapperProps = {
  reverse?: boolean;
  alignItems: WrapperAlignItemsValues;
  justifyContent: WrapperJustifyContentValues;
  backgroundColor?: WrapperBackgroundColorValues;
};

export type NewFlexWrapperProps = {
  reverse?: boolean;
  alignItems: WrapperAlignItemsValues;
  justifyContent: WrapperJustifyContentValues;
  backgroundColor?: string;
};

export type MinHeightScreenWrapperProps = { staticsHeight: number } & DefaultWrapperProps;

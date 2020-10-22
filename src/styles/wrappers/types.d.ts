export type WrapperAlignItemsValues = `items-start` | `items-end` | `items-center` | `items-baseline` | `items-stretch`;

export type WrapperJustifyContentValues =
  | `justify-start`
  | `justify-end`
  | `justify-center`
  | `justify-between`
  | `justify-around`
  | `justify-evenly`;

export type DefaultWrapperProps = { backgroundColor?: string };

export type FlexWrapperProps = {
  reverse?: boolean;
  alignItems: WrapperAlignItemsValues;
  justifyContent: WrapperJustifyContentValues;
  backgroundColor?: string;
};

export type MinHeightScreenWrapperProps = DefaultWrapperProps & { minHeight: number };

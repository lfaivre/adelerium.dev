export type TypeColorValues = `text-offwhite` | `text-charcoal` | `text-offpink` | `text-transparent`;

export type TypeTextAlignValues = `text-left` | `text-center` | `text-right` | `text-justify`;

export type TypeWordBreakValues = `break-normal` | `break-words` | `break-all` | `truncate`;

export type TypeProps = { color?: TypeColorValues; textAlign?: TypeTextAlignValues; wordBreak?: TypeWordBreakValues };

export type NewTypeProps = {
  color: string;
  defaultFontSize?: boolean;
  textAlign?: TypeTextAlignValues;
  wordBreak?: TypeWordBreakValues;
  enableSelect?: boolean;
};

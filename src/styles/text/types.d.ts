export type TypeTextAlignValues = `text-left` | `text-center` | `text-right` | `text-justify`;

export type TypeWordBreakValues = `break-normal` | `break-words` | `break-all` | `truncate`;

export type TypeProps = {
  color: string;
  defaultFontSize?: boolean;
  textAlign?: TypeTextAlignValues;
  wordBreak?: TypeWordBreakValues;
  enableSelect?: boolean;
};

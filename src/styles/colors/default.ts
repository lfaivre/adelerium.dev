import { ColorTheme } from '@adelerium/styles/colors/types';

/**
 * @note Define Palette
 */

export const name = `default`;

export const defaultColors: ColorTheme = {
  name,
  palette: {
    primary: {
      default: `#000000`,
    },
    secondary: {
      default: `#f3f2f1`,
    },
    tertiary: {
      default: `#fcf0ec`,
      transparent_12: `#fcf0ec1f`,
    },
  },
};

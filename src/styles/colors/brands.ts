import { ColorTheme_Brands } from '@adelerium/styles/colors/types';

/**
 * @note Define Brands
 */

export const FIGMA = `Figma`;
export const GITHUB = `GitHub`;
export const GOOGLE = `Google`;
export const LINKEDIN = `LinkedIn`;

/**
 * @note Define Palette
 */

export const name = `brands`;

export const brandsColors: ColorTheme_Brands = {
  name,
  palette: {
    [FIGMA]: {
      default: `#0acf83`,
    },
    [GITHUB]: {
      default: `#24292e`,
    },
    [GOOGLE]: {
      default: `#d44638`,
    },
    [LINKEDIN]: {
      default: `#2867b2`,
    },
  },
};

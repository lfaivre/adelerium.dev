export type ColorPaletteKeys = `primary` | `secondary` | `tertiary`;

export type ColorPaletteEntryKeys = `default`;

export type ColorPaletteValues = { [key in ColorPaletteEntryKeys]: string };

export type ColorPalette = { [key in ColorPaletteKeys]: ColorPaletteValues };

export type ColorPalette_Brands = { [string]: ColorPaletteValues };

export type ColorTheme = { name: string; palette: ColorPalette };

export type ColorTheme_Brands = { name: string; palette: ColorPalette_Brands };

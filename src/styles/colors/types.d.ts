export type ColorPaletteKeys = `primary` | `secondary` | `tertiary`;

export type ColorPaletteEntryKeys = `default`;

export type OptionalColorPaletteEntryKeys = `transparent_12`;

export type ColorPaletteValues = { [key in ColorPaletteEntryKeys]: string };

export type OptionalColorPaletteValues = { [key in OptionalColorPaletteEntryKeys]?: string };

export type ColorPalette = { [key in ColorPaletteKeys]: ColorPaletteValues & OptionalColorPaletteValues };

export type ColorPalette_Brands = { [string]: ColorPaletteValues & OptionalColorPaletteValues };

export type ColorTheme = { name: string; palette: ColorPalette };

export type ColorTheme_Brands = { name: string; palette: ColorPalette_Brands };

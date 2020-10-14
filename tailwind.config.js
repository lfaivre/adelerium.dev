module.exports = {
  future: { removeDeprecatedGapUtilities: true, purgeLayersByDefault: true },
  purge: [`./src/**/*.js`, `./src/**/*.jsx`, `./src/**/*.ts`, `./src/**/*.tsx`],
  theme: {
    extend: {
      maxWidth: {
        '1/4': `25%`,
        '1/2': `50%`,
        '3/4': `75%`,
        global: `1680px`,
      },
      maxHeight: {
        global: `1080px`,
      },
      margin: {
        '1/4': `0.0625rem`,
        '1/2': `0.125rem`,
      },
      inset: {
        8: `2rem`,
        '-8': `-2rem`,
      },
      colors: {
        offwhite: `var(--color-OffWhite)`,
        charcoal: `var(--color-Charcoal)`,
        offpink: {
          default: `var(--color-OffPink)`,
        },
      },
      fontFamily: {
        helvetica: [`Helvetica`, `Arial`, `sans-serif`],
        'lobster-two': [`\"Lobster Two\"`, `cursive`],
        'mrs-sheppards': [`\"Mrs Sheppards\"`, `cursive`],
        'playfair-display': [`\"Playfair Display\"`, `serif`],
      },
      fontSize: {
        '7xl': `4.5rem`,
      },
      lineHeight: {
        149: `149%`,
      },
    },
  },
  variants: {},
  plugins: [],
};

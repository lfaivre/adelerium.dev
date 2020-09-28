module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xsmobile: '360px',
        mobile: '375px',
        'mobile-only': { min: '375px', max: '639px' },
        'sm-only': { min: '640px', max: '767px' },
        'md-only': { min: '768px', max: '1023px' },
        'lg-only': { min: '1024px', max: '1279px' },
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        global: '1680px',
      },
      maxHeight: {
        global: '1080px',
      },
      margin: {
        'about-title-left': '-7.5rem',
        'about-title-right': '-7.5rem',
      },
      inset: {
        'project-arrow': '2rem',
        8: '2rem',
      },
      colors: {
        offwhite: 'var(--color-OffWhite)',
        charcoal: 'var(--color-Charcoal)',
        offpink: {
          default: 'var(--color-OffPink)',
          translucent25: 'var(--color-OffPink--Translucent25)',
          translucent50: 'var(--color-OffPink--Translucent50)',
        },
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        'lobster-two': ['"Lobster Two"', 'cursive'],
        'mrs-sheppards': ['"Mrs Sheppards"', 'cursive'],
        'playfair-display': ['"Playfair Display"', 'serif'],
      },
      fontSize: {
        '2xs': '0.5rem',
        '3.5xl': '2rem',
        '7xl': '4.5rem',
        'project-arrow': '6rem',
      },
      lineHeight: {
        149: '149%',
      },
      opacity: {
        80: '.8',
      },
    },
  },
  variants: {},
  plugins: [],
};

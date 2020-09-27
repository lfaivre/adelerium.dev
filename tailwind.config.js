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
      margin: {
        'about-title-left': '-7.5rem',
        'about-title-right': '-7.5rem',
      },
      inset: {
        'project-arrow': '2rem',
      },
      colors: {
        offwhite: '#F3F2F1',
        charcoal: '#1E2223',
        offpink: '#FCF0EC',
        'offpink-translucent': 'rgba(252,240,236, 0.5)',
      },
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'serif'],
        'playfair-display-sc': ['"Playfair Display SC"', 'serif'],
        'lobster-two': ['"Lobster Two"', 'cursive'],
        'mrs-sheppards': ['"Mrs Sheppards"', 'cursive'],
      },
      fontSize: {
        '3.5xl': '2rem',
        '7xl': '4.5rem',
        'project-arrow': '6rem',
      },
      opacity: {
        80: '.8',
      },
    },
  },
  variants: {},
  plugins: [],
};

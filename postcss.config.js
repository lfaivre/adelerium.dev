// @docs https://nystudio107.com/blog/using-tailwind-css-with-gatsby-react-emotion-styled-components

module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};

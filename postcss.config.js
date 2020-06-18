module.exports = {
  plugins: [
    require("postcss-import")({
      plugins: [require("stylelint")],
    }),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
}

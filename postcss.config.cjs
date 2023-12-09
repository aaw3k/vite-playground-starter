const postcssPresetEnv = require('postcss-preset-env')

// Define the configuration for postcss-preset-env
// @see https://preset-env.cssdb.org/features/
const postcssPresetEnvConfig = {
  stage: 0,
  features: {
    'logical-properties-and-values': false,
    'prefers-color-scheme-query': false,
    'gap-properties': false,
    'custom-properties': false,
    'dir-pseudo-class': false,
    'is-pseudo-class': false,
    'focus-within-pseudo-class': false,
    'focus-visible-pseudo-class': false,
    'color-functional-notation': false,
    'double-position-gradients': false,
    'has-pseudo-class': false,
    'cascade-layers': false,
  },
}

// PostCSS configuration
module.exports = {
  plugins: [postcssPresetEnv(postcssPresetEnvConfig)],
}

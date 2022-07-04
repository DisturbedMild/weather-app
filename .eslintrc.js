module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    "react/prop-types": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  },
  "env": {
    "browser": true,
    "jest": true
  },
};

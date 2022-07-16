module.exports = {
  injectGlobals: true,
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};

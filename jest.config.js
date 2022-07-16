module.exports = {
  injectGlobals: true,
  transform: {
    "^.+\\.spec.ts": ["@swc/jest"],
  },
};

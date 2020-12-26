/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
  },
  devOptions: {
    port: 8081,
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};

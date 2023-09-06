const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "https://kobex.rs/",
      blancoSudopereUrl: "https://kobex.rs/blanco/sudopere",
    },
  },
  video: false,
});

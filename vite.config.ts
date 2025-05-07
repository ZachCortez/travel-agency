import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "saturnbay",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
    plugins: [tailwindcss(),tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }// Also pass the config here!
  };
});

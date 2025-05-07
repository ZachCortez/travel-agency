import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "saturnbay",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: ""
  // ...
};


export default defineConfig(config => {
  return {
    build: {
      sourcemap: config.mode === "production" ? "hidden" : true
    }
    ,
    plugins: [tailwindcss(),tsconfigPaths(),reactRouter(),sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }// Also pass the config here!
  };
});

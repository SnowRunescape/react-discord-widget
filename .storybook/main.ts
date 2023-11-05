import type { StorybookConfig } from "@storybook/react-vite";
const tsconfigPaths = require("vite-tsconfig-paths");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || []), tsconfigPaths.default()],
    };
  },
};
export default config;

import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/*", "out/*", "node_modules/*", "pb_data/*"],
  },
];

export default eslintConfig;

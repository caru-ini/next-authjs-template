import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { globalIgnores,defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...nextVitals, ...nextTs, {
  name: 'tailwindcss/recommended',
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    tailwindcss: tailwind
  },
  rules: {
    ...tailwind.configs["recommended"].rules,
    'tailwindcss/classnames-order': [
      'warn',
      {
        callees: ['clsx', 'cn', 'twMerge']
      }
    ]
  }
}, eslintPluginPrettierRecommended, globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]), {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}]);

export default eslintConfig;

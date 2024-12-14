import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({extends: ["next/core-web-vitals", "next/typescript"]}),
  {
    ignores: [
      '**/.next/',
    ],
  },
  {
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
  },
  eslintPluginPrettierRecommended,
];

export default eslintConfig;

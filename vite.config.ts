import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
            eslint: { lintCommand: 'eslint "src/**/*.{ts,tsx}"' }
        })
    ],
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    }
});

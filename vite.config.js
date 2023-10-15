// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as packageJson from "./package.json";
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    dts({
      include: ["src/component/"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.js"),
      name: "React Nepali DatePicker",
      formats: ["es", "umd"],
      fileName: (format) => `react-nepali-datepicker.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));

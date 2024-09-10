import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const _plugins = [react()];
// _plugins.unshift(MillionLint.vite())


export default defineConfig({
  plugins: [react()],
  // plugins: _plugins,
  base: process.env.NODE_ENV === "production" ? "/React-Projects/" : "/"
});
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
	// Served from https://<user>.github.io/React-Projects/ in production,
	// and from the domain root while developing.
	// Set VITE_BASE (e.g. VITE_BASE=/) to deploy under a different path.
	base: process.env.VITE_BASE ?? (command === "build" ? "/React-Projects/" : "/"),
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		strictPort: true,
		// Container/preview environments reach the dev server through a proxy host
		allowedHosts: [".e2b.app", "localhost", "127.0.0.1"],
	},
	preview: {
		host: "0.0.0.0",
		port: 4173,
		allowedHosts: [".e2b.app", "localhost", "127.0.0.1"],
	},
	build: {
		outDir: "dist",
		sourcemap: false,
		target: "es2022",
	},
}));

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// HashRouter keeps deep links working on GitHub Pages (and any static host)
// without server side rewrites. Static assets are handled by Vite's `base`.
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</StrictMode>,
);

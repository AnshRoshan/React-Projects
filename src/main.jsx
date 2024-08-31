import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Determine the base URL based on the environment
const baseUrl =
	process.env.NODE_ENV === "production" ? "/React-Projects/" : "/";

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter basename={baseUrl}>
		<App />
	</BrowserRouter>,
);

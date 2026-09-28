import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { About, Contact, ErrorPage, Project } from "./pages";

// Projects are loaded on demand so the first paint only ships the shell.
const Accordion = lazy(() => import("./projects/Accordion.jsx"));
const Calculator = lazy(() => import("./projects/Calculator.jsx"));
const Color = lazy(() => import("./projects/Color.jsx"));
const Counter = lazy(() => import("./projects/Counter.jsx"));
const Currency = lazy(() => import("./projects/Currency.jsx"));
const Discord = lazy(() => import("./projects/Discord.jsx"));
const Fitness = lazy(() => import("./projects/Fitness/index.jsx"));
const Invoice = lazy(() => import("./projects/Invoice/index.jsx"));
const Nasa = lazy(() => import("./projects/NASA/index.jsx"));
const NikeLanding = lazy(() => import("./projects/NikeLanding.jsx"));
const PassGen = lazy(() => import("./projects/PassGen.jsx"));
const Quiz = lazy(() => import("./projects/Quiz.jsx"));
const TodoList = lazy(() => import("./projects/Todo/index.jsx"));

function App() {
	return (
		<Suspense
			fallback={
				<div className="centered min-h-dvh bg-background text-text">
					Loading…
				</div>
			}
		>
			<Routes>
				<Route path="/" element={<Project />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/currency" element={<Currency />} />
				<Route path="/passgen" element={<PassGen />} />
				<Route path="/accordion" element={<Accordion />} />
				<Route path="/calculator" element={<Calculator />} />
				<Route path="/discord" element={<Discord />} />
				<Route path="/color" element={<Color />} />
				<Route path="/nike" element={<NikeLanding />} />
				<Route path="/todo" element={<TodoList />} />
				<Route path="/nasa" element={<Nasa />} />
				<Route path="/fit" element={<Fitness />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/invoice" element={<Invoice />} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Suspense>
	);
}

export default App;

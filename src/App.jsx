import { Route, Routes } from "react-router-dom";

import { About, Contact, ErrorPage, Project } from "./pages";
import {
	Accordion,
	Calculator,
	Color,
	Counter,
	Currency,
	Discord,
	Fitness,
	Invoice,
	Nasa,
	NikeLanding,
	PassGen,
	Quiz,
	TodoList,
} from "./projects";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Project />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/counter" element={<Counter />} />j
			<Route path="/currency" element={<Currency />} />
			<Route path="/passgen" element={<PassGen />} />
			<Route path="/accordion" element={<Accordion />} />
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/discord" element={<Discord />} />
			<Route path="/color" element={<Color />} />
			<Route path="/error" element={<Error />} />
			<Route path="/nike" element={<NikeLanding />} />
			<Route path="/project" element={<Project />} />
			<Route path="/todo" element={<TodoList />} />
			<Route path="/nasa" element={<Nasa />} />
			<Route path="/fit" element={<Fitness />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/invoice" element={<Invoice />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;

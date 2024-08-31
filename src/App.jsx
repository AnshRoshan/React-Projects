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
	Nasa,
	NikeLanding,
	PassGen,
} from "./projects";
import ToDOList from "./projects/ToDOList";

function App() {
	return (
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
			<Route path="/error" element={<ErrorPage />} />
			<Route path="/nike" element={<NikeLanding />} />
			<Route path="/project" element={<Project />} />
			<Route path="/todo" element={<ToDOList />} />
			<Route path="/nasa" element={<Nasa />} />
			<Route path="/fit" element={<Fitness />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;

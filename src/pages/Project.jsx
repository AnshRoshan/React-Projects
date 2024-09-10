import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../util/data";

function Project() {
	return (
		<div className="mx-auto flex h-screen max-w-screen-2xl flex-col ">
			<Navbar />
			<div className="grid w-full flex-grow gap-y-8 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
				{projects.map((project) => (
					<Card
						key={project.link}
						title={project.title}
						description={project.description}
						image={project.image}
						tags={project.tags}
						link={project.link}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}
export default Project;

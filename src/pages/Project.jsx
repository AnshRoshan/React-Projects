import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../util/data";

function Project() {
	return (
		<div className="flex h-screen flex-col ">
			<Navbar />
			<div className="grid w-full flex-grow gap-y-8 p-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
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

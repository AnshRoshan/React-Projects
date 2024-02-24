import Card from "../components/Card"
import { projects } from "../util/data"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Project() {
    return (
        <div className="flex flex-col h-screen ">
            <Navbar />
            <div className='flex-grow grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 p-8 w-full '>
                {projects.map((project, index) => (
                    <Card
                        key={index}
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
    )
}
export default Project
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
	return (
		<div>
			<Navbar />
			<div className="mx-auto max-w-[100rem] px-4 text-text" id="tophead">
				<div className="flex flex-col space-y-8 pt-12 pb-10 md:pt-24">
					<div className="max-w-max rounded-full border-2 border-text p-1 px-3">
						<p className="font-semibold text-xs leading-normal md:text-sm">
							About the company
						</p>
					</div>
					<p className="font-bold text-3xl text-primary md:text-5xl md:leading-10">
						Made with love, right here in India
					</p>
					<p className="max-w-4xl text-base text-secondary md:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
						veritatis voluptates neque itaque repudiandae sint, explicabo
						assumenda quam ratione placeat?
					</p>
				</div>
				<div className="w-full space-y-4">
					<iframe
						title="BCE Map"
						width="100%"
						height={500}
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Bhagalpur%20College%20of%20Engineering%20(BCE),%20Bhagalpur&t=k&z=16&ie=UTF8&iwloc=&output=embed"
					/>
				</div>
				<div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
					<div className="flex w-full flex-col ">
						<FaLocationDot className="text-xl" />
						<p className="w-full font-semibold text-primary text-xl">
							Bhagalpur
						</p>
						<p className="w-full text-base text-gray-700">
							Mon-Sat 9am to 5pm.
						</p>
						<p className="font-medium text-sm">
							Sabour Bhagalpur, Bihar 813210 IN
						</p>
					</div>
				</div>
				<hr className="mt-20" />
				<div className="mt-16 flex items-center">
					<div className="space-y-6 md:w-3/4">
						<div className="max-w-max rounded-full border border-text p-1 px-3">
							<p className="font-semibold text-xs leading-normal md:text-sm">
								Join Us →
							</p>
						</div>
						<p className="font-bold text-3xl text-primary md:text-4xl">
							Meet our team
						</p>
						<p className="max-w-4xl text-base text-gray-700 md:text-xl">
							Our philosophy is simple — hire a team of diverse, passionate
							people and foster a culture that empowers you to do your best
							work.
						</p>
						<div />
					</div>
				</div>
				<div className="grid grid-cols-1 gap-4 gap-y-6 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
					<div className="rounded-xl border-2 p-4">
						<img
							src="https://avatars.githubusercontent.com/u/71877143?v=4"
							alt="Ansh Roshan"
							className=" w-full rounded-full object-cover "
						/>
						<p className="mt-6 w-full px-2 font-semibold text-primary text-xl">
							Ansh Roshan
						</p>
						<p className="w-full px-2 pb-6 font-semibold text-gray-500 text-sm">
							Web Devloper
						</p>
					</div>
				</div>
			</div>
			<hr className="mt-6" />
			<div className="mx-auto max-w-7xl">
				<Footer />
			</div>
		</div>
	);
}
export default About;

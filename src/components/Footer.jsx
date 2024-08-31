import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="flex max-h-36 flex-wrap items-center justify-between text-text">
			<div className="w-auto p-8">
				<a href="#projects">
					<div className="inline-flex items-center">
						<FaReact className="text-3xl" />
						<Link to="/">
							<span className="ml-4 animate-gradient bg-gradient-to-r from-10% from-indigo-500 via-30% via-sky-500 to-90% to-emerald-500 bg-clip-text py-4 text-center font-extrabold text-transparent text-xl md:text-2xl">
								React Projects
							</span>
						</Link>
					</div>
				</a>
			</div>
			<div className="w-auto p-8">
				<ul className="-m-5 flex flex-wrap items-center space-x-12">
					<li>
						<Link
							to="/project"
							className=" font-semibold hover:underline hover:underline-offset-2 "
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className=" font-semibold hover:underline hover:underline-offset-2 "
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className=" font-semibold hover:underline hover:underline-offset-2 "
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="w-auto p-8">
				<div className="-m-1.5 flex flex-wrap">
					<div className="w-auto p-1.5">
						<a href="http://github.com/anshroshan">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
								<FaGithub />
							</div>
						</a>
					</div>
					<div className="w-auto p-1.5">
						<a href="http://linkedin.com/anshroshan">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
								<FaXTwitter />
							</div>
						</a>
					</div>
					<div className="w-auto p-1.5">
						<a href="http://linkedin.com/anshroshan">
							<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
								<FaLinkedin />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;

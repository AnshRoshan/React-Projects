import { useEffect, useState } from "react";
import { FaCloudMoon, FaReact, FaSun } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
	// State to track the theme
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Effect to check and apply the saved theme on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}
	}, []);

	const toggleTheme = () => {
		document.documentElement.classList.toggle("dark");
		const newTheme = document.documentElement.classList.contains("dark")
			? "dark"
			: "light";
		setIsDarkMode(newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	return (
		<div className="relative mx-auto mt-2 flex h-16 w-[95%] items-center justify-between rounded-full bg-gray-500/30 px-4 py-2 text-text sm:px-6 lg:px-8 dark:bg-black/30">
			<div className="inline-flex items-center space-x-2">
				<span>
					<FaReact className="text-3xl" />
				</span>
				<Link to="/">
					<span className="animate-gradient bg-gradient-to-r from-10% from-indigo-500 via-30% via-sky-500 to-90% to-emerald-500 bg-clip-text py-4 text-center font-extrabold text-transparent text-xl md:text-2xl">
						React Projects
					</span>
				</Link>
			</div>
			<div className="hidden lg:block">
				<ul className="inline-flex space-x-8 text-text">
					<li>
						<Link
							to="/project"
							className="font-semibold text-sm hover:underline hover:underline-offset-2 "
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="font-semibold text-sm hover:underline hover:underline-offset-2 "
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="font-semibold text-sm hover:underline hover:underline-offset-2 "
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="hidden lg:block">
				<button
					type="button"
					className="rounded-md bg-primary px-3 py-2 font-semibold text-sm text-text shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
					onClick={toggleTheme}
				>
					{isDarkMode ? <FaCloudMoon /> : <FaSun />}
				</button>
			</div>
			<div className="lg:hidden">
				{/* onclick to show menu items */}
				<button
					type="button"
					className="rounded-md bg-primary p-2 font-semibold text-2xl text-text shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
					onClick={() => {}}
				>
					<IoMenu />
				</button>
			</div>
		</div>
	);
}
export default Navbar;

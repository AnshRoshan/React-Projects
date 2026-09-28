import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";

const CACHE_KEY = "nasa_apod";
const API_KEY = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";

function Nasa() {
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const cachedData = localStorage.getItem(CACHE_KEY);
		if (cachedData) {
			try {
				setData(JSON.parse(cachedData));
				setLoading(false);
				return;
			} catch {
				// Corrupted cache: fall through and fetch a fresh copy.
				localStorage.removeItem(CACHE_KEY);
			}
		}

		const controller = new AbortController();

		async function fetchAPIData() {
			try {
				const res = await fetch(
					`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
					{ signal: controller.signal },
				);
				const apiData = await res.json();

				if (!res.ok) {
					throw new Error(apiData.error?.message || "Failed to fetch data");
				}

				setData(apiData);
				localStorage.setItem(CACHE_KEY, JSON.stringify(apiData));
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message);
				}
			} finally {
				setLoading(false);
			}
		}

		fetchAPIData();

		return () => controller.abort();
	}, []);

	const handleModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div className="min-h-screen bg-[#030615] text-white">
			{/* React 19 hoists title/meta tags rendered anywhere in the tree into <head> */}
			<title>Nasa Space Image</title>
			{loading ? (
				<div className="flex h-full w-full items-center justify-center">
					<AiOutlineLoading3Quarters className="animate-spin" />
				</div>
			) : error ? (
				<div className="flex h-full w-full items-center justify-center text-red-500">
					<p>Error: {error}</p>
				</div>
			) : (
				<>
					<div className="relative z-10 h-full">
						{data && <Main data={data} />}
					</div>
					{showModal && <Sidebar data={data} handleModal={handleModal} />}
					{data && <Footer data={data} handleModal={handleModal} />}
				</>
			)}
		</div>
	);
}

export default Nasa;

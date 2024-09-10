import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from "./Footer";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Nasa() {
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		document.title = "Nasa Space Image";
		const cachedData = localStorage.getItem("nasa_apod");

		if (cachedData) {
			setData(JSON.parse(cachedData));
			setLoading(false);
		} else {
			fetchAPIData();
		}

		async function fetchAPIData() {
			const apiKey = import.meta.env.VITE_NASA_API_KEY;
			const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
			try {
				const res = await fetch(url);
				const apiData = await res.json();

				if (res.ok) {
					setData(apiData);
					localStorage.setItem("nasa_apod", JSON.stringify(apiData));
				} else {
					throw new Error(apiData.error?.message || "Failed to fetch data");
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
	}, []);

	useEffect(() => {
		if (data) {
			console.log(data);
			// Logs data when it's updated
		}
	}, [data]);

	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="min-h-screen bg-[#030615] text-white">
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

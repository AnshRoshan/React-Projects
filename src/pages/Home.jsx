import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home({ children }) {
	// Add more card data objects as needed
	return (
		<div className="flex h-screen flex-col ">
			<Navbar />
			<div className="grid w-full flex-grow gap-y-8 p-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
				{children}
			</div>
			<Footer />
		</div>
	);
}
export default Home;

import { amazon, brandlogo, flipkart, shoe } from "../assets";
const NikeLanding = () => {
	return (
		<div className="bg-white font-poppins">
			<nav className="flex h-[72px] items-center justify-between p-1 px-[8.33%]">
				<div className="logo">
					<img src={brandlogo} alt="Logo Of Nike" />
				</div>
				<ul className="flex items-center space-x-4">
					<li>
						<a href="/" className="font-semibold text-lg hover:text-gray-700">
							Menu
						</a>
					</li>
					<li>
						<a href="/" className="font-semibold text-lg hover:text-gray-700">
							Location
						</a>
					</li>
					<li>
						<a href="/" className="font-semibold text-lg hover:text-gray-700">
							About
						</a>
					</li>
					<li>
						<a href="/" className="font-semibold text-lg hover:text-gray-700">
							Contact
						</a>
					</li>
				</ul>
				<div className="login">
					<button
						type="submit"
						className=" bg-[#D01C28] px-4 py-2 font-semibold text-lg text-white"
					>
						Login
					</button>
				</div>
			</nav>
			<div className="hero h-[calc(100vh-72px)] px-[10.9%] py-[80px]">
				<div className=" flex items-center">
					<div className="w-1/2">
						<h1 className="font-extrabold text-[108px] leading-[102px]">
							YOUR FEET DESERVE THE BEST
						</h1>
						<div className="flex flex-col gap-8">
							<p className="h-[91px] w-[404px] font-semibold text-[#5A5959] text-[16px] ">
								YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP YOU WITH
								OUR SHOES.YOUR FEET DESERVE THE BEST AND WE&apos;RE HERE TO HELP
								YOU WITH OUR SHOES.
							</p>
							<div className="flex space-x-[90px]">
								<button
									type="button"
									className=" bg-[#D01C28] px-4 py-2 font-semibold text-lg text-white"
								>
									Shop Now
								</button>
								<button
									type="button"
									className=" border-2 border-black px-4 py-2 font-semibold text-lg"
								>
									Category
								</button>
							</div>
							<div className="space-y-4">
								<p className=" text-[#5A5959]">Also avaliable on </p>
								<div className="flex space-x-[40px]">
									<img src={flipkart} alt="flippkart" />
									<img src={amazon} alt="amazon" />
								</div>
							</div>
						</div>
					</div>
					<img className="h-[530px] " src={shoe} alt="shoe" />
				</div>
			</div>
		</div>
	);
};
export default NikeLanding;

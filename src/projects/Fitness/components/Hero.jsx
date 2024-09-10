import { fitness } from "../../../assets";
import Button from "./Button";
function Hero() {
	return (
		<>
			<img
				src={fitness}
				alt="Fitness"
				className="relative min-h-screen w-full bg-center bg-cover"
			/>
			<div className="absolute inset-0 z-10 m-auto flex h-fit max-w-3xl flex-col items-center justify-center gap-4 rounded-xl bg-black/70 p-4 px-24 text-center backdrop-blur-xl ">
				<p>It&apos;s time to get fit</p>
				<h1 className="font-semibold text-5xl uppercase md:text-6xl lg:text-7xl">
					Ansh <span className="text-blue-400">Fitness</span>
				</h1>
				<p className="font-light text-sm md:text-base">
					i hereby aknowledge that i am going to be a part of this journey.and
					accept all challenges in the workout routine
				</p>
				<Button
					func={() => {
						window.location.href = "#generate";
					}}
					text={"Accept & Begin"}
				/>
			</div>
		</>
	);
}
export default Hero;

import Button from "./Button";
import { fitness } from "../../../assets";
function Hero() {
  return (
    <>
      <img src={fitness} alt="Fitness" className="min-h-screen w-full bg-cover bg-center relative" />
      <div className="absolute inset-0 z-10 m-auto flex  max-w-3xl h-fit bg-black/70 backdrop-blur-xl rounded-xl flex-col  items-center justify-center gap-4 p-4 px-24 text-center ">
        <p>It&apos;s time to get fit</p>
        <h1 className="text-5xl font-semibold uppercase md:text-6xl lg:text-7xl">
          Ansh <span className="text-blue-400">Fitness</span>
        </h1>
        <p className="text-sm font-light md:text-base">
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

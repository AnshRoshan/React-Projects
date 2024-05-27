import Button from "./Button";

function Hero() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 p-4 text-center">
      <p>It's time to get fit</p>
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
      ></Button>
    </div>
  );
}
export default Hero;

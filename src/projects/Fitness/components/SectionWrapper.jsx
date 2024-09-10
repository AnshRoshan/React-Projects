function SectionWrapper({ children, header, title, id }) {
	return (
		<section id={id} className="flex min-h-screen flex-col gap-10">
			<div className="flex flex-col items-center justify-center gap-2 bg-slate-950 p-4 py-10">
				<p className="font-medium uppercase">{header}</p>
				<h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
					{title[0]} <span className="text-blue-400 uppercase">{title[1]}</span>{" "}
					{title[2]}
				</h2>
			</div>
			<div className="mx-auto flex w-full max-w-[800px] flex-col gap-10 p-4 ">
				{children}
			</div>
		</section>
	);
}
export default SectionWrapper;

function Text() {
	return (
		<div className="flex max-w-lg flex-col gap-2 p-16 text-justify text-gray-300 text-sm">
			<div className="flex hover:bg-gray-800/30 ">
				<img src="/vite.svg" alt="Vite " className="h-10 w-10 rounded-full" />
				<div className="ml-4 flex flex-col gap-4 ">
					<p className="flex items-baseline gap-2 text-xs">
						<span className="text-green-500 ">anshroshan</span>
						<span className="text-gray-500">01/01/2024</span>
					</p>
					<p>
						They are commonly employed in various contexts, including product
						descriptions, navigation menus, settings panels, and data tables, to
						save screen space.
					</p>
				</div>
			</div>
			<p className="ml-14 flex hover:bg-gray-800/30 ">
				The accordion is a musical instrument with a keyboard and bellows. It
				produces sound by air passing over reeds when the player expands or
				compresses the bellows, used in various music genres
			</p>
			<p className="ml-14 flex hover:bg-gray-800/30 ">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima
				totam, culpa repellat minus alias.
			</p>
		</div>
	);
}

export default Text;

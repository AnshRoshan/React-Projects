// Static placeholder channels - stable ids keep React's keys unique.
const channels = Array.from({ length: 40 }, (_, index) => `channel-${index}`);

function Scaffolding() {
	return (
		<div className="flex h-screen">
			<div className="space-y-2 overflow-y-scroll bg-neutral-800 p-3">
				{channels.map((channel, index) => (
					<div
						key={channel}
						className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30"
					>
						{index}
					</div>
				))}
			</div>
			<div className="flex w-60 flex-col bg-neutral-700">
				<div className="p-3 shadow-md">Server </div>
				<div className="flex-1 p-3">channel</div>
				<div className="p-3 shadow-md">setting</div>
			</div>
			<div className="flex-1 bg-neutral-600 p-3">Main</div>
		</div>
	);
}

export default Scaffolding;

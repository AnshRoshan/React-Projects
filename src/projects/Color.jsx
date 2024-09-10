import React, { useState, useEffect } from "react";

function Color() {
	const [colorcode, setColorCode] = useState("#8877ff");
	const [type, setType] = useState("rgb");
	const [colorPalette, setColorPalette] = useState([]);

	const getRand = () => {
		return Math.floor(Math.random() * 256);
	};

	const handleColor = (typecode) => {
		if (typecode === "rgb") {
			setType("rgb");
			setColorCode(`rgb(${getRand()}, ${getRand()}, ${getRand()})`);
		} else {
			setType("hex");
			setColorCode(`#${(getRand() ** 3).toString(16)}`);
		}
	};

	const handleAddColor = () => {
		if (!colorPalette.includes(colorcode)) {
			setColorPalette((prevPalette) => [...prevPalette, colorcode]);
		}
	};

	useEffect(() => {
		// Log the current color code after it has been updated
		console.log("colorcode:", colorcode);
	}, [colorcode]);

	return (
		<div
			className={"flex min-h-screen flex-col items-center justify-center"}
			style={{ backgroundColor: colorcode }}
		>
			<div className="text-9xl tracking-widest">
				{type === "rgb" ? "" : "Hex-"}
				{colorcode}
			</div>
			<div className="mt-24 text-5xl">
				<button
					type="button"
					className="rounded-l-full bg-white/40 px-4 py-2 backdrop-blur-md"
					onClick={() => handleColor("rgb")}
				>
					Generate RGB code
				</button>
				<button
					type="button"
					className="border-x-4 bg-white/40 px-4 py-2 backdrop-blur-md"
					onClick={handleAddColor}
				>
					Add Color
				</button>
				<button
					type="button"
					className="rounded-r-full bg-white/40 px-4 py-2 backdrop-blur-md"
					onClick={() => handleColor("hex")}
				>
					Generate HEX code
				</button>
			</div>
			<div className="mt-8 flex gap-4">
				{colorPalette.map((color) => (
					<button
						type="button"
						key={color}
						style={{ backgroundColor: color }}
						className="relative h-12 w-20 rounded-md border border-gray-300"
						onClick={() => {
							navigator.clipboard.writeText(color);
							return setColorCode(color);
						}}
					>
						<button
							type="button"
							className="absolute top-[-1rem] right-[-1rem] z-10 h-8 w-8 rounded-full bg-red-500 font-bold text-sm text-white"
							onClick={() =>
								setColorPalette((prevPalette) =>
									prevPalette.filter((_, i) => i !== index),
								)
							}
						>
							X
						</button>
					</button>
				))}
			</div>
			<div>
				<button
					type="button"
					className="mt-8 rounded-s-full bg-white/40 px-4 py-2 font-bold text-xl backdrop-blur-md"
					onClick={() => setColorPalette([])}
				>
					Clear
				</button>
				{/* copy the color code to clipboard */}
				<button
					type="button"
					className="mt-8 rounded-e-full bg-white/40 px-4 py-2 font-bold text-xl backdrop-blur-md"
					onClick={() => navigator.clipboard.writeText(colorPalette.join(","))}
				>
					{" "}
					copy
				</button>
			</div>
		</div>
	);
}

export default Color;

function Button({ text, func }) {
	return (
		<button
			type="button"
			onClick={func}
			className="blueShadow hover:-translate-x-1 hover:-translate-y-1 mx-auto rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 px-8 py-4 shadow-blue-700 shadow-md duration-200 hover:shadow-blue-700 hover:shadow-lg"
		>
			<p>{text}</p>
		</button>
	);
}
export default Button;

function Main({ data }) {
	// The APOD endpoint returns a video for some days and an image for others.
	const media = data?.hdurl || data?.url;

	if (data?.media_type === "video") {
		return (
			<iframe
				src={media}
				title={data?.title || "NASA astronomy picture of the day"}
				className="h-full w-full border-0 shadow-inner"
				allowFullScreen
			/>
		);
	}

	return (
		<img
			src={media}
			alt={data?.title || "NASA astronomy picture of the day"}
			className="h-full w-full object-cover shadow-inner"
		/>
	);
}
export default Main;

import { Link } from "react-router-dom";

function Card({ title, description, image, tags, link }) {
	return (
		<Link
			to={`${link}`}
			className="mr-10 max-h-[30rem] min-w-48 overflow-hidden rounded-xl bg-slate-400 shadow-lg "
		>
			<div>
				<img
					className="m-4 mx-auto h-44 w-[90%] rounded-2xl bg-cover "
					src={`${image}`}
					alt={title}
				/>
				<div className="px-6 py-4">
					<div className="mb-2 font-bold text-xl">{title}</div>
					<p className="text-base text-gray-700">{description}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{tags.map((tag) => (
						<span
							key={tag}
							className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-700 text-sm"
						>
							#{tag}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
}
export default Card;

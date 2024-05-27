import { Link } from "react-router-dom";

function Card({ title, description, image, tags, link }) {
  return (
    <Link
      to={`${link}`}
      className="mr-10 max-h-[30rem] min-w-48 overflow-hidden rounded-xl bg-slate-400 shadow-lg "
    >
      <div>
        <img
          className="m-4 mx-auto h-36  max-w-[90%] rounded-2xl bg-cover "
          src={`${image}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
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

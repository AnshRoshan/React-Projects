import { amazon, shoe } from "../../assets";

function Main({ data }) {
	return (
		<img
			src={data?.hdurl}
			alt={data?.title}
			className=" h-full w-full object-cover shadow-inner"
		/>
	);
}
export default Main;

/* <img
        src="shoe.jpg"
        alt="A stylish shoe"
        srcset="
    shoe-small.jpg 300w,
    shoe-medium.jpg 600w,
    shoe-large.jpg 1200w"
        sizes="(max-width: 600px) 480px, 800px"
      />
*/

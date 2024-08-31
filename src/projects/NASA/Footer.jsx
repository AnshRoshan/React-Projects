import { FaInfoCircle } from "react-icons/fa";

function Footer({ data, handleModal }) {
  return (
    <div className="fixed bottom-0 left-0 flex w-full items-center justify-between p-1 px-4 text-2xl text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t  from-neutral-900 to-transparent" />
      <div className="flex-1">
        <h1 className="text-lg text-gray-400">Ansh Project</h1>
        <h1 className="text-3xl font-bold">{data?.title}</h1>
      </div>
      <button onClick={handleModal}>
        <FaInfoCircle />
      </button>
    </div>
  );
}
export default Footer;

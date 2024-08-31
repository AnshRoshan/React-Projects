import { FaCircleRight } from "react-icons/fa6";
function Sidebar({ handleModal, data }) {
  return (
    <div className="fixed z-10 flex h-dvh flex-col sm:inset-0 ">
      <div
        onClick={handleModal}
        className="absolute inset-0 bg-[#030615] opacity-40"
      />
      <div className="inset-0 z-20 ml-auto flex h-1/2 max-w-3xl flex-1 flex-col gap-4  overflow-y-scroll bg-[#030615] p-4 sm:h-dvh sm:w-4/5 lg:w-1/2 ">
        <h1 className="text-2xl">{data?.title}</h1>
        <h2 className="prose text-md max-h-4/5 text-gray-400">Description:-</h2>
        <p className="flex-1 text-sm">{data?.explanation}</p>
        <button className="p-2 text-2xl" onClick={handleModal}>
          <FaCircleRight />
        </button>
      </div>
    </div>
  );
}
export default Sidebar;

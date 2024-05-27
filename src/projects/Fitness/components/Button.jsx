function Button({ text, func }) {
  return (
    <button
      onClick={func}
      className="blueShadow mx-auto rounded-md border-[2px] border-solid border-blue-400  bg-slate-950 px-8 py-4 shadow-md shadow-blue-700 duration-200  hover:-translate-x-1  hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-700"
    >
      <p>{text}</p>
    </button>
  );
}
export default Button;

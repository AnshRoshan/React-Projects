import { IoIosAddCircle } from "react-icons/io";

function TodoInput({ inputValue, handleInputChange, handleAddItem }) {
	return (
		<div className="mx-auto my-8 flex h-16 w-2/3 rounded-3xl bg-gray-300 p-4">
			<input
				type="text"
				name="todoadd"
				id="addtodo"
				value={inputValue}
				onChange={handleInputChange}
				className="flex-grow rounded-3xl bg-transparent px-10 font-bold text-3xl outline-none"
			/>
			<button type="submit" onClick={handleAddItem}>
				<IoIosAddCircle className="text-3xl" />
			</button>
		</div>
	);
}

export default TodoInput;

import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function TodoInput({ handleAddItem }) {
	const [inputValue, setInputValue] = useState("");
	const [priority, setPriority] = useState("medium");
	const [dueDate, setDueDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			handleAddItem(inputValue.trim(), priority, dueDate);
			setInputValue("");
			setPriority("medium");
			setDueDate("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto my-8 flex w-full flex-col gap-4 px-4 sm:px-6 lg:px-8"
		>
			<div className="flex h-16 rounded-3xl bg-gray-300 p-4">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="flex-grow rounded-3xl bg-transparent px-4 font-bold text-xl outline-none sm:px-10 sm:text-3xl"
					placeholder="Add a new task..."
				/>
				<button type="submit">
					<IoIosAddCircle className="text-2xl sm:text-3xl" />
				</button>
			</div>
			<div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-4">
				<select
					value={priority}
					onChange={(e) => setPriority(e.target.value)}
					className="w-full rounded-md p-2 sm:w-auto"
				>
					<option value="low">Low Priority</option>
					<option value="medium">Medium Priority</option>
					<option value="high">High Priority</option>
				</select>
				<input
					type="date"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
					className="w-full rounded-md p-2 sm:w-auto"
				/>
			</div>
		</form>
	);
}

export default TodoInput;

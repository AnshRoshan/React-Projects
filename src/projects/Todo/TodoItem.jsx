import { useState } from "react";
import { MdDelete, MdEditSquare, MdSave } from "react-icons/md";

function TodoItem({ todo, handleDelete, handleEdit, handleComplete }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(todo.text);
	const [editPriority, setEditPriority] = useState(todo.priority);
	const [editDueDate, setEditDueDate] = useState(todo.dueDate);

	const handleSave = () => {
		handleEdit(todo.id, editValue, editPriority, editDueDate);
		setIsEditing(false);
	};

	const priorityColors = {
		low: "bg-green-200",
		medium: "bg-yellow-200",
		high: "bg-red-200",
	};

	return (
		<div
			className={`todo-item flex w-full flex-wrap items-center gap-2 rounded-tr-lg rounded-bl-lg sm:gap-4 xl:flex-nowrap ${
				priorityColors[todo.priority]
			} my-2 p-2 px-4 text-black text-sm transition-all duration-300 ease-in-out sm:my-4 sm:p-3 sm:px-8 sm:text-lg ${
				todo.completed ? "opacity-50" : ""
			}`}
			data-swapy-item={todo.id}
			data-swapy-handle
		>
			<div className="mr-2 cursor-move">☰</div>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => handleComplete(todo.id)}
				className="mr-2"
			/>
			{isEditing ? (
				<>
					<input
						type="text"
						value={editValue}
						onChange={(e) => setEditValue(e.target.value)}
						className="mb-2 flex-grow rounded-3xl bg-transparent px-2 text-gray-600 outline-none sm:mb-0 sm:px-4 "
					/>
					<select
						value={editPriority}
						onChange={(e) => setEditPriority(e.target.value)}
						className="mb-2 rounded-md p-1 sm:mb-0"
					>
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
					<input
						type="date"
						value={editDueDate}
						onChange={(e) => setEditDueDate(e.target.value)}
						className="mb-2 rounded-md p-1 sm:mb-0"
					/>
				</>
			) : (
				<>
					<p
						className={`flex-grow overflow-hidden font-semibold text-md capitalize sm:text-xl ${
							todo.completed ? "line-through" : ""
						}`}
					>
						{todo.text}
					</p>
					<span className="mr-2 text-xs sm:text-sm">{todo.priority}</span>
					<span className="text-xs sm:text-sm">{todo.dueDate}</span>
				</>
			)}
			{isEditing ? (
				<MdSave
					className="cursor-pointer font-semibold text-xl sm:text-2xl"
					onClick={handleSave}
				/>
			) : (
				<MdEditSquare
					className="cursor-pointer font-semibold text-xl sm:text-2xl"
					onClick={() => setIsEditing(true)}
				/>
			)}
			<MdDelete
				className="cursor-pointer font-semibold text-xl sm:text-2xl"
				onClick={() => handleDelete(todo.id)}
			/>
		</div>
	);
}

export default TodoItem;

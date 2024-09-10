import { useState } from "react";
import { MdDelete, MdEditSquare, MdSave } from "react-icons/md";

function TodoItem({
	todo,
	id,
	index,
	handleDelete,
	handleEdit,
	onDragStart,
	onDragOver,
	onDragEnd,
	isDragging,
}) {
	const [isActive, setIsActive] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(todo);

	const handleSave = () => {
		handleEdit(id, editValue);
		setIsEditing(false);
	};

	return (
		<div
			className={`todo-item flex w-full items-center gap-4 rounded-tr-lg rounded-bl-lg bg-white/60 p-3 px-8 text-black text-lg transition-all duration-300 ease-in-out ${
				isDragging ? "scale-90 opacity-50" : ""
			}`}
			draggable
			onDragStart={() => onDragStart(index)}
			onDragOver={(e) => onDragOver(e, index)}
			onDragEnd={onDragEnd}
		>
			<div className="mr-2 cursor-move">☰</div>
			{isEditing ? (
				<input
					type="text"
					value={editValue}
					onChange={(e) => setEditValue(e.target.value)}
					onBlur={handleSave}
					className="flex-grow rounded-3xl bg-transparent px-4 text-gray-600 outline-none"
				/>
			) : (
				<p
					className={`flex-grow font-semibold text-xl capitalize ${
						isActive
							? "text-gray-700 line-through decoration-4 decoration-red-400"
							: ""
					}`}
					onClick={() => setIsActive(!isActive)}
					onKeyUp={() => setIsActive(!isActive)}
				>
					{todo}
				</p>
			)}
			{isEditing ? (
				<MdSave className="font-semibold text-2xl" onClick={handleSave} />
			) : (
				<MdEditSquare
					className="font-semibold text-2xl"
					onClick={() => setIsEditing(true)}
				/>
			)}
			<MdDelete
				className="font-semibold text-2xl"
				onClick={() => handleDelete(id)}
			/>
		</div>
	);
}

export default TodoItem;

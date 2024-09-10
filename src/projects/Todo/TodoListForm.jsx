import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

function TodoListForm({ todos, handleDelete, handleEdit, handleDragEnd }) {
	const [draggedIndex, setDraggedIndex] = useState(null);
	const [placeholderIndex, setPlaceholderIndex] = useState(null);
	const listRef = useRef(null);

	const onDragStart = (index) => {
		setDraggedIndex(index);
	};

	const onDragOver = (e, index) => {
		e.preventDefault();
		if (draggedIndex === index) return;
		setPlaceholderIndex(index);
	};

	const onDragEnd = () => {
		if (placeholderIndex !== null && draggedIndex !== null) {
			const newTodos = [...todos];
			const [draggedItem] = newTodos.splice(draggedIndex, 1);
			newTodos.splice(placeholderIndex, 0, draggedItem);
			handleDragEnd(newTodos);
		}
		setDraggedIndex(null);
		setPlaceholderIndex(null);
	};

	const onDrop = () => {
		setDraggedIndex(null);
		setPlaceholderIndex(null);
	};

	return (
		<ul
			ref={listRef}
			className="todo-list-container relative mx-auto w-2/3 rounded-lg bg-white/10 p-4 text-white backdrop-blur-lg"
		>
			{todos.map((todo, index) => (
				<li key={todo.id} className="my-4">
					<TodoItem
						todo={todo.text}
						id={todo.id}
						index={index}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						onDragStart={onDragStart}
						onDragOver={onDragOver}
						onDragEnd={onDragEnd}
						isDragging={index === draggedIndex}
					/>
				</li>
			))}
			{placeholderIndex !== null && (
				<div
					className="absolute right-0 left-0 h-[3px] bg-blue-500 transition-all duration-300 ease-in-out"
					style={{
						top: `${placeholderIndex * (listRef.current?.children[0]?.offsetHeight || 0) + placeholderIndex * 16}px`,
					}}
				/>
			)}
		</ul>
	);
}

export default TodoListForm;

import React, { useRef, useEffect } from "react";
import { createSwapy } from "swapy";
import TodoItem from "./TodoItem";

function TodoListForm({
	todos,
	handleDelete,
	handleEdit,
	handleComplete,
	handleDragEnd,
}) {
	const listRef = useRef(null);
	const originalTodosRef = useRef(todos);

	useEffect(() => {
		originalTodosRef.current = todos;
	}, [todos]);

	useEffect(() => {
		if (todos.length === 0) return;

		const container = listRef.current;
		const swapy = createSwapy(container, {
			animation: "none",
		});

		swapy.onSwap(({ data }) => {
			const newTodos = data.array
				.map((item) => {
					const todo = originalTodosRef.current.find((t) => t.id === item.item);
					return todo ? { ...todo } : null;
				})
				.filter(Boolean);

			if (newTodos.length > 0) {
				handleDragEnd(newTodos);
			}
		});

		return () => {
			swapy.destroy();
		};
	}, [todos, handleDragEnd]);

	return (
		<ul
			ref={listRef}
			className="todo-list-container relative mx-auto w-full rounded-lg bg-white/10 p-4 px-4 text-white backdrop-blur-lg sm:px-6 lg:px-8"
		>
			{todos.map((todo, index) => (
				<li key={todo.id} data-swapy-slot={index}>
					<TodoItem
						todo={todo}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						handleComplete={handleComplete}
					/>
				</li>
			))}
		</ul>
	);
}

export default TodoListForm;

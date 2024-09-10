import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoListForm from "./TodoListForm";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAddItem = (text, priority, dueDate) => {
		const newTodo = {
			id: uuidv4(),
			text,
			priority,
			dueDate,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (id, newText, newPriority, newDueDate) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							text: newText,
							priority: newPriority,
							dueDate: newDueDate,
						}
					: todo,
			),
		);
	};

	const handleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const handleDragEnd = (newTodos) => {
		if (newTodos && newTodos.length > 0) {
			setTodos(newTodos);
		}
	};

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12">
			<div className="relative mx-auto w-full py-3 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl">
				<header>
					<h1 className="p-4 text-center font-extrabold text-3xl text-gray-800 tracking-wide underline decoration-8 sm:text-4xl md:text-5xl">
						To-Do List
					</h1>
				</header>
				<main className="mb-8 w-full">
					<TodoInput handleAddItem={handleAddItem} />
					<input
						type="text"
						placeholder="Search todos..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="mx-auto mb-4 block w-11/12 rounded-md border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-6 lg:px-8"
					/>
					<TodoListForm
						todos={filteredTodos}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						handleComplete={handleComplete}
						handleDragEnd={handleDragEnd}
					/>
				</main>
			</div>
		</div>
	);
}

export default TodoList;

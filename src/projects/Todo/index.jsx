import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoListForm from "./TodoListForm";

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			setTodos(JSON.parse(storedTodos));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleAddItem = () => {
		if (inputValue.trim() !== "") {
			const newTodo = {
				id: uuidv4(),
				text: inputValue.trim(),
			};
			setTodos([...todos, newTodo]);
			setInputValue("");
		}
	};

	const handleDelete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (id, newText) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
		);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleDragEnd = (newTodos) => {
		setTodos(newTodos);
	};

	return (
		<>
			<header>
				<h1 className="p-4 text-center font-bold text-5xl text-white underline">
					To-Do List
				</h1>
			</header>
			<main className="mb-8">
				<TodoInput
					inputValue={inputValue}
					handleInputChange={handleInputChange}
					handleAddItem={handleAddItem}
				/>
				<TodoListForm
					todos={todos}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					handleDragEnd={handleDragEnd}
				/>
			</main>
		</>
	);
}

export default TodoList;

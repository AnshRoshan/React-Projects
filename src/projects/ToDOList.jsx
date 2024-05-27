import React, { useState, useEffect } from "react";
import { MdEditSquare, MdDelete, MdSave } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

function ToDOList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Load todos from local storage when the component mounts-once
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <header>
        <h1 className="p-4 text-center text-5xl font-bold text-white underline">
          To-Do List
        </h1>
      </header>
      <main className="mb-8">
        <TodoInput
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleAddItem={handleAddItem}
        />
        <Todolistform todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

function TodoInput({ inputValue, handleInputChange, handleAddItem }) {
  return (
    <div className="mx-auto my-8 flex h-16 w-2/3 rounded-3xl bg-gray-300 p-4">
      <input
        type="text"
        name="todoadd"
        id="addtodo"
        value={inputValue}
        onChange={handleInputChange}
        className="flex-grow rounded-3xl bg-transparent px-10 text-3xl font-bold outline-none"
      />
      <button type="submit" onClick={handleAddItem}>
        <IoIosAddCircle className="text-3xl" />
      </button>
    </div>
  );
}

function Todolistform({ todos, setTodos }) {
  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index, newTodo) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? newTodo : todo));
    setTodos(updatedTodos);
  };

  return (
    <ul className="mx-auto w-2/3 rounded-lg bg-white/40 p-4 text-white backdrop-blur-lg">
      {todos.map((todo, index) => (
        <li
          className="my-2 flex gap-4 rounded-bl-lg rounded-tr-lg bg-white/60 p-3 px-8 text-lg text-black"
          key={index}
        >
          <TodoItem
            todo={todo}
            index={index}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </li>
      ))}
    </ul>
  );
}

function TodoItem({ todo, index, handleDelete, handleEdit }) {
  const [isActive, setIsActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo);

  const handleSave = () => {
    handleEdit(index, editValue);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          className="flex-grow rounded-3xl bg-transparent px-4 text-gray-600 outline-none"
          autoFocus
        />
      ) : (
        <p
          className={`flex-grow text-xl font-semibold capitalize ${isActive ? "text-gray-700 line-through decoration-red-400 decoration-4" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          {todo}
        </p>
      )}
      {isEditing ? (
        <MdSave className="text-2xl font-semibold" onClick={handleSave} />
      ) : (
        <MdEditSquare
          className="text-2xl font-semibold"
          onClick={() => setIsEditing(true)}
        />
      )}
      <MdDelete
        className="text-2xl font-semibold"
        onClic
        k={() => handleDelete(index)}
      />
    </>
  );
}

export default ToDOList;

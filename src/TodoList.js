import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingValue(todos[index]);
  };

  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[editingIndex] = editingValue;
    setTodos(newTodos);
    setEditingIndex(null);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your todo..."
        className="textbox"
      />
      <button className="btn" onClick={handleAddTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {index === editingIndex ? (
              <input
                type="text"
                value={editingValue}
                onChange={(event) => setEditingValue(event.target.value)}
              />
            ) : (
              <span>{todo}</span>
            )}
            {index === editingIndex ? (
              <button className="btn" onClick={handleUpdateTodo}>
                Update
              </button>
            ) : (
              <button className="btn" onClick={() => handleEditTodo(index)}>
                Edit
              </button>
            )}
            <button className="btn" onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

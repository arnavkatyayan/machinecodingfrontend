// 📌 Problem Statement

// You are required to build a Todo Application using React.

// The application should allow users to:

// Add a todo

// Mark a todo as completed

// Delete a todo

// Filter todos based on their status

// Persist todos in localStorage

// 🧩 Functional Requirements
// 1️⃣ Add Todo

// User can type a todo title in an input box.

// On clicking Add (or pressing Enter), the todo should be added to the list.

// Empty or whitespace-only todos should not be added.

// 2️⃣ Display Todos

// Each todo item should display:

// Todo text

// Checkbox to mark completed

// Delete button

// 3️⃣ Mark Todo as Completed

// Clicking the checkbox should toggle the completed state of the todo.

// Completed todos should be visually distinct
// (e.g., strikethrough or faded text).

// 4️⃣ Delete Todo

// Clicking the delete button should remove the todo from the list.

// 5️⃣ Filter Todos

// Provide three filters:

// Filter	Behavior
// All	Show all todos
// Active	Show only incomplete todos
// Completed	Show only completed todos

// Only one filter should be active at a time.

// Filter selection should not modify the original todo list, only the displayed list.

// 6️⃣ Persist Todos (localStorage)

// Todos should be saved to localStorage.

// On page refresh:

// Previously added todos should be restored.

// Any change (add, delete, toggle) should update localStorage.
import {react, useState} from 'react'
function TodoList() {
    const [todo,setTodo] = useState("");
    const [todoList,setTodoList] = useState([]);

 return (
  <div className="page">
    <div className="todo-app">
      <div className='todo-inputs'>
        <input type="text" placeholder='Enter the todo'></input>
        <button>Add</button>
      </div>
    </div>
  </div>
);
}
export default TodoList;

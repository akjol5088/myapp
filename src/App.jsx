// src/App.jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Компоненттер
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button className="remove-btn" onClick={() => removeTask(task.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GFArticles() {
  return (
    <div>
      <h2>GFG Articles</h2>
      <p>Бул жерде GeeksforGeeks макалалары көрсөтүлөт...</p>
      {/* кийинчерээк толуктоого болот */}
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Project Making</h2>
      <p>Бул жерде проекттер боюнча маалымат...</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Меню</h3>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          To-Do List
        </NavLink>
        
        <NavLink 
          to="/gfg-articles" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          GFG Articles
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Project Making
        </NavLink>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        
        <main className="content">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/gfg-articles" element={<GFArticles />} />
            <Route path="/projects" element={<Projects />} />
            {/* кийинчерээк дагы кошсоң болот */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
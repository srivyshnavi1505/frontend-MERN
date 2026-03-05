import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATION
    if (title.trim().length < 3) {
      setError("Title must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    addTask(newTask);

    // CLEAR FORM
    setTitle("");
    setPriority("Low");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
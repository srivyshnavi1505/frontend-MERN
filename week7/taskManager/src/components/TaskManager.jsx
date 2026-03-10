import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // TOGGLE COMPLETE
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

      <AddTaskForm addTask={addTask} />

      <div className="my-4 font-semibold">
        Total Tasks: {tasks.length} | Completed: {completedCount}
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TaskManager;
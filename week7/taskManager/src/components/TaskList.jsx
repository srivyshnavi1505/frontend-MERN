import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  if (tasks.length === 0)
    return <p className="mt-4 text-gray-500">No tasks yet.</p>;

  return (
    <div className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
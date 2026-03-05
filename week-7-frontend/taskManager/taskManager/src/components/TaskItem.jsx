function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">

      <div>
        <h3
          className={`font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>

        <p className="text-sm text-gray-500">
          Priority: {task.priority}
        </p>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          ✓
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TaskItem;
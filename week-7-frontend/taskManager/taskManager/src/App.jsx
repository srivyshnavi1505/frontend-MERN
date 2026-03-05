import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
         Task Manager App
      </h1>

      <TaskManager />
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import "./App.css";
import Taskcolumn from "./components/taskcolumn";
import Taskform from "./components/taskform";


const oldTasks = localStorage.getItem("tasks")
console.log('oldtasks',oldTasks)

function App() {
const initialState = oldTasks ? JSON.parse(oldTasks) : []
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  
  
  }, [tasks])
  

  function handleDelete(taskIndex) {
    const newTasks = tasks.filter((task, index) => index !== taskIndex); 
    setTasks(newTasks);
  }
   
  return (
    <div className="app">
      <Taskform setTasks={setTasks} />
      <main className="app_main">
        <Taskcolumn
          title="To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <Taskcolumn
          title="Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <Taskcolumn
          title="Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;

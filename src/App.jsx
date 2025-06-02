import './App.css';
import ToDo from "./ToDo";
import { useEffect, useState } from "react";



function getLocalTodos() {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
}





function App() {
  const [todos, setTodos] = useState(getLocalTodos);



  function handleAdd(event) {
    event.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      task: newTask,
      completed: false,
    };

  

setTodos([...todos, newTodo]);

  }
  
  function handleToggle(id) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  
function handleDelete(id) {
  setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
};





  
const [newTask, setNewTask] = useState(""); 

        
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
       

  return (
    <>

      <form onSubmit={handleAdd}>

<article>

        <label>

        <input
        value={newTask} onChange={(event) => setNewTask(event.target.value)}
        />

        <button>izveidot</button>

        </label>

        

</article>
      </form>

      <h1>Veicamie uzdevumi</h1>
  
      {todos.map((todo) => {
        return <ToDo key={todo.id} {...todo} onDelete={handleDelete} onToggle={handleToggle}  />;
      })}
    </>
  );
}
   

export default App

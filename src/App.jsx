import './App.css';
import ToDo from "./ToDo";


function App() {
  const todos = [
    { task: "Iemācīties React", completed: false },
    { task: "Iemācīties Laravel", completed: true },
    { task: "Nopirkt pienu", completed: false },
  ];

  return (
    <>
   <ToDo 
  task={todos[0].task}
  completed={todos[0].completed} 
/>
<ToDo 
  task={todos[0].task}
  completed={todos[0].completed} 
/>
<ToDo 
  task={todos[0].task}
  completed={todos[0].completed} 
/>

</>
  );
}
   

export default App

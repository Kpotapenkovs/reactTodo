import './App.css';
import ToDo from "./ToDo";
import { useState } from 'react';


function App() {
  const [do, setDo] = useState([
    { id: 1, task: "Iemācīties React", completed: false },
    { id: 2, task: "Iemācīties Laravel", completed: true },
    { id: 3, task: "Nopirkt pienu", completed: false },
  ]);

  return (
    <>
      <h1>Veicamie uzdevumi</h1>
  
      {todos.map((todo) => {
        return <ToDo key={todo.id} {...todo} />
      })}
    </>
  );
}
   

export default App

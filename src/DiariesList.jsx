import './App.css';
import Diary from "./Diary";
import { useEffect, useState } from 'react';

function getLocalDiaries() {
  const stored = localStorage.getItem("diaries");
  return stored ? JSON.parse(stored) : [];
}

function DiariesList(){
    const [diaries, setDiaries] = useState([
        { id: 1, title: "nopirkt piccu", body: "kautkas", date: "12.05.2024" },
        { id: 2, title: "pagulēt", body: "naktī vajag gulēt", date: "01.04.2025" },
        { id: 3, title: "nopirkt olas", body: "aiziet uz veikalu un nopirkt olas", date: "30.07.2023" },
      ]);


      function handleAdd(event) {
        event.preventDefault();

        const newDiary = {
          id: crypto.randomUUID(),
          title: newTitle,
          body: newBody,
          date: newDate,
        };

        setDiaries([...diaries, newDiary]);
      };

      function handleDelete(id) {
        setDiaries((prevDiaries) => prevDiaries.filter(diary => diary.id !== id));
      };

      const [newTitle, setNewTitle] = useState(""); 
      const [newBody, setNewBody] = useState(""); 
      const [newDate, setNewDate] = useState(""); 

    return(
        <>

        <form onSubmit={handleAdd}>
          <article>

            <label>

              <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
              <input value={newBody} onChange={(event) => setNewBody(event.target.value)} />
              <input type="date" value={newDate} onChange={(event) => setNewDate(event.target.value)} />

                  <button>izveidot dienasgrāmatu</button>

            </label>

          </article>  
        </form>

        <h1>dienasgrāmata</h1>
  
        {diaries.map((diary) => {
    return <Diary key={diary.id} {...diary} onDelete={handleDelete} />
  })}
        </>
    );
}

export default DiariesList
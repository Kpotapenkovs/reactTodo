import './App.css';
import Diary from "./Diary";
import { useEffect, useState } from 'react';

function getLocalDiaries() {
  const stored = localStorage.getItem("diaries");
  return stored ? JSON.parse(stored) : [];
}

function DiariesList(){
    const [diaries, setDiaries] = useState(getLocalDiaries);


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

      function handleToggle(id) {
        setDiaries((prevDiaries) =>
          prevDiaries.map((diary) =>
            diary.id === id ? { ...diary} : diary
          )
        );
      }

      const [newTitle, setNewTitle] = useState(""); 
      const [newBody, setNewBody] = useState(""); 
      const [newDate, setNewDate] = useState(""); 

      useEffect(() => {
        localStorage.setItem("diaries", JSON.stringify(diaries)); }, [diaries]);

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
    return <Diary key={diary.id} {...diary} onDelete={handleDelete} onToggle={handleToggle} />
  })}
        </>
    );
}

export default DiariesList
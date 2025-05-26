import './App.css';
import Diary from "./Diary";

function DiariesList(){
    const diaries = [
        { id: 1, task: "nopirkt piccu", completed: true },
        { id: 2, task: "aiziet pagulēt", completed: true },
        { id: 3, task: "izlasīt grāmatu", completed: false },
      ];
    return(
        <>
        <h1>dienasgrāmata</h1>
  
        {diaries.map((diary) => {
    return <Diary key={diary.id} {...diary} />
  })}
        </>
    );
}

export default DiariesList
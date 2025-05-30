import './App.css';
import Diary from "./Diary";

function DiariesList(){
    const diaries = [
        { id: 1, title: "nopirkt piccu", body: "kautkas", date: "12.05.2024" },
        { id: 2, title: "pagulēt", body: "naktī vajag gulēt", date: "01.04.2025" },
        { id: 3, title: "nopirkt olas", body: "aiziet uz veikalu un nopirkt olas", date: "30.07.2023" },
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
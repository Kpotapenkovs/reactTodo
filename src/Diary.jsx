import { useState } from "react";


function Diary({ task, completed }) {
  
  const [check, setCheck] = useState(completed);

  return (

    <label>

    <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />

  </label>

  );
  
}

export default Diary;


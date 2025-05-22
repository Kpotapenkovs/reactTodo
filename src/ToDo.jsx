import { useState } from "react";


function ToDo({ task, completed }) {
  const [check, setCheck] = useState(completed);
  return (
    <label>
      <input
  type="checkbox"
  checked={check}
  onChange={() => setCheck(!check)}
/>
    </label>
  );
}

export default ToDo;


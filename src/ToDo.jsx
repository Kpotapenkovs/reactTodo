import { useState } from "react";


function ToDo({ task, completed, onDelete, id, onToggle }) {


  return (
<article>
    <label>

    <input
  type="checkbox"
  checked={completed}
  onChange={() => onToggle(id)}
    />
      {task} |

    </label>
    <button onClick={() => onDelete(id)}>❌</button>
</article>
  );
  
}

export default ToDo;


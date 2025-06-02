


function Diary({id, title, body, date, onDelete }) {
  

  return (
    <article>
      <label>
      <div>

  {title} | {body} | {date}

      </div>
    </label>
    <button onClick={() => onDelete(id)}>❌</button>
    </article>
  );
  
}

export default Diary;


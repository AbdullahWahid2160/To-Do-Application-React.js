import React from 'react';
export function Task({Props, Completedtasks}) {
  function HandleDone(e) {
    Props.Done = true;
    e.target.parentElement.remove();
    console.log('Ye e main kya hy : ', Props);
    Completedtasks(Props);
  }

  function HandleDelete(e) {
    e.target.parentElement.remove();
  }
  return (
    <div
      className="TasksContainer"
      id={Props.Key}
      style={{backgroundColor: Props.Color}}
    >
      <li className="TasksList">{Props.Text}</li>
      {Props.Done===false ? <button className="completed" onClick={HandleDone}>
        ✔
      </button>:""}
      <button className="remove" onClick={HandleDelete}>
        ✖
      </button>
    </div>
  );
}

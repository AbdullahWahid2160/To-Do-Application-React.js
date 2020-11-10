import React, {useState} from 'react';
import {Task} from './Task';
import '../styles.css';

export function PendingTasks({Pendingtasks, Completed}) {
  function CreateList(task) {
    return (
      <div>
        <Task Props={task} Completedtasks={(e) => Completed(e)} />
      </div>
    );
  }

  var ToDoList = Pendingtasks.map((item) => CreateList(item));

  return (
    <div>
      <p
        className="ToDoHeading"
        style={{
          visibility: 'visible',
        }}
      >
        {Pendingtasks.length !== 0 ? 'Pending Tasks...' : ''}
      </p>
      <ul className="ToDoUnorderedlist">
        <div className="to-do-list-flexbox">{ToDoList}</div>
      </ul>
    </div>
  );
}

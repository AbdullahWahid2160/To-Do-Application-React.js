import React from "react";
import { Task } from "./Task";
import "../styles.css";

export function CompletedTasks({ Completed }) {
  function CreateList(task) {
    return (
      <div>
        <Task Props={task} Completedtasks={""} />
      </div>
    );
  }

  var DoneList = Completed.map((item) => CreateList(item));
  return (
    <div>
      <p
        className="DoneHeading"
        style={{
          visibility: "visible"
        }}
      >
        {Completed.length !== 0 ? "Completed Successfully!" : ""}
      </p>
      <ul className="DoneUnorderedlist">
        <div className="done-list-flexbox">{DoneList}</div>
      </ul>
    </div>
  );
}

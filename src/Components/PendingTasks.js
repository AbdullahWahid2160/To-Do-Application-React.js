import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";

var flag = "";
var ToDoList = [];

class PendingTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaskList: []
    };
    this.HandleDelete = this.HandleDelete.bind(this);
    this.HandleDone = this.HandleDone.bind(this);
  }

  HandleDone(e) {
    this.props.Completedtasks(e.target.parentElement);
  }

  HandleDelete(e) {
    e.target.parentElement.remove();
  }

  CreateList(task) {
    if (task.Done === false) {
      return (
        <div
          className="TasksContainer"
          id={task.Key}
          style={{ backgroundColor: task.Color }}
        >
          <li className="TasksList">{task.Text}</li>
          <button className="completed" onClick={this.HandleDone}>
            ✔
          </button>
          <button className="remove" onClick={this.HandleDelete}>
            ✖
          </button>
        </div>
      );
    } else {
    }
  }

  render() {
    ToDoList = this.props.Pendingtasks.map((item) => this.CreateList(item));
    this.state.TaskList.map((item) => {
      return (flag = !item ? "" : item.Text);
    });
    return (
      <div>
        <p
          className="ToDoHeading"
          style={{
            visibility: "visible"
          }}
        >
          Pending Tasks...
        </p>
        <ul className="ToDoUnorderedlist">
          <div className="to-do-list-flexbox">{ToDoList}</div>
        </ul>
      </div>
    );
  }
}
export default PendingTasks;

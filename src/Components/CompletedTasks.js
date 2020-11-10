import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";

var flag = "";
var DoneList = [];

class CompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TaskList: []
    };
    this.HandleDelete = this.HandleDelete.bind(this);
  }

  HandleDelete(e) {
    e.target.parentElement.remove();
  }

  CreateList(task) {
    if (task) {
      return (
        <div
          className="TasksContainer"
          id={task.Key}
          style={{ backgroundColor: task.Color }}
        >
          <li className="TasksList">{task.Text}</li>
          <button className="remove" onClick={this.HandleDelete}>
            ✖
          </button>
        </div>
      );
    } else {
    }
  }

  render() {
    DoneList = this.props.Completed.map((item) => this.CreateList(item));
    return (
      <div>
        <p
          className="DoneHeading"
          style={{
            visibility: "visible"
          }}
        >
          Completed Successfully!
        </p>
        <ul className="DoneUnorderedlist">
          <div className="done-list-flexbox">{DoneList}</div>
        </ul>
      </div>
    );
  }
}

export default CompletedTasks;

import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";
import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";

var NewTask;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tasks: [],
      Color: "",
      CompletedTasks: []
    };
    this.HandleColorChange = this.HandleColorChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.CompletedTasksFromPendingList = this.CompletedTasksFromPendingList.bind(
      this
    );
  }

  CompletedTasksFromPendingList(DataFromPendingList) {
    console.log("Child se data aya hy jeee : ", DataFromPendingList);
    var Done = this.state.Tasks.map((item) => {
      console.log("ye hy jee item : ", item);
      if (DataFromPendingList.id == item.Key) {
        return item;
      }
    });
    this.setState({ CompletedTasks: this.state.CompletedTasks.concat(Done) });
    console.log("Ab bta : ", this.state.CompletedTasks);
    DataFromPendingList.remove();
  }

  HandleColorChange(event) {
    this.setState({ Color: event.target.value });
  }

  HandleSubmit(event) {
    event.preventDefault();
    var Text = event.target.elements.TextInput.value;
    if (Text.trim()) {
      NewTask = {
        Key: Date.now(),
        Text,
        Color: this.state.Color,
        Done: false
      };
      this.setState({
        Tasks: this.state.Tasks.concat(NewTask)
      });
      event.target.elements.TextInput.value = "";
      console.log("ye jb Task add hota hy : ", this.state.Tasks);
    }
  }

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.HandleSubmit}>
          <div className="ColorPickerContainer">
            <h3>Pick a Background Color for the Note!</h3>
            <input
              onChange={this.HandleColorChange}
              type="color"
              name="color"
              id="ColorPicker"
              value={this.state.Color}
            />
          </div>
          <div className="InputContainer">
            <input
              style={{ backgroundColor: this.state.Color }}
              id="TextInput"
              type="text"
              placeholder="Enter Task to be done..."
              required
            />
            <button className="SubmitButton" type="submit">
              Submit
            </button>
          </div>
        </form>
        <PendingTasks
          Pendingtasks={this.state.Tasks}
          Completedtasks={this.CompletedTasksFromPendingList}
        />
        <CompletedTasks Completed={this.state.CompletedTasks} />
      </div>
    );
  }
}
export default Form;

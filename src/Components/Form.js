import React, { useState } from "react";
import "../styles.css";
import { PendingTasks } from "./PendingTasks";
import { CompletedTasks } from "./CompletedTasks";

export function Form() {
  const [Tasks, setTasks] = useState([]);
  const [Color, setColor] = useState("");
  const [Completed_Tasks, setCompletedTasks] = useState([]);

  function CompletedTasksFromPendingList(DataFromPendingList) {
    setCompletedTasks([...Completed_Tasks, DataFromPendingList]);
  }

  function HandleColorChange(event) {
    setColor(event.target.value);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    console.log(
      "Ye event main kya aa ra hy : ",
      event.target.elements.ColorPicker.value
    );
    var Text = event.target.elements.TextInput.value;
    if (Text.trim()) {
      const NewTask = {
        Key: Date.now(),
        Text,
        Color: Color,
        Done: false
      };
      setTasks([...Tasks, NewTask]);
      event.target.elements.TextInput.value = "";
    }
    console.log("ye Added Tasks dikha bawaayy : ", Tasks);
  }

  return (
    <div>
      <form className="Form" onSubmit={(e) => HandleSubmit(e)}>
        <div className="ColorPickerContainer">
          <h3>Pick a Background Color for the Note!</h3>
          <input
            onChange={HandleColorChange}
            type="color"
            name="color"
            id="ColorPicker"
            value={Color}
          />
        </div>
        <div className="InputContainer">
          <input
            style={{ backgroundColor: Color }}
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
        Pendingtasks={Tasks}
        Completed={CompletedTasksFromPendingList}
      />
      <CompletedTasks Completed={Completed_Tasks} />
    </div>
  );
}

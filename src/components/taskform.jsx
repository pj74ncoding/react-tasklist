import React, { useState } from "react";
import "./taskform.css";
import Button from "./button";

const Taskform = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tagName: [],
  });

  const checkTagName = (tag) => {
    return taskData.tagName.some((item) => item === tag);
  };
  function handleChange(e) {
    const { name, value } = e.target; //object destructering of the lines below
    // const name= e.target.name;
    // const value= e.target.value;

    console.log("name", name, "value", value);
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(e.target);
  }

  function selectTagName(tag) {
    if (taskData.tagName.some((item) => item === tag)) {
      const filteredItem = taskData.tagName.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tagName: filteredItem };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tagName: [...prev.tagName, tag] };
      });
    }

    // console.log(taskData)
  }

  // comment for git push

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    
    });
    setTaskData({   
    task: "",
    status: "todo",
    tagName: [],})
  };

  
  console.log(taskData);
  const array = [8, 2, 18, 7, 12, 4];

  function test() {
    return array[2] + array[4];
  }

  // const one = [];
  // const two = [];
  // console.log([] == ![]);
  // console.log(one == false, two == false);
  // console.log(test());

  // const [task, setTask] = useState("n")
  // const [status, setStatus] = useState("To do")

  // function handleTaskChange(e) {
  //   setTask(e.target.value)
  // }
  // console.log(task)

  // function handleStatusChange(e) {
  //   setStatus(e.target.value)
  // }

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          value={taskData.task}
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Button
              tagName="HTML"
              selected={checkTagName("HTML")}
              selectTagName={selectTagName}
            />
            <Button
              tagName="CSS"
              selected={checkTagName("CSS")}
              selectTagName={selectTagName}
            />
            <Button
              tagName="JavaScript"
              selected={checkTagName("JavaScript")}
              selectTagName={selectTagName}
            />
            <Button
              tagName="React"
              selected={checkTagName("React")}
              selectTagName={selectTagName}
            />
          </div>

          <div>
            <select
              name="status"
              id=""
              className="task_status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Taskform;

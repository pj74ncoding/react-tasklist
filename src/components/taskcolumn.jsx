import React from "react";
import "./taskcolumn.css";
import Taskcard from "./taskcard";
const Taskcolumn = ({ title, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">{title}</h2>
      {tasks.map(
        (task, index) =>
          task.status == status && (
            <Taskcard
              key={index}
              title={task.task}
              tagName={task.tagName}
              handleDelete={handleDelete}
              index={index}
            />
          ),
      )}
    </section>
  );
};

export default Taskcolumn;

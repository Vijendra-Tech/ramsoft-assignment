import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Task() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.name} className="task">
          <p>{task.name}</p>
          <h6>{task.description}</h6>
          <h6>{task.ETA}</h6>
          <h6>{task.status}</h6>
        </div>
      ))}
    </div>
  );
}

export default Task;

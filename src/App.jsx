import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";
import { addTask } from "./action/taskSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Todo",
      id: 1,
    },
    {
      title: "In Progeress",
      id: 2,
    },
    {
      title: "Done",
      id: 3,
    },
  ];

  const handleAddtask = () => {
    dispatch(
      addTask({
        name: "New Task",
        description: "New task desc",
        ETA: new Date().toString(),
        status: "Todo",
      })
    );
  };

  return (
    <>
      <button style={{float:"right"}}>Add New Column</button>
      <div className="container">
        {/* {columns.map((el) => (
          <div className="column-container" key={el.id}>
            {el.title}
            <hr className="hr-line" />
          </div>
        ))} */}
        <div className="column-container">
          Todo
          <hr className="hr-line" />
          <Task />
          <button onClick={handleAddtask}>Add Task</button>
        </div>
        <div className="column-container">
          In Progress
          <hr className="hr-line" />
        </div>
        <div className="column-container">
          Done
          <hr className="hr-line" />
        </div>
      </div>
    </>
  );
}

export default App;

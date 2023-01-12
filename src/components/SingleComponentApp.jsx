import React, { useState } from "react";

export default function SingleComponentApp(){
  const [ newTask, setNewTask ] = useState("");
  const [ taskList, setTaskList ] = useState([]);
  const [ completedTasks, setCompletedTasks ] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, newTask])
    setNewTask("");
  }

  const markTaskComplete = (taskName, index) => {
    console.log('checkbox clicked', taskName)
    setCompletedTasks([...completedTasks, taskName])

    const tempTaskList = [...taskList];
    tempTaskList.splice(index,1)
    setTaskList([...tempTaskList]);
  }
  return (
    <>
      <div id="singleComponentApp">
        SingleComponentApp
        <form onSubmit={(e)=> handleAddTask(e)}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleAddTask(e)} />
        </form>
        new task: {newTask}
        <div id="incomplete">
          Incomplete Tasks
          <ul>
            {taskList.map((task, i) => {
              return (
                <div key={i.toString}>
                  <li>
                    <input
                      type="checkbox"
                      id={i}
                      name={task}
                      onClick={(e) => {
                        markTaskComplete(e.target.name, i);
                      }}
                    ></input>
                    {task}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div id="completed">
          Completed Tasks
          <button>Clear Completed</button>
          <ul>
            {completedTasks.map((task) => {
              return <li>{task}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
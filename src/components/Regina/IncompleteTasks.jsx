import React from "react";

export default function IncompleteTasks ({ incompleteTaskList, setIncompleteTaskList, completedTaskList, setCompletedTaskList }) {

  const handleMarkComplete = (e) => {
    //use e.target.value to grab task name
    //remove the task from the incomplete list
    //add the task to the completed list
    const tempTaskList = [...incompleteTaskList];
    const index = e.target.id;
    tempTaskList.splice(index, 1);
    setIncompleteTaskList([...tempTaskList]);

    //updated completed task list array
    setCompletedTaskList([...completedTaskList, e.target.value])

  }
    return (
      <div>
        <h4>Incomplete Tasks</h4>
        <ul>
        {incompleteTaskList.map((task, index)=>{
          return (
            <li key={index+task}>
              <input type="checkbox" value={task} id={index} onClick={(e)=>{handleMarkComplete(e)}}></input>
              {task}
            </li>
          );
        })}
        </ul>
      </div>
    );
}
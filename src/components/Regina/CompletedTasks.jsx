import React from "react";

export default function CompletedTasks ({ completedTaskList, setCompletedTaskList }) {
  return(
    <div> 
      <h4>Completed Tasks</h4>
      <button onClick={()=>{setCompletedTaskList([])}}>Clear Completed</button>
      <ul>
      {completedTaskList.map((task, i)=>{
        return(<li key = {i+task}>{task}</li>)
      })}
      </ul>
    </div>
  )
}
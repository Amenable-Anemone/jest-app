import React, { useState, useEffect } from "react";

export default function InputForm ({ addNewTask, setAddNewTask, incompleteTaskList, setIncompleteTaskList }) {
     console.log('props...', arguments);
  useEffect(
    ()=>{
      // console.log('props...', props)
    })

  const handleAddNewTask = (e) => {
    e.preventDefault();
    setIncompleteTaskList([...incompleteTaskList, addNewTask]);
    setAddNewTask("");
  }

  return (
    <>
    <div id="inputForm">
      <form>
        <input value ={addNewTask} onChange={(e)=>{setAddNewTask(e.target.value)}} />
        <button onClick={(e)=>{handleAddNewTask(e)}}>Add Task</button>
      </form>
      {addNewTask}
    </div>
    </>
  )
}
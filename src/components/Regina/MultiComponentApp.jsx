import React, { useState } from "react";
import InputForm from "./InputForm";
import IncompleteTasks from "./IncompleteTasks";
import CompletedTasks from "./CompletedTasks";

export default function MultiComponentApp () {
//hold state here
  const [ addNewTask, setAddNewTask ] = useState("");
  const [ incompleteTaskList, setIncompleteTaskList ] = useState([]);
  const [ completedTaskList, setCompletedTaskList ] = useState([]);



  return (
    <div id="multicomponentApp">
      To-Do - Multi-component App
      <InputForm
        addNewTask={addNewTask}
        setAddNewTask={setAddNewTask}
        incompleteTaskList={incompleteTaskList}
        setIncompleteTaskList={setIncompleteTaskList}
      />
      <IncompleteTasks
        incompleteTaskList={incompleteTaskList}
        setIncompleteTaskList={setIncompleteTaskList}
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
      <CompletedTasks
        completedTaskList={completedTaskList}
        setCompletedTaskList={setCompletedTaskList}
      />
    </div>
  );
}


import React, { useState } from 'react'

export default function AddTask({onclick}) {
  const [ newTask, setNewTask ] = useState("")

  return (
    <div>
      {/* <form onSubmit={() => onclick({newTask})}> */}
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button onClick={() => onclick({ newTask })}>Add Task</button>
      {/* </form> */}
      new task: {newTask}
    </div>
  );
}

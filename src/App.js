import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Completed from './components/Completed';
import Incomplete from './components/Incomplete';
import SingleComponentApp from './components/Regina/SingleComponentApp';
import InputForm from './components/Regina/InputForm';
import IncompleteTasks from './components/Regina/IncompleteTasks';
import CompletedTasks from './components/Regina/CompletedTasks';
import MultiComponentApp from './components/Regina/MultiComponentApp';

function App() {
  //this app file will hold state
  const [tasks, setTasks] = useState([])

  //function to add a task
  const handleAdd = ({ newTask }) => {
    // prevent default behavior
    // e.preventDefault();
    //set state to whatever is in the input field
   
    console.log("click"+ newTask)
    console.log("tasks---", tasks)
    setTasks( [...tasks, newTask]);
    console.log("updated tasks...", tasks);
  }
  //function to delete a task
  
  //function to edit a task
  return (
    <div className="App">
      <AddTask onclick={handleAdd} />
      <Incomplete />
      <Completed />
      <div>
        <SingleComponentApp />
      </div>
      <MultiComponentApp />
    </div>
  );
}

export default App;

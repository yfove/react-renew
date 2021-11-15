import React, {useState} from 'react';
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";

import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevent reload and go bakc to inital render
    addTask(userInput);
    setUserInput("");
  }

  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }




  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;

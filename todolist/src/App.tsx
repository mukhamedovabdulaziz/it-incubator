import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from "uuid";

export type FilteredValuesType = "all" | "completed" | "active";

function App() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Redux", isDone: false},
    {id: v1(), title: "NodeJS", isDone: false}
  ]);

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(t => t.id !== id)
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = {id: v1(), title: title, isDone: false}
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find(t => t.id === taskId)
    if (task) {
      task.isDone = isDone;
    }

    setTasks([...tasks]);
  }

  let [filter, setFilter] = useState<FilteredValuesType>("all");

  function changeFilter(value: FilteredValuesType) {
    setFilter(value);
  }

  let tasksForToDoList = tasks;
  if (filter === "completed") {
    tasksForToDoList = tasks.filter(t => t.isDone);
  }

  if (filter === "active") {
    tasksForToDoList = tasks.filter(t => !t.isDone);
  }

  return (
    <div className="App">
      <TodoList title={"What to learn"}
                tasks={tasksForToDoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
      />
    </div>
  );
}

export default App;
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

    let [filter, setFilter] = useState<FilteredValuesType>("all");

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    function addTask() {
        let newTask = {id: v1(), title: "New Task", isDone: false}
        let newTasks = [newTask, ...tasks]
    }

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
            />
        </div>
    );
}

export default App;
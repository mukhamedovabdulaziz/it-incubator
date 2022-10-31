import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";

export type FilteredValuesType = "all" | "completed" | "active";

type TodolistType = {
  id: string
  title: string
  filter: FilteredValuesType
}

function App() {

  function removeTask(id: string, todoListId: string) {
    let tasks = tasksObj[todoListId];
    let filteredTasks = tasks.filter(t => t.id !== id);
    tasksObj[todoListId] = filteredTasks;
    setTasksObj({...tasksObj});

  }

  function addTask(title: string, todoListId: string) {
    let newTask = {id: v1(), title: title, isDone: false}
    let tasks = tasksObj[todoListId];
    let newTasks = [newTask, ...tasks];
    tasksObj[todoListId] = newTasks;
    setTasksObj({...tasksObj});
  }

  function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
    let tasks = tasksObj[todoListId];
    let task = tasks.find(t => t.id === taskId)
    if (task) {
      task.isDone = isDone;
      setTasksObj({...tasksObj});
    }
  }

  function changeFilter(value: FilteredValuesType, todoListId: string) {
    let todoList = todoLists.find(tl => tl.id === todoListId)
    if (todoList) {
      todoList.filter = value;
      setTodoLists([...todoLists])
    }
  }

  let todoListId1 = v1();
  let todoListId2 = v1();

  let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
    {id: todoListId1, title: "What to learn", filter: "active"},
    {id: todoListId2, title: "What to buy", filter: "completed"}
  ])

  let removeTodoList = (todoListId: string) => {
    let filteredTodoList = todoLists.filter(tl => tl.id !== todoListId);
    setTodoLists(filteredTodoList);

    delete tasksObj[todoListId];
    setTasksObj({...tasksObj})
  }

  let [tasksObj, setTasksObj] = useState({
    [todoListId1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Redux", isDone: false},
      {id: v1(), title: "NodeJS", isDone: false}
    ],
    [todoListId2]: [
      {id: v1(), title: "Book", isDone: false},
      {id: v1(), title: "Meat", isDone: true}
    ]
  })

  return (
    <div className="App">
      {
        todoLists.map((tl) => {
          let tasksForToDoList = tasksObj[tl.id];

          if (tl.filter === "completed") {
            tasksForToDoList = tasksForToDoList.filter(t => t.isDone);
          }

          if (tl.filter === "active") {
            tasksForToDoList = tasksForToDoList.filter(t => !t.isDone);
          }

          return (
            <TodoList
              key={tl.id}
              id={tl.id}
              title={tl.title}
              tasks={tasksForToDoList}
              removeTask={removeTask}
              changeFilter={changeFilter}
              addTask={addTask}
              changeTaskStatus={changeStatus}
              filter={tl.filter}
              removeTodoList={removeTodoList}
            />
          )
        })
      }
    </div>
  );
}

export default App;
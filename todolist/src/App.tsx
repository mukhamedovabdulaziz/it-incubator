import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemForm";

export type FilteredValuesType = "all" | "completed" | "active";

type TodolistType = {
  id: string
  title: string
  filter: FilteredValuesType
}

type TasksStateType = {
  [key: string]: Array<TaskType>
}

function App() {

  function removeTask(id: string, todoListId: string) {
    let tasks = tasksObj[todoListId];
    tasksObj[todoListId] = tasks.filter(t => t.id !== id);
    // tasksObj[todoListId] = filteredTasks;
    setTasksObj({...tasksObj});

  }

  function addTask(title: string, todoListId: string) {
    let newTask = {id: v1(), title: title, isDone: false}
    let tasks = tasksObj[todoListId];
    tasksObj[todoListId] = [newTask, ...tasks];
    // tasksObj[todoListId] = newTasks;
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

  function changeTitle(taskId: string, newTitle: string, todoListId: string) {
    let tasks = tasksObj[todoListId];
    let task = tasks.find(t => t.id === taskId)
    if (task) {
      task.title = newTitle;
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
    {id: todoListId1, title: "What to learn", filter: "all"},
    {id: todoListId2, title: "What to buy", filter: "all"}
  ])

  const removeTodoList = (todoListId: string) => {
    const filteredTodoList = todoLists.filter(tl => tl.id !== todoListId);
    setTodoLists(filteredTodoList);

    delete tasksObj[todoListId];
    setTasksObj({...tasksObj})
  }

  const changeTodoListTitle = (todoListId: string, newTitle:string) => {
    const todoList = todoLists.find(tl => tl.id === todoListId);
    if (todoList) {
      todoList.title = newTitle;
      setTodoLists([...todoLists]);
    }
  }

  let [tasksObj, setTasksObj] = useState<TasksStateType>({
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

  function addTodoList(title: string) {
    let todoList: TodolistType = {
      id: v1(),
      filter: 'all',
      title: title
    }
    setTodoLists([todoList, ...todoLists]);
    setTasksObj({
      ...tasksObj,
      [todoList.id]: []
    })
  }


  return (
    <div className="App">
      <AddItemForm addItem={addTodoList}/>
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
              changeTaskTitle={changeTitle}
              filter={tl.filter}
              removeTodoList={removeTodoList}
              changeTodoListTitle={changeTodoListTitle}
            />
          )
        })
      }
    </div>
  );
}

export default App;
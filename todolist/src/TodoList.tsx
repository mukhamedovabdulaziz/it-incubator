import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilteredValuesType} from "./App";

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (id: string) => void
  changeFilter: (value: FilteredValuesType) => void
  addTask: (title: string) => void
  changeTaskStatus: (taskId: string, isDone: boolean) => void
  filter: FilteredValuesType
}

export function TodoList(props: PropsType) {

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string>("");

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      props.addTask(newTaskTitle.trim());
      setNewTaskTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  }

  const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError("");
    if (e.key === "Enter") {
      addTask();
    }
  }

  const onAllClickHandler = () => props.changeFilter("all")
  const onActiveClickHandler = () => props.changeFilter("active")
  const onCompletedClickHandler = () => props.changeFilter("completed")


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}
               onChange={onNewTitleChangeHandler}
               onKeyUp={onKeyUpHandler}
               className={error ? "error" : ""}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {
          props.tasks.map(t => {
            const onRemoveHandler = () => props.removeTask(t.id)
            const onChangeCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
              props.changeTaskStatus(t.id, e.currentTarget.checked)
            }

            return (
              <li key={t.id} className={t.isDone ? "is-done" : ""}>
                <input type="checkbox" onChange={onChangeCheckedHandler} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onRemoveHandler}>x</button>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button className={props.filter === "all" ? "active-filter" : ""}
                onClick={onAllClickHandler}>All
        </button>
        <button className={props.filter === "active" ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active
        </button>
        <button className={props.filter === "completed" ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed
        </button>
      </div>
    </div>
  )
}
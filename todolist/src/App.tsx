import { useState } from 'react'
import './App.css'
// import { TaskList, TaskListPropsType } from './TaskList'
import { TodolistItem } from './TodolistItem'
import { v1 } from 'uuid'

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
  const [filter, setFilter] = useState<FilterValues>('all')

  const changeFilter = (value: FilterValues) => {
    setFilter(value)
  }

  const [tasks, setTasks] = useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'Typescript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(t => !t.isDone)
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(t => t.isDone)
  }

  const createTask = (title: string) => {
    const newTask: Task = { id: v1(), title, isDone: false }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId: string) => {
    const filteredTasks = tasks.filter(task => {
      return task.id !== taskId
    })
    setTasks(filteredTasks)
  }

  const changeTaskStatus = (taskId: string, isDone: boolean) => {
    const newState = tasks.map(task => task.id === taskId ? { ...task, isDone } : task)
    setTasks(newState)
  }

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        filter={filter}
        changeFilter={changeFilter}
        createTask={createTask}
        changeTaskStatus={changeTaskStatus}
      />
      {/* <TaskList data={taskList.data} /> */}
    </div>
  )
}

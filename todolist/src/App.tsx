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
  // const taskList: TaskListPropsType = {
  //   data: {
  //     title: 'Task List',
  //     tasks: [
  //       { taskId: 1, title: 'Learn HTML', isDone: true },
  //       { taskId: 2, title: 'Learn CSS', isDone: true },
  //       { taskId: 3, title: 'Learn JavaScript', isDone: false },
  //     ],
  //     students: ['Alice', 'Bob', 'Charlie'],
  //   }
  // }

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={filteredTasks}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
        createTask={createTask}
      />
      {/* <TaskList data={taskList.data} /> */}
    </div>
  )
}

import './App.css'
import { TaskList, TaskListPropsType } from './TaskList'
import { TodolistItem } from './TodolistItem'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export const App = () => {
  const tasks1: Task[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ]

  const taskList: TaskListPropsType = {
    data: {
      title: 'Task List',
      tasks: [
        { taskId: 1, title: 'Learn HTML', isDone: true },
        { taskId: 2, title: 'Learn CSS', isDone: true },
        { taskId: 3, title: 'Learn JavaScript', isDone: false },
      ],
      students: ['Alice', 'Bob', 'Charlie'],
    }
  }

  return (
    <div className="app">
      <TodolistItem title="What to learn" tasks={tasks1} />
      <TaskList data={taskList.data} />
    </div>
  )
}

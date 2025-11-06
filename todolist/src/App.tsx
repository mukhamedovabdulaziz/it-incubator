import { useState } from 'react'
import './App.css'
// import { TaskList, TaskListPropsType } from './TaskList'
import { TodolistItem } from './TodolistItem'
import { v1 } from 'uuid'
import { CreateItemForm } from './CreateItemForm'

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type TaskState = {
  [key: string]: Task[]
}

export type FilterValues = 'all' | 'active' | 'completed'

export const App = () => {
  const todolistId1 = v1()
  const todolistId2 = v1()
  const [todolists, setTodolists] = useState<Todolist[]>([
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ])

  const [tasks, setTasks] = useState<TaskState>({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  })

  const createTask = (todolistId: string, title: string) => {
    const newTask: Task = { id: v1(), title, isDone: false }
    setTasks({ ...tasks, [todolistId]: [...tasks[todolistId], newTask] })
  }

  const deleteTask = (todolistId: string, taskId: string) => {
    const todolistTasks = tasks[todolistId]
    const newTodolistTasks = todolistTasks.filter(task => task.id !== taskId)
    tasks[todolistId] = newTodolistTasks
    setTasks({ ...tasks })
  }

  const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
    const newTasks = {
      ...tasks,
      [todolistId]: tasks[todolistId].map(task => task.id == taskId ? { ...task, isDone } : task),
    }
    setTasks(newTasks)
  }

  const changeFilter = (todolistId: string, filter: FilterValues) => {
    setTodolists(todolists.map(tl => tl.id === todolistId ? { ...tl, filter } : tl))
  }

  const deleteTodolist = (todolistId: string) => {
    setTodolists(todolists.filter(tl => tl.id !== todolistId))
    const newTasks = { ...tasks }
    delete newTasks[todolistId]
    setTasks(newTasks)
  }

  const createTodolist = (title: string) => {
    const todolistId = v1()
    const newTodolist: Todolist = { id: todolistId, title, filter: 'all' }
    setTodolists([newTodolist, ...todolists])
    setTasks({ ...tasks, [todolistId]: [] })
  }

  const changeTaskTitle = (todolistId: string, taskId: string, newTitle: string) => {
    setTasks({
      ...tasks,
      [todolistId]: tasks[todolistId].map(t => t.id === taskId ? { ...t, title: newTitle } : t),
    })
  }

  const changeTodolistTitle = (todolistId: string, newTitle: string) => {
    setTodolists(todolists.map(tl => tl.id === todolistId ? { ...tl, title: newTitle } : tl))
  }

  return (
    <div className="app">
      <CreateItemForm onCreateItem={createTodolist} />
      {todolists.map(todolist => {
        const todolistTasks = tasks[todolist.id]
        let filteredTasks = todolistTasks
        if (todolist.filter === 'active') {
          filteredTasks = todolistTasks.filter(t => !t.isDone)
        } else if (todolist.filter === 'completed') {
          filteredTasks = todolistTasks.filter(t => t.isDone)
        }
        return (
          <TodolistItem
            key={todolist.id}
            todolist={todolist}
            tasks={filteredTasks}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
            createTask={createTask}
            changeTaskStatus={changeTaskStatus}
            deleteTodolist={deleteTodolist}
            changeTaskTitle={changeTaskTitle}
            changeTodolistTitle={changeTodolistTitle}
          />
        )
      })}
    </div>
  )
}

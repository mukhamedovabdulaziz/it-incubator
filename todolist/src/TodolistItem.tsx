import { type ChangeEvent, type KeyboardEvent, useState } from "react"
import { FilterValues, Task } from "./App"
import { Button } from "./Button"

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    changeFilter: (value: FilterValues) => void
    createTask: (title: string) => void
}

export const TodolistItem = (props: Props) => {
    const { title, tasks, deleteTask, changeFilter, createTask } = props
    const [taskTitle, setTaskTitle] = useState<string>('')

    const handleChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const handleCreateTask = () => {
        createTask(taskTitle)
        setTaskTitle('')
    }

    const handleCreateTaskOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleCreateTask()
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={taskTitle}
                    onChange={handleChangeTaskTitle}
                    onKeyDown={handleCreateTaskOnEnter} />
                <Button title="+" onClick={handleCreateTask} />
            </div>
            {tasks.length === 0 ? (
                <div>No tasks</div>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const handleDeleteTask = () => {
                            deleteTask(task.id)
                        }
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} />
                                <span>{task.title}</span>
                                <Button title="x" onClick={handleDeleteTask} />
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')} />
                <Button title={'Active'} onClick={() => changeFilter('active')} />
                <Button title={'Completed'} onClick={() => changeFilter('completed')} />
            </div>
        </div>
    )
}
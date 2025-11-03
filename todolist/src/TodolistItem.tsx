import { type ChangeEvent, type KeyboardEvent, useState } from "react"
import { FilterValues, Task } from "./App"
import { Button } from "./Button"

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskId: string) => void
    filter: FilterValues
    changeFilter: (value: FilterValues) => void
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TodolistItem = (props: Props) => {
    const { title, tasks, deleteTask, filter, changeFilter, createTask, changeTaskStatus } = props
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
    }

    const handleCreateTask = () => {
        const trimmedTitle = taskTitle.trim()
        if (trimmedTitle !== '') {
            createTask(trimmedTitle)
            setTaskTitle('')
        } else {
            setError('Title is required')
        }
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
                    className={error ? 'error' : ''}
                    value={taskTitle}
                    onChange={handleChangeTaskTitle}
                    onKeyDown={handleCreateTaskOnEnter} />
                <Button title="+" onClick={handleCreateTask} />
                {error && <div className="error-message">{error}</div>}
            </div>
            {tasks.length === 0 ? (
                <div>No tasks</div>
            ) : (
                <ul>
                    {tasks.map(task => {
                        const handleDeleteTask = () => {
                            deleteTask(task.id)
                        }
                        const handleChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                            const newStatusValue = e.currentTarget.checked
                            changeTaskStatus(task.id, newStatusValue)
                        }

                        return (
                            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={task.isDone} onChange={handleChangeTaskStatus} />
                                <span>{task.title}</span>
                                <Button title="x" onClick={handleDeleteTask} />
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'} onClick={() => changeFilter('all')} />
                <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'} onClick={() => changeFilter('active')} />
                <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'} onClick={() => changeFilter('completed')} />
            </div>
        </div>
    )
}
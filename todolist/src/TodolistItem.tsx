import { type ChangeEvent, type KeyboardEvent, useState } from "react"
import { FilterValues, Task, Todolist } from "./App"
import { Button } from "./Button"

type Props = {
    todolist: Todolist
    tasks: Task[]
    deleteTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterValues) => void
    createTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    deleteTodolist: (todolistId: string) => void
}

export const TodolistItem = (props: Props) => {
    const {
        todolist: {
            id, title, filter
        },
        tasks,
        deleteTask,
        changeFilter,
        createTask,
        changeTaskStatus,
        deleteTodolist
    } = props
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
        setError(null)
    }

    const handleCreateTask = () => {
        const trimmedTitle = taskTitle.trim()
        if (trimmedTitle !== '') {
            createTask(id, trimmedTitle)
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

    const handleChangeFilter = (value: FilterValues) => {
        changeFilter(id, value)
    }

    const deleteTodolistHandler = () => {
        deleteTodolist(id)
    }

    return (
        <div>
            <div className="container">
                <h3>{title}</h3>
                <Button title="x" onClick={deleteTodolistHandler} />
            </div>
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
                            deleteTask(id, task.id)
                        }
                        const handleChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                            const newStatusValue = e.currentTarget.checked
                            changeTaskStatus(id, task.id, newStatusValue)
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
                <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'} onClick={() => handleChangeFilter('all')} />
                <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'} onClick={() => handleChangeFilter('active')} />
                <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'} onClick={() => handleChangeFilter('completed')} />
            </div>
        </div>
    )
}
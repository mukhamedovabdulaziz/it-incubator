import { type ChangeEvent } from "react"
import { FilterValues, Task, Todolist } from "./App"
import { Button } from "./Button"
import { CreateItemForm } from "./CreateItemForm"
import { EditableSpan } from "./EditableSpan"

type Props = {
    todolist: Todolist
    tasks: Task[]
    deleteTask: (todolistId: string, taskId: string) => void
    changeFilter: (todolistId: string, filter: FilterValues) => void
    createTask: (todolistId: string, title: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    deleteTodolist: (todolistId: string) => void
    changeTaskTitle: (todolistId: string, taskId: string, newTitle: string) => void
    changeTodolistTitle: (todolistId: string, newTitle: string) => void
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
        deleteTodolist,
        changeTaskTitle,
        changeTodolistTitle
    } = props


    const handleCreateTask = (title: string) => {
        createTask(id, title)
    }

    const handleChangeFilter = (value: FilterValues) => {
        changeFilter(id, value)
    }

    const deleteTodolistHandler = () => {
        deleteTodolist(id)
    }

    const changeTodolistTitleHandler = (newTitle: string) => {
        changeTodolistTitle(id, newTitle)
    }

    return (
        <div>
            <div className="container">
                <h3>
                    <EditableSpan value={title} onChange={changeTodolistTitleHandler} />
                </h3>
                <Button title="x" onClick={deleteTodolistHandler} />
            </div>
            <CreateItemForm onCreateItem={handleCreateTask} />
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
                        const handleChangeTaskTitle = (newTitle: string) => {
                            changeTaskTitle(id, task.id, newTitle)
                        }

                        return (
                            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                                <input type="checkbox" checked={task.isDone} onChange={handleChangeTaskStatus} />
                                <EditableSpan value={task.title} onChange={handleChangeTaskTitle} />
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
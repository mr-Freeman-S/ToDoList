import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import Input from "./components/Input";
import {EditableSpan} from "./components/EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todoListID: string, tID: string, title: string) => void
    updateTodoTitle: (todoListID: string, title: string) => void
}

export function TodoList(props: PropsType) {
    /*let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)*/

    /*const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addTask(newTitle, props.id);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }*/

    /*    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            setError(null);
            if (e.charCode === 13) {
                addTask();
            }
        }*/

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const AddNewTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }

    const updateTaskHandler = (todoListID: string, tID: string, title: string) => {
        props.updateTask(todoListID, tID, title)
    }

    const updateTodoTitle = (todoListID: string, title: string) => {
        props.updateTodoTitle(todoListID,title)
    }
    return <div>
        <h3> <EditableSpan oldTitle={props.title} callback={(title) => {
            updateTodoTitle(props.id, title)
        }}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <Input callBack={AddNewTaskHandler}/>
        {/*        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>*/}
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan oldTitle={t.title} callback={(title) => {
                            updateTaskHandler(props.id, t.id, title)
                        }}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}



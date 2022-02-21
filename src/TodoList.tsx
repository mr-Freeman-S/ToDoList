import React, {KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import Input from "./components/Input";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: FilterValuesType
    changeTaskStatus: (taskID:string,isDone:boolean)=>void

}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    const [error, setError] = useState<boolean>(false)
    const errorMessage = error && <div>Title is require</div>

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle);
        } else {
            setError(true)
        }
        setTitle("");
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const onClickRemoveTask = (id: string) => props.removeTask(id)
    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    const tasksList = props.tasks.map(t => {
        return <li key={t.id}>
            <input type="checkbox" onChange={(e)=>props.changeTaskStatus(t.id,e.currentTarget.checked)} checked={t.isDone}/>
            <span className={t.isDone ? 'completedTask' : ''}>{t.title}</span>
            <Button name={'X'} callback={() => onClickRemoveTask(t.id)}/>
        </li>
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <Input callback={setError} title={title} setTitle={setTitle} onKeyPressHandler={onKeyPressHandler}/>
            <Button name={'+'} callback={addTask}/>
            {errorMessage}

            <ul>
                {tasksList}
            </ul>
            <div>
                <Button classStyle={props.filter === 'all' ? 'isActiveButton' : ''} name={'All'}
                        callback={onAllClickHandler}/>
                <Button classStyle={props.filter === 'active' ? 'isActiveButton' : ''} name={'Active'}
                        callback={onActiveClickHandler}/>
                <Button classStyle={props.filter === 'completed' ? 'isActiveButton' : ''} name={'Completed'}
                        callback={onCompletedClickHandler}/>
            </div>
        </div>
    )
}

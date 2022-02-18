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
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    const addTask = () => {
        props.addTask(title);
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
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <Button name={'X'} callback={() => onClickRemoveTask(t.id)}/>
        </li>
    })

    return <div>
        <h3>{props.title}</h3>
        <Input title={title} setTitle={setTitle} onKeyPressHandler={onKeyPressHandler}/>
        <Button name={'+'} callback={addTask}/>
        <ul>
            {tasksList}
        </ul>
        <div>
            <Button name={'All'} callback={onAllClickHandler}/>
            <Button name={'Active'} callback={onActiveClickHandler}/>
            <Button name={'Completed'} callback={onCompletedClickHandler}/>
        </div>
    </div>
}

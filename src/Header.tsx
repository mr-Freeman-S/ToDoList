import React, {useState} from 'react';
import FullInput from "./components/FullInput";
import task from "./Task";
import {TaskType} from "./TodoList";
import Input from "./components/Input";
import Button from "./components/Button";
import AddTaskForm from "./components/AddTaskForm";


type HeaderPropsType = {
    title: string
    addNewTask: (task:string) => void
}

const Header = (props: HeaderPropsType) => {
    let [title, setTitle] = useState<string>('')

    const onClickButtonHandler = () => {
        props.addNewTask(title)
        setTitle('')
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <AddTaskForm addNewTask={props.addNewTask} onClickButtonHandler={onClickButtonHandler}/>
        </div>
    )
};


export default Header;
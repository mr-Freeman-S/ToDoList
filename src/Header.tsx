import React, {useState} from 'react';
import FullInput from "./components/FullInput";
import task from "./Task";
import {TaskType} from "./TodoList";
import Input from "./components/Input";
import Button from "./components/Button";


type HeaderPropsType = {
    title: string
    addedNewTask: (task:string) => void
}

const Header = (props: HeaderPropsType) => {
    let [title, setTitle] = useState<string>('')

    const onClickButtonHandler = () => {
        props.addedNewTask(title)
        setTitle('')
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={onClickButtonHandler}/>
        </div>
    )
};


export default Header;
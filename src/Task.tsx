import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask:  (taskID:number) => void
}


const Task = (props:TaskPropsType) => {
    return (
        <div>
            <li><input type="checkbox" checked={props.isDone}/> <span>{props.title}</span></li>
            <span><button onClick={() => props.removeTask(props.id)}>X</button></span>
        </div>
    );
};

export default Task;
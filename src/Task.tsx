import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask:  (taskID:number) => void
}


const Task = (props:TaskPropsType) => {
    return (
        <div>
            <li><input type="checkbox" checked={props.isDone}/> <span>{props.title}</span></li>
            <button onClick={() => props.removeTask(props.id)}>X</button>
        </div>
    );
};

export default Task;
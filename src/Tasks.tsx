import React from 'react';
import {TaskType} from "./TodoList";
import Task from "./Task";
import ControlButtons from "./ControlButtons";
import {filterType} from "./App";

type TasksPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID:number) => void
    changeFilter: (filter:filterType) => void
}


const Tasks = (props: TasksPropsType) => {
    const tasksComponents = props.tasks.map(task => <Task removeTask={props.removeTask} key={task.id} {...task}/>)
    return (
        <div>
            <ul>
                { tasksComponents }
            </ul>
            <ControlButtons changeFilter={props.changeFilter} />
        </div>

    );
};

export default Tasks;
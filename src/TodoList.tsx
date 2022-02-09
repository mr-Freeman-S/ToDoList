import React from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import {filterType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number) => void
    changeFilter: (filter:filterType) => void
    addedNewTask: (task:string) => void


}

export type TaskType = {
    id: number
    title: string
    isDone: boolean


}

function TodoList(props: TodoListPropsType){
    return (
        <div>
            <Header addedNewTask={props.addedNewTask} title={props.title}/>
            <Tasks  changeFilter={props.changeFilter} tasks={props.tasks} removeTask={props.removeTask}/>
        </div>
    );
};

export default TodoList;
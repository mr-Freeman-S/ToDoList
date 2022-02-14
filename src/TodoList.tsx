import React from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import {filterType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:string) => void
    changeFilter: (filter:filterType) => void
    addNewTask: (task:string) => void


}

export type TaskType = {
    id: string
    title: string
    isDone: boolean


}

function TodoList(props: TodoListPropsType){
    return (
        <div>
            <Header addNewTask={props.addNewTask} title={props.title}/>
            <Tasks  changeFilter={props.changeFilter} tasks={props.tasks} removeTask={props.removeTask}/>
        </div>
    );
};

export default TodoList;
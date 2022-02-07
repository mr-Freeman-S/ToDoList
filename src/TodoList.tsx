import React from 'react';
import Header from "./Header";
import Tasks from "./Tasks";
import {filterType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID:number) => void
    changeFilter:(filter:filterType) => void

}

export type TaskType = {
    id: number
    title: string
    isDone: boolean


}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <Header title={props.title}/>
            <Tasks changeFilter={props.changeFilter} tasks={props.tasks} removeTask={props.removeTask}/>
        </div>
    );
};

export default TodoList;
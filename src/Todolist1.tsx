import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {TodolistType} from "./AppWithRedux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
import {changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./state/todolists-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string

}

export function Todolist1(props: PropsType) {

    const todolist = useSelector<AppRootStateType, TodolistType>(state => state.todolists.filter(todo => todo.id === props.id)[0])
    const tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[props.id])
    let tasksForRender = [...tasks]
    const dispatch = useDispatch()

    if (todolist.filter === 'active') {
        tasksForRender = tasks.filter(el => !el.isDone)
    } else if (todolist.filter === 'completed') {
        tasksForRender = tasks.filter(el => el.isDone)
    } else {
        tasksForRender = tasks
    }


    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id));
    }

    const removeTodolist = () => {
        dispatch(removeTodolistAC(props.id))
    }
    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleAC(props.id, title));
    }



    const onAllClickHandler = () => dispatch(changeTodolistFilterAC(props.id,"all"));
    const onActiveClickHandler = () => dispatch(changeTodolistFilterAC(props.id,'active'));
    const onCompletedClickHandler = () => dispatch(changeTodolistFilterAC(props.id,'completed'))

    return <div>
        <h3><EditableSpan value={todolist.title} onChange={changeTodolistTitle}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {
                tasksForRender.map(t => {
                    const onClickHandler = () => dispatch(removeTaskAC( t.id, props.id))
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        dispatch(changeTaskStatusAC(t.id, newIsDoneValue, props.id))
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        dispatch(changeTaskTitleAC(t.id, newValue, props.id));
                    }


                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={todolist.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={todolist.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={todolist.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}



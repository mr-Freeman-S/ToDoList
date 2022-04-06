import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithReducers() {
    console.log('APP')

    function removeTask(id: string, todolistId: string) {
        let action = removeTaskAC(id, todolistId)
        dispatchTaskReducer(action)
    }

    function addTask(title: string, todolistId: string) {
        let action = addTaskAC(title, todolistId)
        dispatchTaskReducer(action)

    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let action = changeTodolistFilterAC(todolistId, value)
        dispatchToTodoReducer(action)
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let action = changeTaskStatusAC(id, isDone, todolistId)
        dispatchTaskReducer(action)
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        let action = changeTaskTitleAC(id, newTitle, todolistId)
        dispatchTaskReducer(action)
    }

    function removeTodolist(id: string) {
        let action = removeTodolistAC(id)
        dispatchToTodoReducer(action)
        dispatchTaskReducer(action)
    }

    function changeTodolistTitle(id: string, title: string) {
        let action = changeTodolistTitleAC(id, title)
        dispatchToTodoReducer(action)
    }

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, dispatchToTodoReducer] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, dispatchTaskReducer] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function addTodolist(title: string) {
        let action = addTodolistAC(title)
        dispatchToTodoReducer(action)
        dispatchTaskReducer(action)
    }

    return (
        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id];
                    let tasksForTodolist = allTodolistTasks;

                    if (tl.filter === "active") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    }

                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}
                        changeTaskTitle={changeTaskTitle}
                        changeTodolistTitle={changeTodolistTitle}
                    />
                })
            }

        </div>
    );
}

export default AppWithReducers;

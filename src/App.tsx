import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import task from "./Task";
import {v1} from "uuid";


export type filterType = "all" | 'active' | 'completed'

function App() {

    const [tasks, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
    ])
    const removeTask = (id: string) => {
        const newTasks = tasks.filter(task => id !== task.id)
        setTask(newTasks)
    }
    console.log(tasks)
    const [filter, setFilter] = useState<filterType>('all')

    const getFilteredTasks = (filter: filterType) => {
        switch (filter) {
            case "active":
                return tasks.filter(task => !task.isDone)
            case "completed":
                return tasks.filter(task => task.isDone)
            default:
                return tasks
        }
    }
    const filteredTasks = getFilteredTasks(filter)

    //added new task in todo list
    const addNewTask = (title: string) => {
        setTask([{id: v1(), title, isDone: false}, ...tasks])
    }

    const changeFilter = (filter: filterType) => {
        setFilter(filter)
    }
    return (
        <div className="App">
            <TodoList addNewTask={addNewTask} changeFilter={changeFilter} removeTask={removeTask}
                      tasks={filteredTasks} title={'Front-end'}/>
        </div>
    );
}

export default App;

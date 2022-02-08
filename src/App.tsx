import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import task from "./Task";

export type filterType = "all" | 'active' | 'completed'

function App() {
    const [tasks,setTask] = useState<Array<TaskType>>([
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'HTML', isDone: true},
        {id: 4, title: 'REACT', isDone: false},
    ])
    const removeTask = (id:number) => {
        const newTasks = tasks.filter(task => id !== task.id)
        setTask(newTasks)
    }

    const [filter, setFilter] = useState<filterType>('all')

    const getFilteredTasks = (filter:filterType) => {
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

    const changeFilter = (filter:filterType) => {
      setFilter(filter)
    }
    return (
        <div className="App">
            <TodoList  changeFilter={changeFilter} removeTask={removeTask} tasks={filteredTasks} title={'Front-end'}/>
        </div>
    );
}

export default App;

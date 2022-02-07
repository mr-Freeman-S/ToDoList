import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
export type filterType = "all" | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS/TS', isDone: false},
        {id: 4, title: 'JS/TS', isDone: true}
    ])

    const [filter, setFilter] = useState<filterType>('completed')



    const tasks_2: Array<TaskType> = [
        {id: 1, title: 'Vegetable', isDone: true},
        {id: 2, title: 'Fruits', isDone: true},
        {id: 3, title: 'Eggs', isDone: true}
    ]
    const tasks_3: Array<TaskType> = [
        {id: 1, title: 'Amsterdam', isDone: true},
        {id: 2, title: 'Peterburg', isDone: true},
        {id: 3, title: 'Lviv', isDone: true}
    ]

    const removeTask = (taskID: number) => {
        const filteredTasks = tasks.filter(task => task.id !== taskID)
        setTasks(filteredTasks)
    }
    const changeFilter = (filter:filterType) => {
        setFilter(filter)

    }

    const getFilteredTaskForRender = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const filteredTaskForRender = getFilteredTaskForRender()


    return (
        <div className="App">
            <TodoList changeFilter={changeFilter} title={'What to learn'} tasks={filteredTaskForRender} removeTask={removeTask}/>
        </div>
    );
}

export default App;

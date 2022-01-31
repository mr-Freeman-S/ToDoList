import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {
    const tasks_1: Array<TaskType> = [
        {id: 1, title: 'HTML', iDone: true},
        {id: 2, title: 'CSS', iDone: true},
        {id: 3, title: 'JS/TS', iDone: true}
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: 'Vegetable', iDone: true},
        {id: 2, title: 'Fruits', iDone: true},
        {id: 3, title: 'Eggs', iDone: true}
    ]
    const tasks_3: Array<TaskType> = [
        {id: 1, title: 'Amsterdam', iDone: true},
        {id: 2, title: 'Peterburg', iDone: true},
        {id: 3, title: 'Lviv', iDone: true}
    ]
    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={tasks_1}/>
            <TodoList title={'Eat'} tasks={tasks_2}/>
            <TodoList title={'Work'} tasks={tasks_3}/>
        </div>
    );
}

export default App;

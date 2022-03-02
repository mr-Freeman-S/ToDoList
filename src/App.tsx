import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskObjectType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskObjectType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListID:string ,id: string) {
        setTasks({...tasks,[todoListID]:tasks[todoListID].filter(t => t.id != id)});
    }

    function addTask(todoListID:string, title: string) {
        let task = {id: v1(), title: title, isDone: false};

         setTasks({...tasks,[todoListID]:[task,...tasks[todoListID]]});
    }

    function changeStatus(todoListID:string,taskId: string, isDone: boolean) {
         let task = tasks[todoListID].find(t => t.id === taskId);
         if (task) {
             task.isDone = isDone;
         }

         setTasks({...tasks, [todoListID]:tasks[todoListID].map(el=> taskId === el.id ? {...el,isDone}: el)})
    }



    function changeFilter(todoListID:string, value: FilterValuesType) {
        setTodolists(todolists.map((el)=> el.id === todoListID? {...el,filter:value}: el))
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                }
                return (
                    <Todolist title="What to learn"
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={el.filter}
                              todoListID={el.id}
                    />
                )
            })}


        </div>
    );
}

export default App;

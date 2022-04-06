import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


const initState:Array<TodolistType> = []


export const todolistsReducer = (state = initState, action: todolistsReducerType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            // setTodolists(todolists.filter(tl => tl.id != id));
            // delete tasks[id];
            // setTasks({...tasks});
            const newState = [...state]
            return state.filter((el) => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            // let newTodolistId = v1();
            let newTodolist: TodolistType = {id: action.payload.todoID, title: action.payload.title, filter: 'all'};
            // setTodolists([newTodolist, ...todolists]);
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        case 'CHANGE-TODOLIST-FILTER': {
            /* let todolist = todolists.find(tl => tl.id === todolistId);
             if (todolist) {
                 todolist.filter = value;
                 setTodolists([...todolists])
             }*/
            return state.map(el => el.id === action.payload.id? {...el,filter:action.payload.filter}: el)
        }
        default:
            return state
    }
}

type todolistsReducerType = removeTodolistACType
    | addTodolistACType
    | changeTodolistTitleACType
    | changeTodolistFilterACType
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id: todolistId1}
    } as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title: newTodolistTitle,
            todoID:v1()
        }
    } as const
}
export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {
            id: todolistId2,
            title: newTodolistTitle
        }
    } as const
}
export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId2,
            filter: newFilter
        }
    } as const
}

import {Dispatch} from "redux";
import {AppActionsType, setAppStatusAC, setErrorAC} from "../app/appReducer";
import {ResponseType} from "../api/todolists-api";


export const handleServerNetworkError = (dispatch: Dispatch<AppActionsType>, message: string) => {
    dispatch(setAppStatusAC("failed"))
    dispatch(setErrorAC(message))
}
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<AppActionsType>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export type setAppStatusType = ReturnType<typeof setAppStatusAC>

export const setErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error} as const
}
export type setErrorACType = ReturnType<typeof setErrorAC>

export type AppActionsType =
    | setAppStatusType
    | setErrorACType


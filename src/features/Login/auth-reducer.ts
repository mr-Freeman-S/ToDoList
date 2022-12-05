import {Dispatch} from "redux";
import {setAppStatusAC, setAppStatusType} from "../../app/appReducer";
import {authAPI, loginParamsType} from "../../api/todolists-api";
import {handleServerAppError, handleServerNetworkError} from "../../utils/ErrorUtils";
import {AxiosError} from "axios";
import {redirect} from "react-router-dom";


const initialState: authStateType = {
    isLogin: false
}

export const authReducer = (state: authStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'auth/setLogged':
            return {...state, isLogin: action.isLogin}
        case 'auth/setLogout':
            return {...state, isLogin: false}

        default:
            return state
    }
}

// actions
export const setLogged = (isLogin: boolean) =>
    ({type: 'auth/setLogged', isLogin} as const)
export const setLogout = () =>
    ({type: 'auth/setLogout'} as const)

enum ResultCodeStatuses {
    'success' = 0,
    'error' = 1,
    'captcha' = 10
}

// thunks
export const authMeTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.authMe()
        .then((res) => {
            if (res.data.resultCode === ResultCodeStatuses.success) {
                dispatch(setLogged(true))
                dispatch(setAppStatusAC("succeeded"))
                redirect('/')
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
                handleServerNetworkError(dispatch, err.message)
            }
        )
}

export const loginMeTC = (data: loginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.loginMe(data)
        .then((res) => {
            if (res.data.resultCode === ResultCodeStatuses.success) {
                dispatch(setLogged(true))
                dispatch(setAppStatusAC("succeeded"))
                redirect('/')
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
                handleServerNetworkError(dispatch, err.message)
            }
        )
}
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === ResultCodeStatuses.success) {
                dispatch(setLogout())
                dispatch(setAppStatusAC("succeeded"))
                redirect('/login')
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((err: AxiosError) => {
                handleServerNetworkError(dispatch, err.message)
            }
        )
}


// types
type authStateType = {
    isLogin: boolean
}

type ActionsType =
    ReturnType<typeof setLogged>
    | ReturnType<typeof setLogout>
    | setAppStatusType
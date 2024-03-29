import React, {useEffect} from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {Menu} from '@mui/icons-material';
import LinearProgress from "@mui/material/LinearProgress";
import {useAppSelector} from "./store";
import {RequestStatusType} from "./appReducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {Route, Routes} from "react-router-dom";
import {Login} from "../features/Login/Login";
import {useDispatch} from "react-redux";
import {authMeTC, logoutTC} from "../features/Login/auth-reducer";
import {TodolistsList} from '../features/TodolistsList/TodolistsList';


const App = () => {

    const status = useAppSelector<RequestStatusType>(state => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMeTC())
    }, [dispatch])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button onClick={() => {
                        dispatch(logoutTC())
                    }} color="inherit">logout</Button>
                </Toolbar>
            </AppBar>
            {(status === 'loading') && <LinearProgress color="secondary"/>}

            <Container fixed>
                <Routes>
                    < Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<TodolistsList/>}/>
                </Routes>

            </Container>
            <ErrorSnackbar/>
        </div>
    )
}

export default App

import * as React from 'react';
import {useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import {Copyright} from "../Footer/Copyright";
import * as Yup from "yup"
import {useDispatch} from "react-redux";
import {loginMeTC} from "./auth-reducer";
import {useAppSelector} from "../../app/store";
import {useNavigate} from "react-router-dom";
import {FormLabel} from "@mui/material";

type initialStateTypeFormik = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

const theme = createTheme();

export const Login:React.FC = () => {
    const dispatch = useDispatch()
    const isLogin = useAppSelector(state => state.auth.isLogin)
    const navigate = useNavigate()

    const SignInSchema = Yup.object().shape({
        password: Yup.string()
            .min(4, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const formik = useFormik<initialStateTypeFormik>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        }, validationSchema: SignInSchema,
        onSubmit: values => {
            dispatch(loginMeTC(values))
        },
    });

    useEffect(() => {
        if (isLogin) {
            return navigate('/')
        }
    }, [isLogin, navigate])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <FormLabel>
                        <p>
                            To log in get registered <a href={"https://social-network.samuraijs.com/"}
                                                        target={"_blank"} rel={"noreferrer"}> here</a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={formik.handleChange}
                                               value={formik.values.rememberMe} color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}
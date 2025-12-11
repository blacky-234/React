import { LoginForm } from '../../components/auth/login';
export const authRouter = {
    path:"auth",
    children:[
        {path:"",element:<LoginForm />},
        {path:"login",element:<LoginForm />},
        {path:"register",element:<LoginForm />}

    ]
}
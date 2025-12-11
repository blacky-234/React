import { createBrowserRouter  } from "react-router-dom";
import { LoginForm } from '../components/auth/login'
import { authRouter } from "./auth/authRouter";

export const router = createBrowserRouter([
    { path: '/',element: <LoginForm />},
    authRouter
]);
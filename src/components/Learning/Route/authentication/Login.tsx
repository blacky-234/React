import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate,useLocation } from "react-router-dom";



export const Login = () => {
    const [user, setUser] = useState('');
    const auth  = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';

    const handleLogin = () =>{
        auth.login({ id: '1', name: user, email: '' });
        navigate(redirectPath, {replace: true});
    }

    return (
        <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Perform login logic here
//     login({ id: "1", name: "User", email });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

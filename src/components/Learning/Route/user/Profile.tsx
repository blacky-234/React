import { useAuth } from "../authentication/Auth";
import { useNavigate } from "react-router-dom";



export const Profile = () =>{

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    }

    return(
        <div>
            welcome {auth.user?.name} <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
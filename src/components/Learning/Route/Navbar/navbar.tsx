// TODO: Normal Link in React

// import { Link } from 'react-router-dom'


// export const Navbar = () => {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//         </nav>
//     );
// };


// TODO:  Navbar using sometime Active Link manage

// import { NavLink } from 'react-router-dom'


// export const Navbar = () => {
//     return (
//         <nav>
//             <div className='navbard-route'>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/about">About</NavLink>
//             </div>
//         </nav>
//     );
// };

// TODO : Using NavLink Activate Using React Scripted

import { NavLink } from 'react-router-dom'
import { useAuth } from '../authentication/Auth';


export const Navbar = () => {

    const navLinkStyle = ({ isActive }:any) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        };
    };

    const auth = useAuth();
    return (
        <nav className='primary-nav'>
            <NavLink style={navLinkStyle} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} to="/about">About</NavLink>
            <NavLink style={navLinkStyle} to="/products">Products</NavLink>
            <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
            {!auth.user && (
                <NavLink style={navLinkStyle} to="/login">Login</NavLink>
            )}
        </nav>
    );
};
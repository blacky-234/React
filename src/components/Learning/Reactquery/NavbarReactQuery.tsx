import { Link } from "react-router-dom"
import './css/rqnavbar.css'

export const NavbarReactquery = () => {
    return (
        <div>
            <nav className="rqnavbar">
                <ul className="rqnav-list">
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/superheros">SuperHeros</Link>
                    </li>
                    <li>
                    <Link to="/rqsuperheros">RQSuperHeros</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
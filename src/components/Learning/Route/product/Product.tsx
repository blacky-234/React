import { Link, Outlet } from "react-router-dom";

export const Products = () => {
    return (
        <>
            <div>
                <input type="search" placeholder="Search Product" />
            </div>
            <nav>
                <Link to="featured">Feature</Link>
                <Link to="new">New</Link>
            </nav> 
            <Outlet />           
        </>
    )
}
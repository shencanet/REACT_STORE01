import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
        <ul>
            <li>
                <NavLink to="/shopping">SHOPPING</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/all">ALL</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/clothes">CLOTHES</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/electronics">ELECTRONICS</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/furnitures">FURNITURES</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/others">OTHERS</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/my-orders">MY ORDERS</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/my-account">MY ACCOUNT</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/sign-in">SIGN IN</NavLink>
            </li>
        </ul>
        

        </nav>
    );
    }

export default Navbar;
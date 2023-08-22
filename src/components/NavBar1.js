import React from "react";
import '../style/NavBar1.css';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthenticationService from "../service/AuthenticationService";


const NavBar1 = () => {
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                     <Link to="/" className="nav-link">
                        <span>
                            <FontAwesomeIcon icon = "home"></FontAwesomeIcon>
                        </span> &nbsp; Home
                    </Link> {/* <a href='/'> */}
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        <span>
                                <FontAwesomeIcon icon = "camera-retro"></FontAwesomeIcon>
                            </span> &nbsp;Register
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <span>
                            <FontAwesomeIcon icon = "sign-in"></FontAwesomeIcon>
                        </span> &nbsp;
                    Login</Link>
                </li>

                <li className="nav-item">
                    <Link to="/product" className="nav-link">
                        <span>
                            <FontAwesomeIcon icon = "bomb"></FontAwesomeIcon>
                        </span> &nbsp;
                    Products</Link>
                </li>

                <li className="nav-item">
                    <Link to="/logout" className="nav-link" onClick={AuthenticationService.logout()}>
                        <span>
                            <FontAwesomeIcon icon = "sign-out"></FontAwesomeIcon>
                        </span> &nbsp;
                    Logout</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        <span>
                            <FontAwesomeIcon icon = "coffee"></FontAwesomeIcon>
                        </span> &nbsp;
                    About Us</Link>
                </li>

                <li className="nav-item">
                    <Link to="/dealers" className="nav-link">
                        <span>
                            <FontAwesomeIcon icon = "people-group"></FontAwesomeIcon>
                        </span> &nbsp;
                    DealersInfo</Link>
                </li>
                </ul>
        </nav>
    );
}
export default NavBar1;

import {Link} from 'react-router-dom'
import {useLogout} from "../../hooks/useLogout";
import {useAuthContext} from "../../hooks/useAuthContext";
import {Navbar} from "react-bootstrap";
import './Header.scss'
import React from "react";

export const Header = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    return (
        <Navbar className="navbar">
            <Navbar.Brand><Link to="/" className='header-brand'>MYM</Link></Navbar.Brand>
                <Navbar.Text>
                    {user && (
                        <div>
                            <button onClick={logout}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </Navbar.Text>
        </Navbar>
    )
}

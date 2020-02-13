import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../images/logos/Headphones.png'

function NavBar() {
    return (
        <nav className="blue darken-1">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="brand-logo">
                            <img src={logo} alt='headphones' className="logo" />
                        </div>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/playlistList">Playlists</Link>
                        </li>
                        <li>
                            <Link to="/liveroomlist">Live Rooms</Link>
                        </li>
                        <li>
                            <Link to="/userprofile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/sign-in">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
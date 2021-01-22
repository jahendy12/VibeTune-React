import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import SignedInLinks from '../auth/SignedInLinks'
import SignedOutLinks from '../auth/SignedOutLinks'

import logo from '../../images/logos/Headphones.png'

class NavBar extends Component {
    state = {
        auth: false
    }
    
    // handleSignIn = () => {
    //     console.log('string')
    //     this.setState({
    //         auth: true
    //     })
    // }

    // handleSignOut = () => {
    //     this.setState({
    //         auth: false
    //     })
    // }

    render() {
        const { auth } = this.state

        const authLinks = auth ? <SignedInLinks handleSignOut={this.handleSignOut}/> : <SignedOutLinks handleSignIn={this.handleSignIn}/>
        console.log(authLinks)
        console.log(auth)

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
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/playlists">Playlists</Link>
                            </li>
                            <li>
                                <Link to="/liveroomlist">Live Rooms</Link>
                            </li>
                            {authLinks}
                            {/* <li>
                                <Link to="/userprofile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/sign-in">Sign In</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
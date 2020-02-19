import React from 'react'
import { Link } from 'react-router-dom'

function SignedInLinks(props) {
    const { handleSignOut } = props

    return (
        <ul className="right hide-on-med-and-down">
            <li><Link className="white-text" onClick={handleSignOut} to="/sign-in">Sign In</Link></li>
            <li><Link className="white-text" to="/userprofile">Profile</Link></li>
        </ul>
    )
}

export default SignedInLinks
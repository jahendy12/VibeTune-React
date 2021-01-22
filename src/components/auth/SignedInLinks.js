import React from 'react'
import { Link } from 'react-router-dom'

function SignedInLinks(props) {
    const { handleSignIn } = props

    return (
        <ul className="right hide-on-med-and-down">
            <li><Link className="white-text" to="/userprofile">Profile</Link></li>
            <li><Link className="white-text" onClick={handleSignIn} to="/sign-in">Sign Out</Link></li>
        </ul>
    )
}

export default SignedInLinks
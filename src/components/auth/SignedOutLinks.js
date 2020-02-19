import React from 'react'
import { Link } from 'react-router-dom'

function SignedOutLinks(props) {
    const { handleSignOut } = props

    return (
        <ul className="right hide-on-med-and-down">
            <li><Link className="white-text" onClick={handleSignOut} to="/sign-in">Sign In</Link></li>
            <li><Link className="white-text" to="/sign-up">Sign Up</Link></li>
        </ul>
    )
}

export default SignedOutLinks
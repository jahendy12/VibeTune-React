import React from 'react'
import SignInForm from '../components/auth/SignInForm'

function SignIn() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 white">
                <SignInForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
    };

    handleChange = (e) => {
        // destructure event
        const {
            name,
            value
        } = e.target

        // update state
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        // prevent page re-load
        e.preventDefault();

        // destructure state
        const {
            name,
            email,
            username,
            password
        } = this.state

        const payload = {
            // name: name,
            // email: email,
            // username: username,
            // password: password
            name,
            email,
            username,
            password
        }
        console.log(payload)

        // post playlist
        this.addNewUser(payload)
    }

    addNewUser = async (payload) => {
        const response = await fetch('https://vibetune-express.herokuapp.com/users/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
    }

    render() {
        // destructure state
        const {
            name,
            email,
            username,
            password
        } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-field">
                    <button className="btn blue darken-1" type="submit">
                        Sign Up
                    </button>
                    <br />
                    <br />
                    <Link to="/sign-in">I'm already a user</Link>
                </div>
            </form>
        );
    }
}

export default SignUpForm;
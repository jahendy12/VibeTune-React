import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        username: '',
        password: '',
    };


    getUsers = async () => {
        const response = await fetch('http://localhost:5000/users/add')
        const json = await response.json()
        this.setState({
            users: json
        })
    }

    handleChange = (e) => {
        const {
            name,
            value
        } = e.target

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getUsers()
        //define something here so that it knows where to send info
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <input
                            type="text"
                            id="name"
                            className="FormField__Input"
                            placeholder="Enter your full name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="FormField">
                        <input
                            type="email"
                            id="email"
                            className="FormField__Input"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="FormField">
                        <input
                            type="username"
                            id="username"
                            className="FormField__Input"
                            placeholder="Enter your username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="FormField">
                        <input
                            type="password"
                            id="password"
                            className="FormField__Input"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="FormField">
                        <button className="btn blue darken-1" type="submit">
                            Sign Up
                        </button>
                        <Link to="/sign-in" className="FormField__Link">I'm already a user</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
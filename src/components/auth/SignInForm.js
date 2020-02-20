import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
	state = {
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
			username,
			password
		} = this.state

		const payload = {
			// username: username,
			// password: password
			username,
			password
		}
		console.log(payload)

		// post playlist
		this.loginUser(payload)
	}

	loginUser = async (payload) => {
		// login user
		const response = await fetch('http://localhost:5000/users/login', {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		})

		// convert response to json
		const json = await response.json()
	}

	render() {
		// destructure state
		const {
			username,
			password
		} = this.state

		return (
			<form onSubmit={this.handleSubmit}>
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
						Sign In
                    </button>
					<br />
					<br />
					<Link to="/sign-up">I don't have an account</Link>
				</div>
			</form>
		);
	}
}

export default SignInForm;
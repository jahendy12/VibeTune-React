import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    state= {
        username: '',
        password: '',
};


getUsers = async () => {
const response = await fetch('http://localhost:5000/users')
const json = await response.json()
this.setState({
    users: json
})
}

componentDidMount() {
this.getUsers()
}

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label black-text">Username</label>
                <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label black-text">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="btn blue darken-1">Sign In</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
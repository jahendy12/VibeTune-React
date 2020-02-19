import React, { Component } from 'react';

class LiveRoomList extends Component {
    state = {
        name: '',
        genre: '',
        descripton: '',
    }

    handleChange = (e) => {
        const {
            name,
            value
        } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // prevent page re-load
        e.preventDefault();

        // destructure state
        const {
            name,
            genre,
            description
        } = this.state

        const liveroom = {
            // name: name,
            name,
            // genre: genre,
            genre,
            // description: description,
            description
        }
        console.log(liveroom)

        // post liveroom
        this.postNewLiveroom(liveroom)
    }

    postNewLiveroom = async (liveroom) => {
        const response = await fetch('http://localhost:5000/liverooms/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(liveroom)
        })
        console.log(response)
    }

    render() {
        const {
            name,
            genre,
            description
        } = this.state

        return (
            <div class="row">
                <h3>Create a new liveroom</h3>
                <form class="col s12 white" onSubmit={this.handleSubmit}>
                    <div class="input-field col s6">
                        <input
                            type="text"
                            class="validate"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="input-field col s6">
                        <input
                            type="text"
                            class="validate"
                            name="genre"
                            placeholder="Genre"
                            value={genre}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div class="input-field col s6">
                        <input
                            type="text"
                            class="validate"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button class="btn blue darken-1" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LiveRoomList
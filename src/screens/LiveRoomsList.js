// unimportant comment
// another comment
// yeah yeah yeah

import React, { Component } from 'react';

import LiveroomList from '../components/liverooms/LiveRoomList'

class Liverooms extends Component {
    state = {
        name: '',
        genre: '',
        descripton: '',
        liverooms: []
    }

    getLiverooms = async () => {
        // fetch request to get liverooms
        const response = await fetch('https://vibetune-express.herokuapp.com/liverooms')


        // convert response to json
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        // update state
        this.setState({
            liverooms: parsedResponse
        })
    }

    deleteLiveroom = async (id) => {
        // delete liveroom from database
        const response = await fetch(`https://vibetune-express.herokuapp.com/liverooms/${id}`, {
            method: 'DELETE'
        })
        
        // fetch liverooms from database
        this.getLiverooms()
    }

    handleChange = (e) => {
        // destructure event
        const {
            name,
            value
        } = e.target

        // update state
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
            // genre: genre,
            // description: description,
            name,
            genre,
            description
        }

        // post liveroom
        this.postNewLiveroom(liveroom)
    }

    postNewLiveroom = async (liveroom) => {
        // destructure state
        const { liverooms } = this.state

        // post new liveroom to database
        const response = await fetch('https://vibetune-express.herokuapp.com/liverooms/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(liveroom)
        })
        
        // convert response to json
        const json = await response.json()
        
        // update state
        this.setState({
            liverooms: [...liverooms, json]
        })
    }

    updateLiveroom = async (liveroom) => {
        // destructure state
        const { liverooms } = this.state

        // destructure liveroom
        const {
            _id,
            name,
            genre,
            description
        } = liveroom

        // build updated liveroom payload
        const payload = {
            // _id: _id,
            // name: name,
            // genre: genre,
            // description: description
            _id,
            name,
            genre,
            description
        }

        // post updated liveroom to database
        const response = await fetch(`https://vibetune-express.herokuapp.com/liverooms/update/${_id}`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        
        // convert response to json
        const json = await response.json()
        console.log(json)
        
        // fetch liverooms from database
        this.getLiverooms()
    }

    componentDidMount() {
        // fetch liverooms from database
        this.getLiverooms()
    }

    render() {
        // destructure state
        const {
            name,
            genre,
            description,
            liverooms
        } = this.state

        return (
            <div className="container">
                <LiveroomList
                    deleteLiveroom={this.deleteLiveroom}
                    liverooms={liverooms}
                    updateLiveroom={this.updateLiveroom}
                />
                <div class="row">
                    <h3>Create a new liveroom!</h3>
                    <form class="col s12 white" onSubmit={this.handleSubmit}>
                        <div class="input-field col s6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="input-field col s6">
                            <input
                                type="text"
                                name="genre"
                                placeholder="Genre"
                                value={genre}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="input-field col s6">
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button class="btn blue darken-1" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Liverooms
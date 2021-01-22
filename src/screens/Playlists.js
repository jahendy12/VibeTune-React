import React, { Component } from 'react';

import PlaylistList from '../components/playlists/PlaylistList'

class Playlists extends Component {
    state = {
        name: '',
        genre: '',
        descripton: '',
        playlists: []
    }

    getPlaylists = async () => {
        // fetch request to get playlists
        const response = await fetch('https://vibetune-react.herokuapp.com/playlists')

        // convert response to json
        const json = await response.json()

        // update state
        this.setState({
            playlists: json
        })
    }

    deletePlaylist = async (id) => {
        // delete playlist from database
        const response = await fetch(`https://vibetune-react.herokuapp.com/playlists/${id}`, {
            method: 'DELETE'
        })
        
        // fetch playlists from database
        this.getPlaylists()
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

        const playlist = {
            // name: name,
            // genre: genre,
            // description: description,
            name,
            genre,
            description
        }

        // post playlist
        this.postNewPlaylist(playlist)
    }

    postNewPlaylist = async (playlist) => {
        // destructure state
        const { playlists } = this.state

        // post new playlist to database
        const response = await fetch('https://vibetune-react.herokuapp.com/playlists/add', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playlist)
        })
        
        // convert response to json
        const json = await response.json()
        
        // update state
        this.setState({
            playlists: [...playlists, json]
        })
    }

    updatePlaylist = async (playlist) => {
        // destructure state
        const { playlists } = this.state

        // destructure playlist
        const {
            _id,
            name,
            genre,
            description
        } = playlist

        // build updated playlist payload
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

        // post updated playlist to database
        const response = await fetch(`https://vibetune-react.herokuapp.com/playlists/update/${_id}`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        
        // convert response to json
        const json = await response.json()
        console.log(json)
        
        // fetch playlists from database
        this.getPlaylists()
    }

    componentDidMount() {
        // fetch playlists from database
        this.getPlaylists()
    }

    render() {
        // destructure state
        const {
            name,
            genre,
            description,
            playlists
        } = this.state

        return (
            <div className="container">
                <PlaylistList
                    deletePlaylist={this.deletePlaylist}
                    playlists={playlists}
                    updatePlaylist={this.updatePlaylist}
                />
                <div class="row">
                    <h3>Create a new playlist!</h3>
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

export default Playlists
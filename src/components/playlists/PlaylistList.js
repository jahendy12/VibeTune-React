import React, { Component } from 'react'
import PlaylistCard from './PlaylistCard'
import Playlists from '../../screens/Playlists'

class PlaylistList extends Component {
    state = {
        playlists: []
    } 

    getPlaylists = async () => {
        // fetch request to get playlists
        const response = await fetch('http://localhost:5000/playlists')
        // convert response to json
        const json = await response.json()
        // update state
        this.setState({
            playlists: json
        })
    }

    componentDidMount() {
        // fetch playlists from database
        this.getPlaylists()
    }

    render() {
        // destructure state
        const { playlists } = this.state

        return (
            <div className="container">
                <div className="row">
                    {(playlists.length > 0) && playlists.map((playlist) => {
                        return (
                            <PlaylistCard playlist={playlist}  key={playlist._id} />
                        )
                    })}
                </div>
                <div className="container">
                    <Playlists />
                </div>
            </div>
        )
    }
}

export default PlaylistList

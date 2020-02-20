import React, { Component } from 'react'

import PlaylistCard from './PlaylistCard'

function PlaylistList(props) {
    // destructure props
    const {
        deletePlaylist,
        playlists,
        updatePlaylist
    } = props

    return (
        <div className="row">
            {(playlists.length > 0) && playlists.map((playlist) => {
                return (
                    <PlaylistCard
                        deletePlaylist={deletePlaylist}
                        key={playlist._id}
                        playlist={playlist}
                        updatePlaylist={updatePlaylist}
                    />
                )
            })}
        </div>
    )
}

export default PlaylistList

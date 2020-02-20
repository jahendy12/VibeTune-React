import React from 'react'
import logo from '../../images/logos/Headphones.png'

function PlaylistCard(props) {
	// destructure props
	const {
		deletePlaylist,
		playlist,
		updatePlaylist
	} = props

	function handleDeleteClick() {
		// destrucutre playlist
		const { _id } = playlist

		deletePlaylist(_id)
	}

	function handleUpdateClick() {
		updatePlaylist(playlist)
	}

	return (
		<div className="col s12 m6">
			<div className="card">
				<div className="card-content">
					<img alt="" className="logo" src={logo} />
					<h3 className="black-text">{playlist.name}</h3>
					<p className="black-text">{playlist.genre}</p>
					<p className="black-text">{playlist.description}</p>
					<button class="btn blue darken-1" onClick={handleDeleteClick}>Delete</button>
					<button class="btn blue darken-1" onClick={handleUpdateClick}>Update</button>
				</div>
			</div>
		</div>
	)
}

export default PlaylistCard
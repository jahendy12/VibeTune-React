import React from 'react'
import logo from '../../images/logos/Headphones.png'

function PlaylistCard(props) {
	// destructure props
	const { playlist } = props

	return (
		<div className="col s12 m6">
			<div className="card">
				<div className="card-content">
					<img alt="" className="logo" src={logo} />
					<h3 className="black-text">{playlist.name}</h3>
					<p className="black-text">{playlist.genre}</p>
					<p className="black-text">{playlist.description}</p>
				</div>
			</div>
		</div>
	)
}

export default PlaylistCard
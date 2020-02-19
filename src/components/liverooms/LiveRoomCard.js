import React from 'react'
import logo from '../../images/logos/Headphones.png'

function LiveRoomCard(props) {
	// destructure props
	const { liveroom } = props

	return (
		<div className="col s12 m6">
			<div className="card">
				<div className="card-content">
					<img alt="" className="logo" src={logo} />
					<h3 className="black-text">{liveroom.name}</h3>
					<p className="black-text">{liveroom.genre}</p>
					<p className="black-text">{liveroom.description}</p>
				</div>
			</div>
		</div>
	)
}

export default LiveRoomCard
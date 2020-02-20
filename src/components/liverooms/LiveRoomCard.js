import React from 'react'
import logo from '../../images/logos/Headphones.png'

function LiveroomCard(props) {
	// destructure props
	const {
		deleteLiveroom,
		liveroom,
		updateLiveroom
	} = props

	function handleDeleteClick() {
		// destrucutre liveroom
		const { _id } = liveroom

		deleteLiveroom(_id)
	}

	function handleUpdateClick() {
		updateLiveroom(liveroom)
	}

	return (
		<div className="col s12 m6">
			<div className="card">
				<div className="card-content">
					<img alt="" className="logo" src={logo} />
					<h3 className="black-text">{liveroom.name}</h3>
					<p className="black-text">{liveroom.genre}</p>
					<p className="black-text">{liveroom.description}</p>
					<button class="btn blue darken-1" onClick={handleDeleteClick}>Delete</button>
					<button class="btn blue darken-1" onClick={handleUpdateClick}>Update</button>
				</div>
			</div>
		</div>
	)
}

export default LiveroomCard
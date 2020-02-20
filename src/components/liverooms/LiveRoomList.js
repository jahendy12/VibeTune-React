import React, { Component } from 'react'
import LiveRoomCard from './LiveRoomCard'

function LiveroomList(props) {
    // destructure props
    const {
        deleteLiveroom,
        liverooms,
        updateLiveroom
    } = props

    return (
        <div className="row">
            {(liverooms) && liverooms.map((liveroom) => {
                return (
                    <LiveRoomCard
                        deleteLiveroom={deleteLiveroom}
                        key={liveroom._id}
                        liveroom={liveroom}
                        updateLiveroom={updateLiveroom}
                    />
                )
            })}
        </div>
    )
}

export default LiveroomList
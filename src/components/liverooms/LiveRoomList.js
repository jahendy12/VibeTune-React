import React, { Component } from 'react'
import LiveRoomCard from './LiveRoomCard'
import UserRoomList from '../../screens/LiveRoomsList'

class LiveRoomList extends Component {
    state = {
        liverooms: []
    } 

    getLiverooms = async () => {
        // fetch request to get liverooms
        const response = await fetch('http://localhost:5000/liverooms')
        // convert response to json
        const json = await response.json()
        // update state
        this.setState({
            liverooms: json
        })
    }

    componentDidMount() {
        // fetch liverooms from database
        this.getLiverooms()
    }

    render() {
        // destructure state
        const { liverooms } = this.state

        return (
            <div className="container">
                <div className="row">
                    {(liverooms.length > 0) && liverooms.map((liveroom) => {
                        return (
                            <LiveRoomCard liveroom={liveroom}  key={liveroom._id} />
                        )
                    })}
                </div>
                <div className="container">
                    <UserRoomList />
                </div>
            </div>
        )
    }
}

export default LiveRoomList
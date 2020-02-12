import React from 'react'

function NavBar() {
    return (
<nav>       
    <div className="#1e88e5 blue darken-1 container">
        <div className="row">
            <div className="col s12">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">VibeTune (Logo)</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/playlistList">Playlists</a></li>
                            <li><a href="/liveroomlist">Live Rooms</a></li>
                            <li><a href="/userprofile">Profile</a></li>
                            <li><a href="/sign-in">Sign In</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</nav>     
)
}

export default NavBar
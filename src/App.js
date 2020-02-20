import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Playlists from './screens/Playlists';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Account from './screens/Account';
import NoMatch from './screens/NoMatch';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PlaylistCard from './components/playlists/PlaylistCard';
import PlaylistList from './components/playlists/PlaylistList';
import LiveRoomList from './screens/LiveRoomsList';
import LiveRoomCard from './components/liverooms/LiveRoomCard';
import UserProfile from './components/userprofile/userprofile';
import './styles/styles.css'

function App() {
  return (
    <Router>
      <div id="app-content">
        <NavBar />
        <div id="router-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/playlists" component={Playlists} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/account/:name" component={Account} />
            <Route path="/playlistlist" component={PlaylistList} />
            <Route path="/liveroomlist" component={LiveRoomList} />
            <Route path="/liveroomcard" component={LiveRoomCard} />
            <Route path="/userprofile" component={UserProfile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App

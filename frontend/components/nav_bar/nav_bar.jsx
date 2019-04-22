import React from 'react';
import { withRouter } from 'react-router-dom';



//component must be wrapped in HashRouter by wrapping connect in withRouter
//in order for this components props to have access to history

//the arguments being passed to NavBar are props of this component.

const NavBar = ({ currentUser, logout, openModal, history }) => {

    function handleLogoutClick() {
        logout();
        history.push('/')
    }

    function handleUploadClick() {
        history.push('/upload')
    }

    const loggedInBar = () => (
        <hgroup className="bar">
            <h2 className="tone-feed-header">ToneFeed</h2>
            <div className='buttons-two'>
                <button className="logout-button" onClick={handleLogoutClick}>Sign Out</ button>
                <button className="upload-button" onClick={handleUploadClick}>Upload</button>
                <ul className='ul'>
                    <li className="a">Hello, {currentUser.username}</li>
                </ul>
            </div>
        </hgroup>
    );

    return currentUser ? loggedInBar() : null;

};

export default withRouter(NavBar);
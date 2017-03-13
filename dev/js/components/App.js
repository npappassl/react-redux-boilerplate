import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import MessageTextArea from '../containers/message-text-area';

require('../../scss/style.scss');

const App = () => (
    <div id="layout">
        <div id="UserList">
            <h2>User List</h2>
            <UserList />
        </div>
        <div id="rightVerticalLayout">
            <h2>User Details</h2>
            <UserDetails />
            <MessageTextArea />
        </div>
    </div>
);

export default App;

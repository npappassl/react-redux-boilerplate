import React, {Component} from 'react';
import {connect} from 'react-redux';

class MessageTextArea extends Component {
    render() {
        return (
            <div id="messageDiv">
                <form>
                    <input id="messageTextArea"></input>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}

export default MessageTextArea;

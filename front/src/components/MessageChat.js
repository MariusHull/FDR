import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MessageChat.css';

class MessageChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    let messageBox;
    if (this.props.color===0) {
        messageBox = (
            <div>
                <div class="text-box-blue">
                    <p> {this.props.message} </p>
                </div>
            </div>
        )
    }
    else {
        messageBox = (
            <div>
                <div class="text-box-gray">
                    <p> {this.props.message} </p>
                </div>
            </div>
        )
    }
    return (
        <div class="message">
            {messageBox}
        </div>
    );
  }
}

export default MessageChat;
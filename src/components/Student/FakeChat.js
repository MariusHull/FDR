import React, { Component } from 'react';
import Message from './Chat/MessageChat';
import Loading from './Chat/Loading';
import './FakeChat.scss';

class FakeChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      componentDidMount() {
          setTimeout( this.updateScroll, 10);
      }
    
      updateScroll(){
        var element = document.getElementById("chatbox");
        element.scrollTop = element.scrollHeight;
      }

      onChange = (e) => {
        this.updateScroll()
      }
      
      render() {
        return (
          <div class="text-center">
                  <div class="chatbox" id="chatbox">
                    <Message message={"Coucou"} color={0}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={1}/>
                    <Message message={"Test"} color={0}/>
                    <Message message={"Coucou"} color={0}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={1}/>
                    <Message message={"Test"} color={1}/>
                    <Message message={"Coucou"} color={1}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={0}/>
                    <Message message={"Test"} color={1}/>
                    <Message message={"Coucou"} color={0}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={1}/>
                    <Message message={"Test"} color={0}/>
                    <Message message={"Coucou"} color={0}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={1}/>
                    <Message message={"Test"} color={1}/>
                    <Message message={"Coucou"} color={1}/>
                    <Message message={"Salut ! J'écris mon message sur deux lignes 😊"} color={0}/>
                    <Message message={"Test"} color={1}/>
                    <div class="loading">
                            <Loading />
                    </div>
                  </div>
                  <div class="response-bar">
                    <div id='choice-buttons'>
                        <button class='btn btn-outline-primary'> Une réponse 😍</button>
                    </div>
                    <div class="send-bar">
                        <input type="text" class="form-control" name="newMessage" placeholder="..." />
                        <div class="send-box">
                            <button type="submit" class="btn btn-default send">+</button>
                        </div>
                    </div>
                    </div>
                </div>
        );}
}

export default FakeChat;
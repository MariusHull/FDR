import React, { Component } from 'react';
import axios from 'axios';
import MessageChat from './MessageChat';
import './Chat.scss';
import Loading from './Loading';
import url from '../../../config'


class Chat extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      chat:[],
      chats: [],
      user:'', 
      newMessage:'',
      currentQuestion:{answers:[]}
    };
  }

  updateScroll(){
    var element = document.getElementById("chatbox");
    element.scrollTop = element.scrollHeight;
  }

  componentDidMount() {
      axios.post(url+`/api/questions/${this.props.match.params.id}`)
        .then(r => {
          this.setState({user:r.data.user, chat:this.state.chat.concat([{message:r.data.question.body, color:1,}]), currentQuestion:r.data.question});
      });
      setTimeout( this.updateScroll, 10);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmitButton = (e) => {
    let ans;
    ans=this.state.currentQuestion.answers[0];
    ans.body=this.state.newMessage;
    ans.detail=this.state.newMessage;
    this.onSubmit(ans, e);
  }

  onSubmit = (answer, e) => {
    console.log('ans', answer);
    this.setState({chat:this.state.chat.concat({message:answer.body, color:0}), newMessage:''});
    this.updateScroll();
    if (answer.reaction !== "") {
      this.setState({loading : true});
      this.updateScroll();
      setTimeout(() => {
        this.setState({loading : false});
        this.setState({chat:this.state.chat.concat({message:answer.reaction, color:1})});
        this.updateScroll();
        axios.post(url+`/api/answers/${this.state.user._id}`, {answer:answer, field:this.state.currentQuestion.field})
          .then(res => {
            axios.post(url+`/api/questions/${this.state.user._id}`)
              .then(res2 => {
                if (res2.data.isFinish){this.props.history.push(`/begin/${this.props.match.params.id}`);}
                else{
                  this.setState({loading : true});
                  this.updateScroll();
                  setTimeout(() => {
                    this.setState({loading : false});
                    this.setState({user:res2.data.user, chat:this.state.chat.concat([{message:res2.data.question.body, color:1}]), currentQuestion:res2.data.question});
                    this.updateScroll();
                  }, 1000);
                }
              });
          });
      }, 1000);
    }
    else {
        axios.post(url+`/api/answers/${this.state.user._id}`, {answer:answer, field:this.state.currentQuestion.field})
          .then(res => {
            axios.post(url+`/api/questions/${this.state.user._id}`)
              .then(res2 => {
                if (res2.data.isFinish){this.props.history.push(`/begin/${this.props.match.params.id}`);}
                else{
                  this.setState({loading : true});
                  this.updateScroll();
                  setTimeout(() => {
                    this.setState({loading : false});
                    this.setState({user:res2.data.user, chat:this.state.chat.concat([{message:res2.data.question.body, color:1}]), currentQuestion:res2.data.question});
                    this.updateScroll();
                  }, 1000);
                }
              });
          });
    }
  }



  render() {
    let userAnswer;


    if (typeof this.state.currentQuestion.answers != 'undefined' & !this.state.currentQuestion.textArea ){
      userAnswer = (
                    <div class="response-bar">
                      <div id='choice-buttons'>
                        {this.state.currentQuestion.answers.map((a) =>
                                  <button onClick={this.onSubmit.bind(this, a)} class='btn btn-outline-primary'>{a.body}</button>
                        )}
                      </div>
                    </div>
      )
    }
    else{
      userAnswer = (
                    <div class="response-bar">
                      <div class="send-bar">
                        <input type="text" class="form-control" name="newMessage" value={this.state.newMessage} onChange={this.onChange} placeholder="..." />
                        <div class="send-box">
                          <button type="submit" onClick={this.onSubmitButton.bind(this)} class="btn btn-default send">+</button>
                        </div>
                      </div>
                    </div>
      )
    }
    return (
            <div class="text-center">
              <div class="chatbox" id="chatbox">
                {this.state.chat.map((m) =>
                          <MessageChat message={m.message} color = {1-m.color} />
                )}
                <div class="loading">
                  <Loading loading={this.state.loading}/>
                </div>
              </div>
              {userAnswer}
            </div>
    );
  }
}

export default Chat;
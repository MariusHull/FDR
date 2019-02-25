import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import FooterStop from './FooterStop'
import url from '../../config'

class Begin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:'',
      color:'green',
      lastChat:'',
    };
  }

  componentDidMount() {

    axios.get(url+`/api/users/getid/${this.props.match.params.id}`)
      .then(res => {
        
        console.log('user', res.data);
        var lastChat = res.data.pseudo //numberChats[-1]
        var color = ''
        if (res.data.lastChat < 2) {
          color='green'
        } else if (res.data.lastChat >= 2 && res.data.lastChat < 4) {
          color='orange'
        } else if (res.data.lastChat >= 4) {
          color='red'
        }

        this.setState({ user:res.data, color: "card-body " + color, lastChat: lastChat});
      });

  }



  render() {
    if (this.state.user.numberChats!== undefined && this.state.user.numberChats.length!== 0 && this.state.user.numberChats!==null) {
      var chat = false
    }
    return (
      <div className="container">
        <h2>Fiche de l'élève : {this.state.user.pseudo}</h2>
        <div className="card bg-light mb-3">
            <div className="card-header">
                Informations personnelles
            </div>

            <div className={this.state.color}>
                <h5 className="card-title">Statistiques d'utilisation : </h5>
                <p className="card-text"> Dernière session de chat : {chat ? this.state.user.numberChats[this.state.user.numberChats.length-1] : "Aucune session"}  </p>
                <p className="card-text"> Nombre de sessions de chat : {chat ? this.state.user.numberChats.length : "0"} </p>
                <p className="card-text"> Nombre de réponses : {this.state.user.numberQuestion!==undefined ? this.state.user.numberQuestion : "0"} </p>
                <p className="card-text"> Date d'inscription : {this.state.user.registration} </p>
            </div>

            <div className="card-body">
                <h5 className="card-title">Sport pratiqué avant l'entrée en licence : </h5>
                <p className="card-text">{this.state.user.pseudo}</p>
            </div>



        </div>
      </div>

      

    );
  }
}



export default Begin;
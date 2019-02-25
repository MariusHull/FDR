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
        var lastChat = res.data.numberChats[-1]
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
    return (
      <div class="container">
        <h2>Fiche de l'élève : {this.state.user.details.name}</h2>
        <div class="card bg-light mb-3">
            <div class="card-header">
                Informations personnelles
            </div>

            <div class={this.state.color}>
                <h5 class="card-title">Statistiques d'utilisation : </h5>
                <p class="card-text"> Dernière session de chat : {this.state.user.name} </p>
                <p class="card-text"> Nombre de sessions de chat : {this.state.user.name} </p>
                <p class="card-text"> Date d'inscription : {this.state.user.name} </p>
            </div>

            <div class="card-body">
                <h5 class="card-title">Sport pratiqué avant l'entrée en licence : </h5>
                <p class="card-text">{this.state.user.details.sportBeforeComing}</p>
            </div>



        </div>
      </div>

      

    );
  }
}



export default Begin;
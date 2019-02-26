import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import FooterStop from './FooterStop'
import url from '../../config';
import computeStats from './ComputeStats'

class Begin extends Component {

  constructor(props) {
    super(props);
    //this.computeStats = this.computeStats.bind(this)
    this.state = {
      user:'',
      color:'green',
      lastChat:'',
      firstLog:'', 
      score: [],
    };
  }

  componentDidMount() {

    axios.get(url+`/api/users/getid/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data.registration)
        this.setState({ user:res.data, firstLog: this.toDisplay(res.data.registration) }, (state) => {
        console.log('user', this.state.user);

        var scores = computeStats(this.state.user)
        var color=''
        if (scores[1]>7) {
          color="green"
        } else if (scores[1]<4) {
          color="red"
        } else {
          color="orange"
        }

        // Coloration de l'indicateur INVESTISSEMENT
        if (this.state.user.numberChats!== undefined && this.state.user.numberChats!==null) {

          var nbChats = this.state.user.numberChats.length

          var d = new Date()
          var today = [d.getFullYear(), d.getMonth()+1, d.getDate()]
          console.log(today)

          if(nbChats!==0){
            var lastChat = this.state.user.numberChats[this.state.user.numberChats.length-1]
            console.log(lastChat)

            var lastEval = [lastChat.split("T")[0].split("-")[0], lastChat.split("T")[0].split("-")[1], lastChat.split("T")[0].split("-")[2]]
            console.log(lastEval)
/*
            if (today[1] - lastEval[1] > 1 || today[0] - lastEval[0] > 1) {
              color='red'
            } else if (today[2] - lastEval[2] > 14) {
              color='orange'
            } else if (today[2] - lastEval[2] < 14) {
              color='green'
            }
*/

          } 
          

          this.setState({ user:res.data, color: "card-body " + color, score: scores});
        }
        
       })
      });

  }



  toDisplay(dateMongo) {
    var tab = dateMongo.split("T")[0].split("-")
    return tab[2]+"/"+tab[1]+"/"+tab[0]
  }



  render() {
    if (this.state.user.numberChats!== undefined && this.state.user.numberChats.length!== 0 && this.state.user.numberChats!==null) {
      var chat = true
    }
    return (
      <div className="container">
        <h2>Fiche de l'élève : {this.state.user.pseudo}</h2>
        <div className="card bg-light mb-3">
            <div className="card-header">
                <h3> 
                  Informations personnelles
                </h3>
            </div>

            <div className={this.state.color}>
                <h5 className="card-title">Utilisation et fidélité : {this.state.score[1]}/10</h5>
                <p className="card-text"> Dernière session de chat : {chat ? this.toDisplay(this.state.user.numberChats[this.state.user.numberChats.length-1]) : "Aucune session"}  </p>
                <p className="card-text"> Nombre de sessions de chat : {chat ? this.state.user.numberChats.length : "0"} </p>
                <p className="card-text"> Nombre de réponses : {this.state.user.numberQuestion!==undefined ? this.state.user.numberQuestion : "0"} </p>
                <p className="card-text"> Date d'inscription : {this.state.firstLog} </p>
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
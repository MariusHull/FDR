import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import FooterStop from './FooterStop'
import url from '../../config'

class Begin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:''
    };
  }

  componentDidMount() {

    axios.get(url+`/api/users/getid/${this.props.match.params.id}`)
      .then(res => {
        console.log('user', res.data);
        this.setState({ user:res.data });
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
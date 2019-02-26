import React, { Component } from 'react';
import './FicheCourte.scss'

class FicheCourte extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name : 'Yves',
        score : {
            motivation : 7,
            lifestyle : 4,
            integration : 6,
            fidelity : 10,
            noOrientation : 3
        },
        color1: '',
        color2: '',
        color3: '',
        color4: '',
        color5: ''
    };
  }

  componentDidMount() {
      if (this.state.score.motivation <= 6) {
        if (this.state.score.motivation <= 3) {
            this.setState({color1 : 'red'});
        }
        else {
            this.setState({color1 : 'orange'});
        }
      };
      if (this.state.score.lifestyle <= 6) {
        if (this.state.score.lifestyle <= 3) {
            this.setState({color2 : 'red'});
        }
        else {
            this.setState({color2 : 'orange'});
        }
      };
      if (this.state.score.integration <= 6) {
        if (this.state.score.integration <= 3) {
            this.setState({color3 : 'red'});
        }
        else {
            this.setState({color3 : 'orange'});
        }
      };
      if (this.state.score.fidelity <= 6) {
        if (this.state.score.fidelity <= 3) {
            this.setState({color4 : 'red'});
        }
        else {
            this.setState({color4 : 'orange'});
        }
      };
      if (this.state.score.noOrientation <= 6) {
        if (this.state.score.noOrientation <= 3) {
            this.setState({color5 : 'red'});
        }
        else {
            this.setState({color5 : 'orange'});
        }
      };
  }




  render() {

    return (
        <div class="card">
            <div class="header">
                <div class="picture">
                </div>
                <h1> { this.state.name } </h1>
            </div>
            <div class="scores">
                <div class="other">
                    <div class="round">

                    </div>
                    <div class="round">

                    </div>
                </div>
                <div class="bars">
                <div class="progress-container">
                    <div class="score" style={ {height : this.state.score.motivation * 10 + '%', background : this.state.color1 }}></div>
                </div>
                <div class="progress-container">
                    <div class="score" style={ {height : this.state.score.lifestyle * 10 + '%', background : this.state.color2 }}></div>
                </div>
                <div class="progress-container">
                    <div class="score" style={ {height : this.state.score.integration * 10 + '%', background : this.state.color3 }}></div>
                </div>
                <div class="progress-container">
                    <div class="score" style={ {height : this.state.score.fidelity * 10 + '%', background : this.state.color4 }}></div>
                </div>
                <div class="progress-container">
                    <div class="score" style={ {height : this.state.score.noOrientation * 10 + '%', background : this.state.color5 }}></div>
                </div>
                </div>
            </div>
        </div>
    );
  }
}



export default FicheCourte;
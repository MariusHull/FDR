import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Message from './Chat/MessageChat';

class VueEtudiant extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pseudo:'',
          pseudos:[]
        };
      }
    
      componentDidMount() {
        axios.get('/api/users/')
          .then(res => {
            this.setState({ pseudo:'', pseudos: res.data });
          });
      }
    
      onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const pseudo = this.state.pseudo;
    
        if (pseudo !== "") {
          axios.post('/api/users/initget', {pseudo:pseudo})
          .then((result) => {
            this.props.history.push(`/begin/${result.data._id}`);
            console.log(this.props.history);
            console.log(result);
          });
        }
        
      }
    
      render() {
        const { pseudo, pseudos} = this.state;
        return (
          <div class="text-center">
            <div class="container">
              <div class="panel panel-default">
                <div class="panel-body">
                  <h1> Interface étudiant </h1>
                  <hr/>
                  <form onSubmit={this.onSubmit}>
                    <input type="text" class="form-control" name="pseudo" value={pseudo} onChange={this.onChange} placeholder="Pseudo" />
                    <button type="submit" class="btn btn-success">Me connecter</button>
                  </form>
                  <hr/>
                  <Message message={"Coucou"} color={0}/>
                  <Message message={"Salut !"} color={1}/>
                  <Message message={"Test"} color={0}/>
                  <hr/>
                  <h2>Pseudos</h2>
                        <ul>
                          {pseudos.map((p) =>
                            <li><Link to={`/begin/${p._id}`}>{p.pseudo}</Link></li>
                          )}
                        </ul>
                </div>
              </div>
            </div>
          </div>
        );}
}

export default VueEtudiant;
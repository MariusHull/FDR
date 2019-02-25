import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Begin from './components/Begin';
import Exit from './components/Exit';
import Accueil from './components/Acceuil';
import VueEnseignant from './components/VueEnseignant';
import VueEtudiant from './components/VueEtudiant';
import Fiche from './components/Fiche'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }


  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          
          <Route exact path='/' component={Accueil} /> 
          <Route exact path='/etudiant' component={VueEtudiant} />
          <Route exact path='/enseignant' component={VueEnseignant} />
          <Route path='/chat/:id' component={Chat} />
          <Route path='/begin/:id' render={(props) => <Begin {...props} />} />
          <Route path='/exit' component={Exit} />
          <Route path='/enseignant/fiche/:id' render={(props) => <Fiche {...props} />} />

          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
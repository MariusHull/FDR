import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Chat from './components/Student/Chat/Chat';
import Begin from './components/Student/Begin';
import Exit from './components/Student/Exit';
import Home from './components/Home';
import VueEnseignant from './components/Teacher/VueEnseignant';
import VueEtudiant from './components/Student/VueEtudiant';
import Fiche from './components/Teacher/Fiche'

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
          
          <Route exact path='/' component={Home} />
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
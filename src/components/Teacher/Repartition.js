import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
//import FooterStop from './FooterStop'
import url from '../../config'

class Repartition extends Component {

  constructor(props) {
    super(props);
    this.state = {fields : [{title: 'motivation', repartition:[]}, {title: 'lifestyle', repartition:[]}, {title: 'fidelite', repartition:[]}], stats:[]};
  }

  componentDidMount() {
      for (let i=0; i<this.state.fields.length; i++){
        let field=this.state.fields[i];
        axios.get(url+'/api/stats/global', {field:field.title})
            // eslint-disable-next-line no-loop-func
            .then(res => {
                console.log(res.data);
                let fields = this.state.fields;
                fields[i].repartition=res.data;
                this.setState({fields:fields});
            });
      }
  }

  render() {
    return (
        <div>
        {this.state.fields.map((f, i) =>
            <div key={i}>
                <h3 key={i+1}>{f.title}</h3>
                <div key={(10*i).toString()} className="progress" style={{height:'20px', width:'90%', margin:'10px auto', borderRadius:'10px'}}>
                    {f.repartition.map((r, j) => 
                        <div key={(10*i+j+1).toString()} className="progress-bar bg-danger" role="progressbar" style={{width: '20%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    )}
                </div>
            </div>
        )}
        </div>
        
    )

  }
}

export default Repartition;
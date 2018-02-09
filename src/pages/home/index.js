import React, { Component } from 'react';
import axios from 'axios';

import './home.css';

class Home extends Component {
  constructor(props) {
    console.log('****home***',props);
    super();
    this.fileOnChange=this.fileOnChange.bind(this);
  }
  fileOnChange({file}) {
    console.log(`hello ${file}`);
  }
  componentDidMount() {
    axios('http://localhost:3001/api/test').
      then(response=>console.log('response from ajax', response.data)).
      catch(error=> console.log(error));
  }
  render() {
    return (
      
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <input type="file" onChange={this.fileOnChange} />
        </p>
    );
  }
}

export default Home;

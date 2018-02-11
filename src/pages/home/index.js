import React, { Component } from 'react';
import axios, { post } from 'axios';
import config from '../../config/config'
import { FILE_UPALOAD } from '../../actions/consts';

import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this)
  }

  handleFileUpload(event) {
    console.log(`file `, event.target.files[0]);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file );
    formData.append('name', file.name );
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const url = "http://localhost:3001/api/fileUpload"
    return post(url, formData, config);
  }
  componentDidMount() {
    const fileUPloadCb = (response) => console.log('fileupload callback', response);
    this.props.ajaxActionCreator(config.fileUploadUrl, FILE_UPALOAD, fileUPloadCb);
  }
  render() {
    return (

      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
          <input type="file" onChange={this.handleFileUpload} />
      </p>
    );
  }
}

export default Home;

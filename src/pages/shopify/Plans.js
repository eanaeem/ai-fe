import React, { Component } from 'react';
import nonce from 'nonce';

import './shopify.css';

const SHOPIFY_API_KEY = "2312d2eba17dd594fb40ba8734ed10e0";
const SHOPIFY_API_SECRET = "a5f3408d00badf77a4dbd00d88d4c080";
const forwardingAddress = "http://23e9cb33.ngrok.io";
const scopes = 'read_products';

class Plans extends Component {
  constructor(props) {
    super(props);
    this.queryParams = {};
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search),
      apiKey = SHOPIFY_API_KEY,
      nonceVal = nonce();

    for (var pair of queryParams.entries()) {
      this.queryParams[pair[0]] = pair[1];
    }
    const { shop } = this.queryParams;
    if (shop) {
      console.log('queryparms', this.queryParams);
      const state = nonceVal();
      const redirectUri = forwardingAddress + '/shopify';
      const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&state=${state}&redirect_uri=${redirectUri}`;
      console.log('install url***', installUrl);
      localStorage.setItem('state', state);
      // window.location.href = installUrl;
    }
  }
  render() {
    return (

      <p className="App-intro">
        Shopify Plans page
      </p>
    );
  }
}

export default Plans;

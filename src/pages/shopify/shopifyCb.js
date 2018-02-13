import React, { Component } from 'react';

import './shopify.css';

class ShopifyCb extends Component {
  constructor(props) {
    super(props);
    this.queryParams = {};
  }

  componentDidMount() {
    // const queryParams = new URLSearchParams(this.props.location.search),
    //   apiKey = SHOPIFY_API_KEY,
    //   nonceVal = nonce();

    // for (var pair of queryParams.entries()) {
    //   this.queryParams[pair[0]] = pair[1];
    // }
   
  }
  render() {
    return (

      <p className="App-intro">
        Shopify Callback
      </p>
    );
  }
}

export default ShopifyCb;

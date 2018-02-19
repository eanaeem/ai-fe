import React, { Component } from 'react';
import nonce from 'nonce';


const SHOPIFY_API_KEY = "2312d2eba17dd594fb40ba8734ed10e0";
const SHOPIFY_API_SECRET = "a5f3408d00badf77a4dbd00d88d4c080";
const forwardingAddress = "https://23e9cb33.ngrok.io";

class Plans extends Component {
  queryParams = {}
  state = {shop:''};
  constructor(props) {
    super(props);
    console.log('props', props.location);
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search),
      apiKey = SHOPIFY_API_KEY,
      nonceVal = nonce();
  const scope        = "read_products, write_products, read_customers, write_customers, read_orders, "
      + "write_orders, read_fulfillments, write_fulfillments, read_shipping, write_shipping ";

 
    for (var pair of queryParams.entries()) {
      this.queryParams[pair[0]] = pair[1];
    }
    const { shop,hmac } = this.queryParams;
    this.setState({shop});
    if (shop) {
      console.log('queryparms', this.queryParams);
      const state = nonceVal();
      const redirectUri = "https://23e9cb33.ngrok.io/shopify/callback";
      const url = `https://${shop}/admin/oauth/authorize?client_id=${apiKey}&scope=${scope}&state=${hmac}&redirect_uri=${redirectUri}`;
      console.log('install url***', url);
      console.log('iframe', window.self !== window.top);
      localStorage.setItem('state', state);
      window.location.href = url;
      // window.top.location.href= url;
    }
  }
  render() {
    const {shop} = this.state;
    return (
      <p className="App-intro">
        Shopify Plans 
        {shop && <span> for {shop} </span>}
      </p>
    );
  }
}

export default Plans;

import React, { Component } from 'react';
import axios from 'axios';
import request from 'request-promise';

import './shopify.css';
const SHOPIFY_API_KEY = "2312d2eba17dd594fb40ba8734ed10e0";
const SHOPIFY_API_SECRET = "a5f3408d00badf77a4dbd00d88d4c080";

class ShopifyCb extends Component {
  constructor(props) {
    super(props);
    this.queryParams = {};
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(this.props.location.search);  

    for (var pair of queryParams.entries()) {
      this.queryParams[pair[0]] = pair[1];
    }
    const { shop, hmac, code, state } = this.queryParams;
    console.log('queryparms shopify/cb', this.queryParams);
    const accessTokenRequestUrl = `https://${shop}/admin/oauth/access_token`;
    const accessTokenPayload = {
      client_id: SHOPIFY_API_KEY,
      client_secret: SHOPIFY_API_SECRET,
      code,
    };
    console.log('accessTokenPayload', accessTokenPayload);
    
    // request.post(accessTokenRequestUrl, { json: accessTokenPayload })
    // .then((accessTokenResponse) => {
    //   const accessToken = accessTokenResponse.access_token;
    //   console.log('accessToken response***', accessToken);
      
    //   // res.status(200).send("Got an access token, let's do something with it");
    //   // TODO
    //   // Use access token to make API call to 'shop' endpoint
    // })
    // .catch((error) => {
    //     console.log('error** ', error);
        
    // });
    // setTimeout(()=>window.top.location.href=`https://shami-ai.myshopify.com/admin/apps`, 1000)
   
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

import React from 'react'
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../../pages/home/HomeContainer'
import Plans from '../../pages/shopify/Plans';
import ShopifyCb from '../../pages/shopify/shopifyCb';


export const Routes = () => {
	return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/shopify" component={Plans} />
				<Route exact path="/shopify/callback" component={ShopifyCb} />
			</Switch>
	)
}

export default Routes
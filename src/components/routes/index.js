import React from 'react'
import { Switch, Route, Router } from 'react-router-dom';
import Home from '../../pages/home/HomeContainer'


export const Routes = () => {
	return (
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
	)
}

export default Routes
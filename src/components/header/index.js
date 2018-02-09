import React from 'react'
import logo from '../../resources/img/logo.svg';

export const Header = (props) => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React app pp</h1>
			<p> hi thi is first reactive </p>
		</header>
	)
}

export default Header
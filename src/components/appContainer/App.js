import React from 'react'
import Header from '../header/index'
import {Footer} from '../footer/index'
import Routes from '../routes/index'

const App = (props) => {
	return (
		<div className="App">
			<Header />
			<Routes />
			<Footer />
		</div>
	)
}

export default App
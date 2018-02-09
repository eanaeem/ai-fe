import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';

import AppContainer from './components/appContainer'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import initialState from './reducers/initialState'

const store = configureStore(initialState),
		history = createHistory();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history} >
			<AppContainer />
		</ConnectedRouter>	
	</Provider>,
	document.getElementById('root')
);		

registerServiceWorker();

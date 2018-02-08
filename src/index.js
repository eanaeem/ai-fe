import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/dev';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore(),
		history = createHistory();

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>,
	document.getElementById('root')
);		

registerServiceWorker();

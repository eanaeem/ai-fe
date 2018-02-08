import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import {rootReducer} from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'thunk';
// import DevTools from './devTools';
const history = createHistory();

const enchancer = compose(
	applyMiddleware(
		thunk,
		reduxImmutableStateInvariant(),
		routerMiddleware(history)
	),
	// DevTools.instrument();
);

const configureStore=(initialState) =>{
	const store = createStore(rootReducer,initialState);
	console.log('hello store***');
	
	//Hot reload reducers

	if(module.hot){
		module.hot.accept('../reducers'), () =>
		store.replaceReducer(
			require('../reducers')
		)
	}
	return store;
}

export default configureStore;

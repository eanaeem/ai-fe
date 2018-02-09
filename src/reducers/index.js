import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initialState from './initialState'


export const loading = (state = null, action) => {
	const {loading} = action;
	return loading? loading: false;
}

export const fileData =(state=initialState.title, action) => {
	
	return state;
}

export const rootReducer = combineReducers({
	router: routerReducer,
	loading,
	fileData
});


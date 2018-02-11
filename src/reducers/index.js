import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initialState from './initialState'
import { FILE_UPALOAD } from '../actions/consts';



export const loading = (state = null, action) => {
	const {loading} = action;
	return loading? loading: false;
}

export const fileData =(state=initialState, action) => {
	if(action.type===FILE_UPALOAD){
		console.log('file upload', action.data);
	}
	return state;
}

export const rootReducer = combineReducers({
	router: routerReducer,
	loading,
	fileData
});


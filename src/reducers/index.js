import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const loading = (state = null, action) => {
	const {loading} = action;
	return loading? loading: false;
}


export const rootReducer = combineReducers({
	loading,
});
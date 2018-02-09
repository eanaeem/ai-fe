import axios from 'axios';


export const genericActionCreator = (type, ...argsNames) => {
	return (...args) => {
		let action = { type };
		args.forEach((arg, index) => {
			action[args[index]] = args[index];
		});

		return action;
	}
}

export const ajaxActionCreator = (url, actionType, callback, method = 'GET', payload = null, showLoader = false) => {
	return dispatch => {
		if (showLoader) dispatch({ type: 'ACTION_BEGIN', isLoading: true });
		const config = axiosConfig(url, method, payload);
		return axios(config)
			.then(response => {
				if (showLoader) dispatch({ type: 'ACTION_BEGIN', isLoading: false });
				dispatch({ type: actionType, data: response.data, callback })
			})
			.catch(error => {
				handleAxiosError(error, dispatch);
			});
	}
};

export const axiosConfig = (url, method = 'GET', payload = null)=>{
	const baseURL = "http://localhost:3001/api",
			requestConfig = {
				baseURL,
				url,
				method,
				// withCredentials:true
			};
	if (payload) requestConfig.data =payload;
	return requestConfig		
};

export const handleAxiosError = (error, dispatch) => {
	if (!error) return;
	let errorMsg = '';
	if (error.response) errorMsg = error.response.statusText;
	else if (error.message) errorMsg = error.message;
	else errorMsg = error;
	if (dispatch) {
		dispatch({ type: 'ACTION_BEGIN', isLoading: false });
		dispatch({ type: 'ACTION_ERROR', error: errorMsg });
	}
	return errorMsg;	
};



import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App'

const mapStateToProps = (state, ownProps) => {
	return {
		loading: state.loading
	}
}

// export default connect(mapStateToProps)(App);
export default withRouter(connect(mapStateToProps)(App));
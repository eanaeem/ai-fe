import { connect } from 'react-redux'
import Home from './index'
import { ajaxActionCreator } from '../../actions'

const mapStateToProps = (state, ownProps) => {
	console.log('state***',state);
	return {
		title: state.fileData,
		loading: state.loading
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		ajaxActionCreator: (...args) => {
			dispatch(ajaxActionCreator(...args))
		}
	}
}

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
// 	return {
// 		mergeProp: mergePropVal
// 	}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
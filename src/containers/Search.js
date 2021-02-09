import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import SearchComponent from '../components/SearchComponent'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSearch: (s) => dispatch(setVisibilityFilter(s))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)

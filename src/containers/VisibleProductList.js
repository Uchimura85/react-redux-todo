import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import ProductList from '../components/ProductList'


const getVisibleTodos = (todos, filter) => {
  switch (filter.length) {
    case 0:
      return todos
    default:
      return todos.filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(deleteTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)

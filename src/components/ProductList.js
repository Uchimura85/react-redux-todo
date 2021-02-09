import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'


const ProductList = ({ todos, removeProduct }) => (
  <>
    {todos.map(product =>
      <Product
        key={product.id}
        {...product}
        onDelete={() => removeProduct(product.id)}
      />
    )}
    {todos.length == 0 && <div className="card p-4 mt-3">No Product</div>}
  </>
)

ProductList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    
  }).isRequired).isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default ProductList

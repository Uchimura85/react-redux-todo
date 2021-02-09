import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onDelete, name, image, price }) => (
  <div className="card mt-1">
    <div

      className="d-flex flex-row justify-content-between pr-2"
    >
      <div className="d-flex">
        <img className="product-image" src={image} onError={(e) => { e.target.onerror = null; e.target.src = "default.png" }} />
        <div className="ml-3">{name}</div>
      </div>
      <div className="d-flex flex-column justify-content-between align-content-end">
        <h1 className="text-right">{price} $</h1>
        <div className="d-flex pb-3">
          <button className="btn btn-danger mr-2" onClick={onDelete}>Delete</button>
          <button className="btn btn-secondary">Edit</button>
        </div>
      </div>
    </div>
  </div>
)

Todo.propTypes = {
  onDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
}

export default Todo

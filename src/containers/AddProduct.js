import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddProduct = ({ dispatch }) => {
  let name
  let image;
  let price

  return (
    <div className="card p-3">
      <form onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim()) {
          return
        }
        dispatch(addTodo({ name: name.value, price: price.value || 0, image: image.value }))
        name.value = ''
        image.value = ''
        price.value = ''
      }}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Product Name</label>
          <div className="col-sm-10">
            <input ref={node => name = node} id="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Product Price</label>
          <div className="col-sm-10">
            <input ref={node => price = node} id="name" className="form-control" type="number" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Product Image Url</label>
          <div className="col-sm-10">
            <input ref={node => image = node} id="name" className="form-control" />
          </div>
        </div>

        <div className='text-right'>
          <button type="submit" className="btn btn-success">
            Add Product
        </button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddProduct)

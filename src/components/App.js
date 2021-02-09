import React from 'react'
import Header from './Header'
import AddProduct from '../containers/AddProduct'
import VisibleProductList from '../containers/VisibleProductList'

const App = () => (
  <div className="container pt-5">
    <div className="mb-5">
      <AddProduct />
    </div>

    <Header />
    <VisibleProductList />
  </div>
)

export default App

var defaultProductList = [
  { id: 0, name: 'Product 1', price: 300, image: 'default.png' },
  { id: 1, name: 'Product 2', price: 300, image: 'default.png' },
  { id: 2, name: 'Product 3', price: 300, image: 'default.png' },
  { id: 3, name: 'Product 4', price: 300, image: 'default.png' },
  { id: 4, name: 'Product 5', price: 300, image: 'default.png' },
  { id: 5, name: 'Product 6', price: 300, image: 'default.png' },
  { id: 6, name: 'Product 7', price: 300, image: 'default.png' },
  { id: 7, name: 'Product 7', price: 300, image: 'default.png' },
  { id: 8, name: 'Product 7', price: 300, image: 'default.png' },
  { id: 9, name: 'Product 7', price: 300, image: 'default.png' },

]
const todos = (state = defaultProductList, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          image: action.image,
          price: action.price,
        }
      ]
    case 'DELETE_TODO':
      return state.filter(item => item.id != action.id)

    default:
      return state
  }
}

export default todos

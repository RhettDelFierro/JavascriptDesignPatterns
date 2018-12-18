const ShoppingCart = require('./cart')
const Repo = require('./repository')

const cart = new ShoppingCart('test')
Repo.saveCart(cart)
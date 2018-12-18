const ShoppingCart = require('./cart')
const PgAdapter = require('./bridge')
const SalesRepository = require('./repository')

const repo = new SalesRepository(PgAdapter)
//get cart by key?
repo.fetchCarts('tests')
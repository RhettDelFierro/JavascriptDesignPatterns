const ShoppingCart = require('./cart')
const PgAdapter = require('./adapter').pg
const RedisAdapter = require('./adapter').redis

// dependency injection
const repo = new SalesRepository(new PgAdapter())
const cart = new ShoppingCart('test')
repo.saveCart(cart)
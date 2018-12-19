//Observer: event-based programming
const util = require('util')
const emitter = require('events').EventEmitter

class ShoppingCart{
    constructor(key){
        this.key = key
        this.items = []
        this.createdAt = new Date()
    }
    addItem(item){
        this.items.push(item)
    }
}
//wire the ShoppingCart for events
util.inherits(ShoppingCart, emitter)
const cart = new ShoppingCart('test')
cart.on('item-added', cart => { console.log(cart) })
cart.addItem({type: 'boots'})
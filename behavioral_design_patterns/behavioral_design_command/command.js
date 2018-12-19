//Command: formalize a request from one API to another
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
const assert = require('assert')

class SaveCartCommand{
    constructor(cart){
        assert(cart, 'A cart is required')
        //prepare the command
        this.sql = 'insert into shopping_carts(key, body) values($1, $2);'
        this.params = [cart.key, JSON.stringify(cart)]
    }
    execute(){
        //use SQL and params to send to the DB
        console.log(this.sql)
        console.log(this.params)
        console.log('Saved!')
    }
}
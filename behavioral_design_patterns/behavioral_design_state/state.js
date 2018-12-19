//State: formalizing object status into a class
class ShoppingCart{
    constructor(key){
        this.key = key
        this.state = new NewCartStatus(this)
        this.items = []
        this.errors = []
        //...
    }
    addItem(item){
        this.state.addItem(item)
    }
    removeItem(item){
        this.state.removeItem(item)
    }
    setCheckOut(){
        this.status = 'checkedOut'
    }
}

class NewCartStatus{
    //cart is new, can do anything to it!
    constructor(cart){
        this.cart = cart
    }
    addItem(item){
        this.cart.items.push(item)
    }
    removeItem(item){
        this.items.splice(this.items.indexOf(item,1))
    }
}
const cart = new ShoppingCart('test')
cart.addItem({type: 'socks'})
console.log(cart)
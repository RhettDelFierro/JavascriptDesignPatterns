//our builder pattern can handle complex object instantiation for us nicely, however setting all of those individual "set" methods can be a little bit of a pain.
    //we can alleviate that using method chaining - just return 'this' from EACH METHOD, and that will allow us to chain on individual methods and can make creation of a complex object much simpler.
//Method Chaining: also known as "fluent interface"
//it can make you code a bit more readable
class ShoppingCart {}
class ShoppingCartBuilder {
    constructor() {

    }
    setCreationDate(date) {
        this.cart.createdAt = date
        return this
    }
    setItems(items) {
        this.cart.items = items
        return this
    }
    build() {
        return this.cart
    }
}
const cart = new ShoppingCartBuilder()
                 .setCreationDate(new Date())
                 .setItems([])
                 .build()
console.log(cart)
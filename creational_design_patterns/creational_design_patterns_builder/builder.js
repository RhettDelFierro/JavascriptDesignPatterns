// you can only go so far with a ShoppingCart before you need some help.
//Builder: a more formalized way of creating an object. 
    //You go through and declare, in a class, everything that it goes into creating an instance of the thing you're trying to create.
    //build() actually constructs the object for us.
//You can use it for more generalized things that require some logic in order to create them, such as strings.
    //Example: a StringBuilder will help you build a string accurately and appropriately so you don't destroy 
    //yourself in a loop by concatenating all the items together in a string.
class ShoppingCart{}
//separate class to build a ShoppingCart for us:
class ShoppingCartBuilder{
    constructor(){
        this.cart = new ShoppingCart()
    }
    setCreationDate(date){
        this.cart.createdAt = date
    }
    setItems(items){
        this.cart.items = items
    }
    build(){
        return this.cart
    }
}
//instantiate builder
const builder = new ShoppingCartBuilder()
//set values on the builder itself:
builder.setCreationDate(new Date())
builder.setItems([])
//construct the object by calling .build()
const cart = builder.build()
console.log(cart)
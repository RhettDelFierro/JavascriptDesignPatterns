//Factory: a formalized way to construct an object
//our constructor pattern may work, but if things get a little complex, we might want to be more clear and declarative.
//we can then create METHODS that constructs objects for us.
    //then now we can be explicit with the defaults we're creating.
    //you can define as many methods as you need (although you probably won't need too many).
class ShoppingCart{}
ShoppingCart.fromDefaults = () => {
    const cart = new ShoppingCart()
    cart.createdAt = new Date()
    cart.items = []
    return cart
}
ShoppingCart.withItems = (items = []) => {
    const cart = new ShoppingCart()
    car.createdAt = new Date()
    cart.items = items
    return cart
}
console.log(ShoppingCart.withItems[{sku: "Socks"}])
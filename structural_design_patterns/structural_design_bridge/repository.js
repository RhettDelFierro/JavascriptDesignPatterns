class SalesRepository {
    constructor(adapter) {
        this.db = adapter
    }
    saveCart(cart) {
        this.db.save(cart)
        console.log(`Cart ${cart.key} saved to Postgres ${this.db.name}`)
    }
    getCart(key){
        return this.db.cart.get(key)
    }
    fetchCarts(){
        return this.db.cart.fetch()
    }
}

module.exports = SalesRepository
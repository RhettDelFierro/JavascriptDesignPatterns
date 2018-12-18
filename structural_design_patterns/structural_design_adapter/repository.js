class SalesRepository {
    constructor(adapter) {
        this.db = adapter
    }
    saveCart(cart) {
        //DB INTERACTION...
        this.db.save(cart)
        console.log(`Cart ${cart.key} saved to Postgres ${this.db.name}`)
    }
}

module.exports = {
    saveCart: cart => {
        //db interaction...
        console.log(`Cart ${cart.key} saved to Postgres`)
    }
}
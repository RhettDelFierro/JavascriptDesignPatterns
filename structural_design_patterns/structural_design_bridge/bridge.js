//Bridge: abstracting the interface
//one level of abstraction above the adapter pattern.
//use the bridge pattern when your abstraction gets complicated enough that you need to split things out.
const CartRetrieval = db => {
    return {
        get: id => console.log(`Getting from ${db.name}`),
        fetch: id => console.log(`Fetching from ${db.name}`),
    }
}
class PgAdapter {
    constructor(){
        this.name = `Postgres Adapter`
        this.cart = CartRetrieval(this)
    }
    save(item){
        console.log(`Saving saving to PG`)
    }
}

module.exports = new PgAdapter()
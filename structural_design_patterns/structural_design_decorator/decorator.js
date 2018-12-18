//the decorator pattern adds behavior to an object at runtime.
//you can think of it as dynamic composition.
class PgAdapter {
    constructor(connectionString){
        this.pool = connectionString
        this.name = `Postgres Adapter`
    }
    save(item){
        console.log(`Saving saving to PG`)
    }
}

//connect things:
const poolable = require('./poolable')
const adapter = poolable(new PgAdapter('test'), 10)
//>> we decorated our adapter with a connection pool
console.log(adapter)
// a facade hides implementation detail so clients (the calling code) don't have to think about it.
//we could us ea facade for our adapter making things a little bit easier on calling code.

class PgAdapter {
    constructor(){
        this.name = `Postgres Adapter`
    }
    save(item){
        console.log(`Saving saving to PG`)
    }
}

class RedisAdapter {
    constructor(){
        this.name = `Redis Adapter`
    }
    save(item){
        console.log(`Saving to Redis`)
    }
}
const AdapterFacade = connectionString => {
    if (connectionString.startsWith("postgres")) return new PgAdapter(connectionString)
    else if (connectionString.startsWith('redis')) return new RedisAdapter(connectionString)
    else throw new Exception(`That connection isn't supported`)
}

const adapter = AdapterFacade('postres://localhost/bigmachine')
console.log(adapter)
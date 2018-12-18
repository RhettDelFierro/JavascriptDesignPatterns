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

//as of right now, our client has to decide whether it's going to use the postgres adapter or the redis adapter.
//but we should be able to determine that based on the connectionString we're given.
// ^^ see facade.js
exports.pg = PgAdapter
exports.redis = RedisAdapter
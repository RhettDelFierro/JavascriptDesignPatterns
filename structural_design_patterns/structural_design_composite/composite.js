//Composite Pattern: we have a Connection and a ConnectionPool that work together to do a SINGLE THING
//child
class Connection {
    constructor(connectionString){
        this.connectionString = connectionString
        this.close()
    }
    open(){
        this.checkedOut = true
        this.status = 'open'
    }
    close(){
        this.checkedOut = false
        this.status = 'closed'
    }
}
//parent
class ConnectionPool {
    constructor(connectionString, poolSize = 10){
        this.pool = []
        for (var i = 0; i < 10; i++){
            const conn = new Connection(connectionString)
            this.pool.push(conn)
        }
    }
    checkOut(){
        const found = this.pool.find(c => c.checkedOut === false)
        if (found) {
            found.open()
            return found
        } else {
            throw new Exception('No available connections.')
        }
    }
    checkIn(conn){
        conn.close()
    }
    drain(){
        for (var conn of this.pool) {
            conn.close()
        }
    }
}

class PgAdapter {
    constructor(connectionString){
        this.pool = new ConnectionPool(connectionString, 10)
        this.name = `Postgres Adapter`
    }
    save(item){
        console.log(`Saving saving to PG`)
    }
}

const adapter = new PgAdapter('test')
console.log(adapter.pool)
const conn = adapter.pool.checkOut()
console.log(conn)
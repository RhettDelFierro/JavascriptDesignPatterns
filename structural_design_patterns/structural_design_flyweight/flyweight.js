//sometimes if you have larger systems it helps to have a series of small, immutable objects that you can use for working with bigger objects.
//going to use this pattern for data access here.
//the goal of the flyweight pattern = to hold lookup information that you need to access QUICKLY, something a little more than a configuration file might hold.

//part 1: create a class that is IMMUTABLE. We need immutable objects for this pattern.
class Table{
    constructor(args){
        return Object.freeze(args) //creates an immutable object that does not change.
    }
}
//part 2: We need a factory. The factory will create those immutable objects and then dole them out as needed to the code that needs them.
//perhaps you need meta information about tables, a flyweight pattern is useful. It's fast and we can access it and execute our query in a quick manner.
const TableFactory = function(){
    const factory = {}
    // create our table with flyweight tables
    // by either a db call, or do it by hand...
    factory.table = [
        new Table({name: 'customers', primaryKey: 'id'}),
        new Table({name: 'orders', primaryKey: 'id'}),
        new Table({name: 'order_items', primaryKey: 'id'})
    ]

    factory.getTable = name => factory.tables.find(t => t.name === name)

    return factory
}();

class PgAdapter {
    constructor(connectionString){
        this.connectionString = connectionString
        this.name = `Postgres Adapter`
        //whenever we run a query with our adapter we need to know some information about the table (primary key, table name, schema, etc.)
        //we can do this ^^ at runtime or when our adapter loads
        this.tables = TableFactory
    }
    //...
}

const adapter = new PgAdapter('test')
console.log(adapter)

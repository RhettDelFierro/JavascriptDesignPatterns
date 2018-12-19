//Singleton: returns only a single instance of an object
//is almost always a bad idea - there is probably something you're not thinking about that will destroy your singleton
    //example: try using const OtherCart = require('./Cart') instead.
const ShoppingCart = require('./cart')
const OtherCart = require('./cart')
//const OtherCart = require('./Cart')

ShoppingCart.items.push({sku: 'Socks'})
OtherCart.items.push({sku: 'More Socks'})
console.log(ShoppingCart.items) // this is a cart with TWO items because it's supposed to be the same array in that module because it's a singleton.


/*
    The reason whhy singletons SUCK:
    You're talking about having a SINGLINE INSTANCE and ONLY a single instance of a given object.
    and you have to MAKE SURE it STAYS a single instance across threads and processes

    Side Note: every module in NodeJS is a singleton.
        When Node goes to pull a module off of disk it will:
            -Read in a file and then cache it
        Then every 'require' statement after that will use the CACHED instance

    Node caches by module name and are case sensitive.
    OSX and Windows file systems are not. Node will think ./cart and ./Cart are two separate files, thus two different modules.
*/
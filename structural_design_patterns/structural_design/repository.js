module.exports = {
    saveCart: cart => {
        //db interaction...
        console.log(`Cart ${cart.key} saved to Postgres`)
    }
}
//very brittle
//depends on a SINGLE db always being used.
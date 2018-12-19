//Observer: event-based programming
class ShoppingCart{
    constructor(key){
        this.key = key
        this.items = []
        this.createdAt = new Date()
    }
    additem(item){
        this.items.push(item)
    }
}
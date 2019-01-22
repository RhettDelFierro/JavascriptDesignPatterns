function fib(n) {
    if (n < 2) return n;
    let n1 = 1
    let n2 = 0
    for (let i = 2; i < n; i++) {
        const n0 = n1 + n2;
        n2 = n1;
        n1 = n0;
    }
    return n1 + n2;
}

/**
 * ! Data structures.
 * * Ways of organizing information with optimal runtime complexity for adding, editing, or removing records.
 * ? Javascript natively implements several data structures. You will be asked about 'inferior' data structures.
 * ? 
 * TODO ...
 * @param
 */

/** 
 * ? The queue 16:50
 * * Very much like waiting in line to buy tickets from a ticketing counter. First in first out.
 * ! Enqueue = the process of adding a record into a queue. 
 * @param (array equivalent): array.unshift()
 * ! Dequeue = the process of removing a record from a queue. 
 * @param (array equivalent): array.pop()
 * const q = new Queue()
 * q.add(1)
 * q.remove() // returns 1
 * */

class Queue {
    constructor() {
        this.data = []
    }

    add(record) {
        this.data.unshift(record)
    }
    remove() {
        this.data.pop()
    }
    peek() {
        return this.data[this.data.length - 1]
    }
}

/**
 * Underwater Queue Weaving 10:10
 * ? Implement a 'peek' method in this Queue class. Peek should
 * ? return the last element (the next one to be returned) from the
 * ? queue without removing it.
 * ! Make sure you create the third queue inside the function itself.
 */

function weaveMy(sourceOne, sourceTwo) {
    const queueThree = new Queue()
    do {
        queueThree.add(sourceOne.remove())
        if (!!sourceTwo.peek()) continue
        queueThree.add(sourceTwo.remove())
    }
    while (!!sourceOne.peek());
}

function weave(sourceOne, sourceTwo) {
    const queueThree = new Queue()

    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) queueThree.add(sourceOne.remove())
        if (sourceTwo.peek()) queueThree.add(sourceTwo.remove())
    }

    return queueThree
}











/**
 * ? Stack em up with stacks 8:38
 * * First in, last out. The last record in is the first record out.
 * ! Pushing = adding a record to a stack
 * ! Popping = removing a record from a stack
 * */

class Stack {
    contructor() {
        this.data = []
    }
    //pushes all data over one
    push(record) {
        this.data.push(record)
    }

    //removes the first element
    pop() {
        this.data.pop()
    }

    peek() {
        return this.data[this.data.length - 1]
    }
}


/**
 * two become one 20:49
 * ? Implement a queue data structure using two stacks.
 * ? Do not create an array inside of the Queue class
 * TODO: Stack + Stack = Queue
 */

class QueueFromStacks {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
}




/**
 * ? Linked lists 2:25:01
 * * An ordered collection of data.
 * * The collection contains a number of different NODES, each contain some data and a reference to the next NODE.
 * * This order is always maintained, it will not suddenly change, unless we specifically change it.
 * ! Head Node = the very first NODE
 * ! Tail Node = the very last NODE, which does not have a reference to any other NODE
 * 
 * const nodeOne = {data: '123'}
 * const nodeTwo = {data: '456'}
 * nodeOne.next = nodeTwo
 * ! Note nodeTwo has no 'next' property, so this is the TAIL node.
 * !Also note how there is NO special code to form a linked list, THIS IS IT!
 * * As long as you have separate pieces of data and you form some type of connection between them, you have a linked list.
 * */

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(data) {
        // if (!this.head) this.head = new Node(data)
        // else this.head = new Node(data, this.head)

        //const node = new Node(data, this.head)
        //this.head = node

        this.head = new Node(data, this.head)
    }

    size() {
        let counter = 0
        let node = this.head
        while (node) {
            counter++
            node = node.next
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) return null
        let node = this.head
        while (node) {
            if (!node.next) return node
            node = node.next
        }
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) return
        this.head = this.head.next
    }

    // removeLast() {
    //     if (!this.head) return
    //     let currentNode = this.head
    //     let previousNode = null
    //     while (currentNode) {
    //         if (currentNode.next === null) {
    //             //then this will be the new last element, and we have to remove it and have the previous node point to null
    //             this.head = previousNode
    //             return
    //         }
    //         previousNode = currentNode
    //         currentNode = currentNode.next
    //     }
    // }

    removeLast() {
        if (!this.head) return
        if (!this.head.next) {
            this.head = null //or this.removeFirst()
            return
        }

        let previousNode = this.head
        let currentNode = this.head.next
        while (currentNode.next) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = null
    }

    insertLast(data) {
        const lastNode = this.getLast()
        if (lastNode) lastNode.next = new Node(data)
        else this.insertFirst(data)

    }

    // getAt(index) {
    //     if (index === 0) return this.getFirst()

    //     let counter = 0
    //     let node = this.head
    //     while (node && (counter < index)) {
    //         counter++
    //         node = node.next
    //     }

    //     if (counter === index) return node
    // }

    getAt(index) {
        if (index === 0) return this.getFirst()

        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) return node
            counter++
            node = node.next
        }

        return null
    }

    // removeAt(index) {
    //     const nodeAfter = this.getAt(index + 1)
    //     const nodeBefore = this.getAt(index - 1)
    //     nodeBefore.next = nodeAfter
    // }

    // removeAt(index) {
    //     if (index === 0) {
    //         this.head = null
    //         return
    //     }
    //     if (!this.head) return
    //     if (!this.head.next) {
    //         this.head = null //or this.removeFirst()
    //         return
    //     }

    //     let counter = 0
    //     let previousNode = this.head
    //     let currentNode = this.head.next
    //     while (currentNode.next) {
    //         if (counter === index) {
    //             previousNode.next = currentNode.next
    //             return
    //         }
    //         previousNode = currentNode
    //         currentNode = currentNode.next
    //     }
    // }
    
    // removeAt(index) {
    //     const nodeBefore = this.getAt(index - 1)
    //     const nodeToRemove = nodeBefore.next
    //     const nextNode = nodeToRemove.next
    //     nodeBefore.next = nextNode
    // }
    
    removeAt(index) {
        if (!this.head) return
        if (index === 0) this.head = this.head.next
        
        const nodeBefore = this.getAt(index - 1)
        if (!nodeBefore) return
        if (!nodeBefore.next) return
        nodeBefore.next = nodeBefore.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.insertFirst(data)
            return
        }

        if (index === 0) {
            this.insertFirst(data)
            return
        }

        const nodeBefore = this.getAt(index - 1)
        if (!nodeBefore) return
        
        const nodeToBeInserted = new Node(data)
        // nodeToBeInserted will be the last node
        if (!nodeBefore.next) {
            nodeBefore.next = nodeToBeInserted
            return
        }

        // nodeToBeInserted will be in the middle of two other nodes:
        if (nodeBefore.next.next) {
            nodeBefore.next = nodeToBeInserted
            nodeToBeInstered.next = nodeBefore.next.next
        }
    }

    //Code reuse

    forEach(f){
        let node = this.head
        while (node) {
            f(node)
            node = node.next
        }
    }
}

// 
// find the midpoint 13:33
// circular lists 11:40
// step back from the tail 8:50
// building a tree 46:30
// tree with level width 19:10
// search trees 22:14
// events 14:26
// bubble sort 16:51
// selection sort 09:36
// merge sort 29:45
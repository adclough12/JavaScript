class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    // Add Front
    addFront(val) {
        let new_node = new Node(val)
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    // Remove Front
    removeFront() {
        if(!this.head) {
            return null;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this;
    }
    // Front
    front() {
        if(this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }
    display() {
        let runner = this.head;
        let value = ""
        while(runner !== null) {
            value +=  runner.data + ",";
            runner = runner.next;
        }
        return value
    }
}
var SLL1 = new SLL();

SLL1.addFront(25)
SLL1.addFront(2)
SLL1.addFront(88)

// console.log(SLL1)
// console.log(SLL1.removeFront())
// console.log(SLL1.front())

SLL1.addFront(6)

console.log(SLL1.display())

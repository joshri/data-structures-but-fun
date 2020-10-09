class Node {
	constructor(key, value) {
		// should have a property called "data" that stores key and value in an array: [key, value]
		// should have a reference to the next node called "next", initialized to null
		this.data = [key, value];
		this.next = null;
	}
	get key() {
		// return the actual key from the data property
		return this.data[0];
	}
	get value() {
		// return the actual value from the data property
		return this.data[1];
	}
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
	constructor() {
		// initialize a "head" property to null
		this.head = null;
	}
	add(key, value) {
		// create a new Node with the given data as its data property
		let newNode = new Node(key, value);
		// if this list's head is null make that node the head,
		if (!this.head) {
			this.head = newNode;
			return newNode;
		}
		// otherwise add it to end of the list
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
		return newNode;
	}

	delete(key) {
		// search the list for a node whose data has a key that matches the key parameter
		let current = this.head;
		let next = this.head.next;
		if (!next) {
			this.head = null;
			return current;
		}
		while (next) {
			// remove it from the list and return it
			if (next.data[0] === key) {
				current.next = next.next;
				return next;
			}
			current = next;
			next = next.next;
		}
		// if no such node exists, return false
		return false;
	}

	search(key) {
		// searches the list for a given key
		// if it is found, return it
		let current = this.head;
		while (current) {
			if (current.data[0] === key) {
				return current;
			}
			current = current.next;
		}
		// if not, return false
		return false;
	}
}

class HashTable {
	constructor(size) {
		// initialize table size - prime number size is recommended to avoid clustering
		this.tableSize = size;
		// intialize the table to have "size" number of elements, set to null
		this.table = [];
		// the table will be an array named "table"
		while (size > 0) {
			this.table.push(null);
			size--;
		}
	}

	hash(key) {
		// calculate and return an integer value based key, like in the lesson
		// remember, if you are using modulus, it is recommended to use a prime number to avoid clustering
		let hash = null;
		for (let i = 0; i < key.length; i++) {
			let chr = key.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	}

	insert(key, value) {
		// hash the key to get an integer index
		let index = this.hash(key);
		// if there's no linked list at that index in the table
		if (!this.table[index]) {
			// create one and add it
			// and insert this key value pair into the new Linked list
			let newList = new LinkedList();
			newList.add(key, value);
			return newList.head;
		}
		// if there's a linked list at that index
		// if a node already exists with the key, update it the data in that node to store the new value
		let node = this.table[index].search(key);
		if (node) {
			node.data = [key, value];
			return node;
		}
		// otherwise
		// add a new node with the given value to the end of the linked list
		return this.table[index].add(key, value);
		// for the convenience of the user, you might wish to return the node, or you can just return true
	}

	delete(key) {
		// lookup the key (i.e. hash it to get an index)
		let index = this.hash(key);
		// if the key is, in fact, in the linked list, delete that Node and return it
		return this.table[index].delete(key);
		// else, return false
	}

	search(key) {
		// hash key to get index
		let index = this.hash(key);
		// search the linked list at the index
		return this.table[index].search(key);
		// if the key is found, return the Node
		// if not, return -1
	}
}

export { Node, LinkedList, HashTable };

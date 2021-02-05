export class Node {
	constructor(data) {
		// a Node starts with a given data property
		this.data = data;
		// a Node also has a .next property initialized as null
		this.next = null;
	}
}

export class LinkedList {
	constructor() {
		// a Linked List starts with a "head" property intialized as null
		this.head = null;
	}
	appendNode(data) {
		// creates a new node with the given data and adds it to back of the list
		let newNode = new Node(data);
		let current = this.head;
		if (this.head === null) {
			this.head = newNode;
			return;
		}
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
	}

	prependNode(data) {
		// creates a new node with the given data and adds it to the front of the list
		let newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	pop() {
		// removes the last node from the list and returns it
		console.log('starting pop');
		if (this.head === null) {
			return null;
		}

		let current = this.head;
		let next = this.head.next;
		if (!next) {
			this.head = null;
			return current;
		}
		while (next.next) {
			current = next;
			next = current.next;
		}
		current.next = null;
		return next;
	}

	removeFromFront() {
		// remove the head node from the list and return it
		// the next node in the list is the new head node
		let current = this.head;
		this.head = this.head.next;
		return current;
	}

	insertAt(X, data) {
		// insert a new node into the list with the given data
		// place it after X nodes in the list
		// if X exceeds the bounds of the list, put the node at the end
		// insertAt(0, 7) would add the new node as the head
		let newNode = new Node(data);
		let i = 1;
		let current = this.head;
		if (X === 0) {
			this.prependNode(data);
			return;
		}
		while (i < X) {
			current = current.next;
			if (this.head.next === null) {
				break;
			}
			i++;
		}
		current.next = newNode;
		newNode.next = current.next;
	}

	removeAt(X) {
		// remove the Xth node from the list, considering 0 to be the first node
		// return the node that has been removed
		if (X === 0) {
			return this.removeFromFront();
		}
		let i = 0;
		let current = this.head;
		let next = this.head.next;
		while (i < X - 1) {
			current = next;
			next = next.next;
			if (next === null) {
				break;
			}
			i++;
		}
		current.next = next.next;
		return next;
	}

	search(data) {
		// searches the list for a node with the given data
		// if it is found, return the "index" of the node, considering 0 to be the first node
		// if not, return false
		let i = 0;
		let current = this.head;
		while (current.data !== data) {
			if (current.next === null) {
				return false;
			}
			current = current.next;
			i++;
		}
		return i;
	}

	sort() {
		// sort the Linked List in ascending order of data values
		let current = this.head;
		let next = this.head.next;
		let i = 0;
		while (current) {
			current = current.next;
			i++;
		}

		for (let j = 0; j <= i; j++) {
			current = this.head;
			next = this.head.next;
			while (next) {
				if (current.data > next.data) {
					let temp = current.data;
					current.data = next.data;
					next.data = temp;
				}
				current = next;
				next = next.next;
			}
		}
	}
}
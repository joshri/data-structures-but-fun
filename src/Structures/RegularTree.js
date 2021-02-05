class RegularNode {
	constructor(data) {
		// a node has data, left, and right pointers
		// left and right are intialized as null
		this.data = data;
		this.children = [];
		this.parent = null;
	}
}

class RegularTree {
	constructor() {
		// when a new Tree is made, it has a root property
		this.root = null;
	}
	insert(data, parent = false) {
		// add a new Node to the tree, with data as the Node's data
		let newNode = new RegularNode(data);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		const parent = this.depth(parent);
		if (!parent) {
			return false;
		} else {
			parent.children.push(newNode);
			return;
		}
	}

	depth(data) {
		if (this.root.data === data) {
			return this.root;
		}
		let current = this.root;
		function recurse(data, current) {
			if (!current) {
				return;
			}
			if (current.data === data) {
				return current;
			}
			for (let i = 0; i < current.children.length; i++) {
				recurse(data, current.children[i]);
			}
		}
		recurse(data, current);
		return false;
	}

	search(val) {
		// search the Tree for a node with the given value
		// if the node exists, return it
		// if the node doesn't exist, return false
		let current = this.head;
		while (current) {
			if (current.data === val) {
				return current;
			} else if (val < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return false;
	}

	size(node) {
		// calculate the number of nodes in the tree, starting from the given node
		let i = 0;
		let current = node;
		if (current) {
			i += 1;
			i += this.size(current.left);
			i += this.size(current.right);
		}
		return i;
	}

	getMax() {
		// return the maximum value stored in the tree
		let current = this.head;
		while (current) {
			if (current.right) {
				current = current.right;
			} else {
				return current.data;
			}
		}
		return null;
	}

	height(node) {
		// calculate the maximum amount of nodes in any one path from the given node
		if (!node) {
			return 0;
		}
		return 1 + Math.max(this.height(node.left), this.height(node.right));
	}

	isBalanced(node) {
		// return true or false based on whether the sub-tree starting at the given node is balanced
		// A tree is imbalanced if the height of one branch exceeds the other side by more than one level
		// A tree is balanced if all branches end within one level of each other.
		if (Math.abs(this.height(node.left) - this.height(node.right) > 1)) {
			return false;
		}
		return true;
	}
}


describe('insert', () => {
	const tree = new RegularTree();
	tree.insert('hello');
	tree.insert('Harriet', 'hello');
	tree.insert('Goose', 'hello');
	tree.insert('You Stink', 'Harriet');
	it('should create root if root is null', () => {
		assert.strictEqual(this.root.data, 'hello');
    });
    it('should add child to parent node', () => {
        assert.strictEqual(this.root.children, ['Harriet', 'Goose']);
        assert.strictEqual(this.root.children[0].children[0], 'You Stink');
    })
});

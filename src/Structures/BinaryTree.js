class BinaryNode {
    constructor(data){
    // a node has data, left, and right pointers
    // left and right are intialized as null
      this.data = data;
      this.left = null;
      this.right = null;
    }
}

class BinaryTree {
    constructor(){
        // when a new Tree is made, it has a root property
      this.root = null;
    }
    insert(data){
        // add a new Node to the tree, with data as the Node's data
      let newNode = new BinaryNode(data);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      let current = this.root;
      while (current) {
        if (data > current.data) {
          if (current.right) {
          current = current.right;
          } else {
            current.right = newNode;
            return;
          }  
        }
        if (data < current.data) {
          if (current.left) {
          current = current.left
          } else {
            current.left = newNode;
            return;
          }
        }
      } 
    }

    search(val){
        // search the Tree for a node with the given value
        // if the node exists, return it
        // if the node doesn't exist, return false
      let current = this.head
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

    size(node){
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

    getMax(){
        // return the maximum value stored in the tree
      let current = this.head
      while (current) {
       if (current.right) {
         current = current.right
       } else {
         return current.data;
       }
      }
      return null;
    }

    height(node){
        // calculate the maximum amount of nodes in any one path from the given node
      if (!node) {
        return 0;
      }
      return 1 + Math.max(this.height(node.left), this.height(node.right))   
    }
    
    isBalanced(node){
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
      if (Math.abs(this.height(node.left) - this.height(node.right) > 1)) {
        return false;
      }
      return true;
    }
}
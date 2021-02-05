import React from 'react';
import {Node, LinkedList, HashTable} from '../Structures/HashTable';

function App() {
  const testeroo = new HashTable(10);
  console.log(testeroo);
	console.log(testeroo.insert('hop', 'pop'));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

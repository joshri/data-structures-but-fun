import React from 'react';
import {Node, LinkedList, HashTable} from './HashTable';


function App() {
  const gribble = new HashTable(10);
	console.log(gribble.insert('hop', 'pop'));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

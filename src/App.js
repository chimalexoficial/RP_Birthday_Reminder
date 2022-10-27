import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  // my initial state is my data, initializing that here
  const [people, setPeople] = useState(data);

  return <main>
    <section className='container'>
      <h3>{people.length}</h3>
      <List people={people} />
      {/* passing an empty array here!! not 0 */}
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>;
}

export default App;

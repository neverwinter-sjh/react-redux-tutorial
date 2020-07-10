import React from 'react';
import CounterContainer from 'src/containers/CounterContainer';
import TodosContainer from 'src/containers/TodoContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;

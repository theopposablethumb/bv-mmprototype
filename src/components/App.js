import React from 'react';
import Questions from './guided-flow/questions';
import '../index.css';

let App = () => {
  return (
    <>
      <header>
        <h1>Living your best life</h1>
      </header>
      <main>
      <Questions />
      </main>
    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Questions from './guided-flow/questions';
import '../index.css';

let App = () => {
  return (
    <>
      <header>
        <h1>Living your best life</h1>
      </header>
      <main>
      <BrowserRouter>
        <Route path='/guided' component={Questions} />
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
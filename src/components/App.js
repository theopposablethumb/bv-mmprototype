import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Questions from './guided-flow/Questions';
import Start from './search/Start';
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
        <Route path='/search' component={Start} />
      </BrowserRouter>
      </main>
      <footer>
        <p>&copy; BelleVie Care 2021</p>
      </footer>
    </>
  );
}

export default App;
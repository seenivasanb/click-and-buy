import React from 'react';
import { render } from 'react-dom';
import './root.css';

const App = () => (
  <div className="container">
    <h1 className="container__header">AI MIRROR POC - TEST changes for sample commit</h1>
  </div>
);

render(<App />, document.getElementById('root-node'));
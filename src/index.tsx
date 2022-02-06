import React from 'react';
import { render } from 'react-dom';
import './root.css';

const App = () => (
  <div className="container">
    <h1 className="container__header">AI MIRROR - TEST SUCCESS</h1>
  </div>
);

render(<App />, document.getElementById('root-node'));
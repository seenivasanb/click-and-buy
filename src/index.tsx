import React from 'react';
import { render } from 'react-dom';
import './root.css';

const App = () => {
    return <div className='container'>
        <h1 className='container__header'>AI MIRROR</h1>
    </div>;
};

render(<App />, document.getElementById('root-node'));
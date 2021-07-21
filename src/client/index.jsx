import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const maze = JSON.parse(document.getElementById('maze').innerHTML);

ReactDOM.render(<App maze={maze}/>, document.getElementById('root'));
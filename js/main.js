import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
import myWork from '../data/examples.json'

//const myWork = require('json-loader!../data/examples.json');

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));

// console.log("Loaded react-dom");
// console.log("Webpack working");

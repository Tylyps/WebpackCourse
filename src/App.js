import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'TEST 123');

ReactDOM.render(template, document.getElementById('app'));

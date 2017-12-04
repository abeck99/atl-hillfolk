import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Rubik One'],
    urls: ['/src/fonts/fonts.css']
  }
});

ReactDOM.render(<Root/>, document.getElementById('content'));

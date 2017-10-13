import Style from '../css/style.scss';
import Main from '../js/Components/main.jsx';
import Nav from '../js/Components/nav.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <Nav / >
    <Main />
  </div>, document.getElementById('app'));

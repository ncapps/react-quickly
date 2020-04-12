import React from 'react';
import Router from './Router';

const mapping = {
  '#profile': <div>Profile (<a href="#">home</a>)</div>,
  '#accounts': <div>Accounts (<a href="#">home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
    </div>
}

function App() {
  return <Router mapping= {mapping}/>;
}

export default App;

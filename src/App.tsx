import React from 'react';

import global from './global.module.scss'

import Header from './Components/Header/Header'
import Main from './Pages/Main/Main'

function App() {
  return (
    <div className={global.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

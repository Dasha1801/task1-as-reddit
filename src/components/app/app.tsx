import React from 'react';
import Header from '../header/header';
import Main from '../main/main';

function App():JSX.Element {
  return (
    <div data-testid="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;

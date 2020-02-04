import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import ContentContainer from './components/content-container/content-container.component';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainer />
    </div>
  );
}

export default App;
